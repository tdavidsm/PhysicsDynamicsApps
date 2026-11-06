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
- **Ghost paths** (on by default) show where every moving stone would be at the end of the run if nothing hit it (`x = x₀ + v·t`). Collisions are left for the student to predict.
- **Run.** Red and gold stones start with their own velocities. Green stones are pushed on schedule (shown as orange flames). Collisions are **perfectly elastic**, so momentum and kinetic energy are both conserved, and there's **no friction**, so moving stones keep moving. Runs can be watched at 1×, 2× or 4× speed. The result is the same at every speed.
- **Score.** At the level's time (10–25 s) everything freezes. Each scoring stone shows its points, and a breakdown table appears.
- **⚡ Efficiency bonus.** Using less impulse raises the score: **bonus = stone points × the share of the impulse budget left unused**. It only applies when stone points are above 0, so doing nothing (or making things worse) never earns a bonus. Example: 6 stone points using 2.5 of 10 N·s leaves 75% unused, so the bonus is +4.5 and the score is 10.5.
- **Stars.** ★ is about the stones. ★★ takes a perfect (or near-perfect) stone result. ★★★ takes a strong result **and** a thrifty plan. Earning ★ unlocks the next level. Stars are saved on the device.

## Levels
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

Star thresholds are checked with `node tools/solve.js`. It runs the same physics code as the game and reports, for each level, the score if the player does nothing (never enough for a star) and the best score, including the efficiency bonus, that a random search finds (enough for ★★★).

## Teaching notes
- The **run log** records each attempt (level, impulse used, gold points, red points, efficiency bonus, score, stars) for comparing plans.
- The efficiency bonus pushes students toward the *smallest* impulse that does the job, which means using collisions and momentum transfer instead of brute force.
- Good discussion prompts: why does a 1 kg green stone move so much faster than a 4 kg one after the same push? Why does an equal-mass head-on hit stop the green stone dead? Why did the gold stone overshoot?
- **🔑 Teacher unlock:** passcode **1253** unlocks every level on that device until the page reloads.
- Built touch-first for **iPad Safari**, and also works on Chromebooks and laptops.

## Tech
Each app is a single self-contained `index.html` (plain HTML/CSS/JS, canvas animation, no dependencies). Physics uses a fixed 1/400 s time step, so a plan always gives the same result. Deploy with GitHub Pages from `main`.
