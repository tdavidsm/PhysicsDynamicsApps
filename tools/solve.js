// Checks the Momentum Stones levels: baseline score (no pushes) and the best score a random search + hill climb finds.
// Usage: node tools/solve.js [iterations] [first-level last-level]   e.g. node tools/solve.js 3000 9 24
const fs=require('fs'), path=require('path');
const html=fs.readFileSync(path.join(__dirname,'../momentum-stones/index.html'),'utf8');
const src=html.match(/<script id="engine">([\s\S]*?)<\/script>/)[1];
const E=new Function('module',src+';return module.exports;')({exports:{}});
const {LEVELS,defaultSetup,simulate,scoreOf,finalScore,maxScore,validSpot,radiusFor,impulseUsed,starsFor}=E;
const ITER=+process.argv[2]||1500, FIRST=+process.argv[3]||1, LAST=+process.argv[4]||LEVELS.length;
const rnd=(a,b)=>a+Math.random()*(b-a);
function bounds(f){ return f.type==='rect'?[f.x-f.w/2,f.x+f.w/2,f.y-f.h/2,f.y+f.h/2]:[f.x-f.r,f.x+f.r,f.y-f.r,f.y+f.r]; }

function randomPlan(lv,setup,i){
  const p=setup[i], [x0,x1,y0,y1]=bounds(lv.field);
  for(let k=0;k<80;k++){ const x=rnd(x0,x1), y=rnd(y0,y1); if(validSpot(lv,setup,i,x,y)){ p.x=x; p.y=y; break; } }
  p.dir=rnd(0,2*Math.PI); p.dur=Math.round(rnd(0.25,lv.tmax)*4)/4; p.t0=Math.round(rnd(0,lv.T*0.6)*4)/4;
  p.F=Math.round(rnd(0,lv.Fmax)*2)/2;
}
function fixBudget(lv,setup){ const u=impulseUsed(setup); if(u>lv.budget){ const f=lv.budget/u; setup.forEach(p=>p.F=Math.floor(p.F*f*2)/2); } }
function evalS(lv,s){ return finalScore(lv,scoreOf(simulate(lv,s),lv).total,impulseUsed(s)).total; }
function mutate(lv,s){
  const c=s.map(p=>({...p})), i=Math.floor(Math.random()*c.length), p=c[i], r=Math.random();
  if(r<0.2){ const nx=p.x+rnd(-0.6,0.6), ny=p.y+rnd(-0.6,0.6); if(validSpot(lv,c,i,nx,ny)){p.x=nx;p.y=ny;} }
  else if(r<0.45) p.dir+=rnd(-0.15,0.15);
  else if(r<0.65) p.F=Math.max(0,Math.min(lv.Fmax,p.F+(Math.random()<.5?-0.5:0.5)));
  else if(r<0.82) p.t0=Math.max(0,Math.min(lv.T-p.dur,p.t0+(Math.random()<.5?-0.25:0.25)));
  else p.dur=Math.max(0.25,Math.min(lv.tmax,p.dur+(Math.random()<.5?-0.25:0.25)));
  fixBudget(lv,c); return c;
}
for(let li=FIRST-1;li<LAST;li++){ const lv=LEVELS[li];
  const all=[...lv.greens,...lv.others];
  for(let a=0;a<all.length;a++) for(let b=a+1;b<all.length;b++)
    if(Math.hypot(all[a].x-all[b].x,all[a].y-all[b].y)<radiusFor(all[a].m)+radiusFor(all[b].m)) console.log(`  !! L${li+1} overlap ${a} ${b}`);
  lv.greens.forEach((g,i)=>{ if(!validSpot(lv,defaultSetup(lv),i,g.x,g.y)) console.log(`  !! L${li+1} green ${i} default spot invalid`); });
  const base=evalS(lv,defaultSetup(lv));
  let best=-1e9, bestS=null;
  for(let it=0;it<ITER;it++){ const s=defaultSetup(lv); s.forEach((_,i)=>randomPlan(lv,s,i)); fixBudget(lv,s);
    const v=evalS(lv,s); if(v>best){best=v;bestS=s;} }
  for(let it=0;it<ITER;it++){ const c=mutate(lv,bestS), v=evalS(lv,c); if(v>=best){best=v;bestS=c;} }
  const f=finalScore(lv,scoreOf(simulate(lv,bestS),lv).total,impulseUsed(bestS));
  console.log(`L${li+1} ${lv.name.padEnd(16)} max stones ${String(maxScore(lv)).padStart(3)}  baseline ${String(base).padStart(5)} (${starsFor(lv,base)}★)  best found ${String(best).padStart(5)} = ${f.stone} stones + ${f.bonus} bonus (${impulseUsed(bestS).toFixed(1)}/${lv.budget} N·s)  stars ${lv.stars.join('/')}`);
}
