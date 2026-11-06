# ⚙️ Physics Dynamics Apps

Browser games and simulations about **forces, impulse, momentum and collisions**. Each app runs entirely in the browser, with no install and no accounts.

**▶ All apps:** https://tdavidsm.github.io/PhysicsDynamicsApps/

| App | The big idea |
|-----|--------------|
| 🥌 [**Momentum Stones**](momentum-stones/) | Plan pushes (force × time) on frictionless ice to knock stones into or out of a target before the clock runs out. |

---

# 🥌 Momentum Stones — Push, Collide, Score

**▶ Play:** https://tdavidsm.github.io/PhysicsDynamicsApps/momentum-stones/

A top-down puzzle game on frictionless ice. Students plan pushes for their green stones, press **Run**, and watch Newton's laws play out for a fixed, known time. When the clock stops, everything freezes and the score is counted.

## How it plays
- **The ice.** A center circle (the middle third of the play area) and a big circle two-thirds of the way out. A stone scores in the zone its **center** is in: **center ×3**, **ring ×1**, **outside ×0**.
- **The stones.** Each stone's size grows with its mass, and its mass (kg) is printed on it.
  - 🟢 **Green**: the player's. Worth nothing, but they're the only stones you can move and push.
  - 🟡 **Gold**: **+ mass × zone**.
  - 🔴 **Red**: **− mass × zone**.
- **Setup phase.** Drag a green stone to move it (each level says how far out it has to start). Drag the tip of its arrow to aim it and set the force, or use the steppers to set:
  - **Force** F (N), **Direction** (°), **Push starts at** (s after Run), **Push lasts** Δt (s).
  - The panel shows **a = F ÷ m**, the **impulse F·Δt**, and **Δv = F·Δt ÷ m** for the selected stone.
  - All green stones share one **impulse budget** (N·s). Each level also sets a maximum force and a longest push.
- **Ghost paths** (on by default) show where every stone would be at the end of the run if nothing hit it, including the effects of pushes, wind, wells, friction and pits. Collisions are left for the student to predict.
- **Run.** Red and gold stones start with their own velocities. Green stones are pushed on schedule (shown as orange flames). Collisions are **perfectly elastic**, so momentum and kinetic energy are both conserved, and there's **no friction**, so moving stones keep moving. Runs can be watched at 1×, 2× or 4× speed. The result is the same at every speed.
- **Score.** At the level's time (10–25 s) everything freezes. Each scoring stone shows its points, and a breakdown table appears.
- **⚡ Efficiency bonus.** Using less impulse raises the score: **bonus = stone points × the share of the impulse budget left unused**. It only applies when stone points are above 0, so doing nothing (or making things worse) never earns a bonus. Example: 6 stone points using 2.5 of 10 N·s leaves 75% unused, so the bonus is +4.5 and the score is 10.5.
- **Stars.** ★ is about the stones. ★★ takes a perfect (or near-perfect) stone result. ★★★ takes a strong result **and** a thrifty plan. Earning ★ unlocks the next level. Stars are saved on the device.

## World 1 · Ice Basics (levels 1–8)
| # | Level | Time | Impulse budget | New idea |
|---|-------|------|----------------|----------|
| 1 | First Push | 10 s | 10 N·s | No friction: push gently enough that the gold stone is still in the center at 10 s. |
| 2 | Clear the Center | 10 s | 14 N·s | Knock a red stone all the way out. |
| 3 | Heavy and Light | 15 s | 18 N·s | A 6 kg red stone: the same impulse barely changes a heavy stone's velocity. |
| 4 | Moving Targets | 15 s | 18 N·s | Stones already moving. Use start times to meet them. |
| 5 | Crossing Paths | 20 s | 22 N·s | Two stones heading for the center. A sideways hit changes direction. |
| 6 | Rush Hour | 20 s | 22 N·s | Five stones moving. Greens must start outside the big circle. |
| 7 | The Heavyweight | 20 s | 26 N·s | An 8 kg red stone on a collision course with the big gold stone. |
| 8 | Grand Finale | 25 s | 30 N·s | Seven stones and four greens. |

## World 2 · Strange Ice (levels 9–24)
Unlocks after level 8. Each obstacle shows a different idea about force and motion:

| Obstacle | What it does | The physics |
|----------|--------------|-------------|
| 🌀 **Gravity well** | Pulls every stone toward it, harder up close. | Same *acceleration* for every mass (like real gravity), `a = GM ÷ r²`. Orbits and slingshots. |
| 🟫 **Rough patch** | Slows sliding stones until they stop. | Kinetic friction: same deceleration `μg` for every mass. Stopping distance `v² ÷ 2μg`. |
| 💨 **Wind zone** | Pushes every stone inside it one way. | Same *force* for every mass, so `a = F ÷ m`: light stones get blown around more. |
| 🕳️ **Pit** | A stone whose center slides over it falls in and stays. | It still scores for the zone it's in, so a pit in a target can lock in gold *or* red. |
| 🟣 **Sticky stone** | Glues onto anything it touches. | Perfectly inelastic collision: momentum conserved, kinetic energy lost. Glued stones move as one. |
| 🎯 **New rinks and targets** | Rectangular rinks, ring-shaped (donut) zones, twin targets, a ×5 zone. | A stone scores the highest zone its center is in. |

| # | Level | Time | Impulse budget | What's new |
|---|-------|------|----------------|------------|
| 9 | Gravity Well | 15 s | 14 N·s | A well pulls everything toward it. |
| 10 | Slingshot | 20 s | 14 N·s | An off-center target with a well in the middle. |
| 11 | Rough Patch | 15 s | 16 N·s | Friction covers the center; a red stone will stop there. |
| 12 | Sticky Situation | 15 s | 16 N·s | Gray sticky stones (worth 0) glue to whatever touches them. |
| 13 | Crosswind | 15 s | 16 N·s | Rectangular rink; a wind strip between you and a square target. |
| 14 | Into the Pit | 15 s | 14 N·s | Pits: dump reds out of play, lock a gold in the center pit. |
| 15 | Twin Targets | 15 s | 16 N·s | Two ×3 targets on a rectangular rink. |
| 16 | Orbit | 20 s | 16 N·s | A ring-shaped ×3 zone around a strong well; a gold stone in orbit. |
| 17 | Glue Trap | 15 s | 18 N·s | Sticky red stones that grab your green stones. |
| 18 | Downhill | 15 s | 20 N·s | Wind across the whole rink: the 6 kg red barely moves, 1 kg stones slide away. |
| 19 | Pit Stop | 15 s | 14 N·s | A pit in the middle of the target. |
| 20 | Mud Donut | 15 s | 16 N·s | A ring target with mud patches to park stones on. |
| 21 | Double Well | 15 s | 16 N·s | Two wells; the center is an unstable balance point. |
| 22 | Storm | 20 s | 22 N·s | Four winds swirl clockwise; only a calm cross in the middle. |
| 23 | Minefield | 20 s | 22 N·s | Pits, mud and a sticky stone together. |
| 24 | The Gauntlet | 25 s | 30 N·s | Everything at once, plus a tiny ×5 target on a mud patch. |

Star thresholds are checked with `node tools/solve.js [iterations] [first last]`. It runs the same physics code as the game and reports, for each level, the score if the player does nothing (never enough for a star) and the best score, including the efficiency bonus, that a random search finds. In World 2, ★ / ★★ / ★★★ are set at about 20% / 45% / 70% of the best score found.

## Teaching notes
- The **run log** records each attempt (level, impulse used, gold points, red points, efficiency bonus, score, stars) for comparing plans.
- The efficiency bonus pushes students toward the *smallest* impulse that does the job, which means using collisions and momentum transfer instead of brute force.
- World 2 contrasts **same force** (wind: light stones accelerate more) with **same acceleration** (gravity wells and friction: every mass gets the same a).
- Good discussion prompts: why does a 1 kg green stone move so much faster than a 4 kg one after the same push? Why does an equal-mass head-on hit stop the green stone dead? Why did the gold stone overshoot?
- **🔑 Teacher unlock:** passcode **1253** unlocks every level on that device until the page reloads.
- Built touch-first for **iPad Safari**, and also works on Chromebooks and laptops.

## Tech
Each app is a single self-contained `index.html` (plain HTML/CSS/JS, canvas animation, no dependencies). Physics uses a fixed 1/400 s time step, so a plan always gives the same result. Deploy with GitHub Pages from `main`.
