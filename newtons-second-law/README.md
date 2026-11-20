# 🛒 Newton's 2nd Law Lab

**▶ Use it:** https://tdavidsm.github.io/PhysicsDynamicsApps/newtons-second-law/

Students find out how force and mass work together to set acceleration. They start with a conceptual warm-up, collect data on a frictionless cart-and-pulley rig, analyze their own graphs step by step until they reach **a = F ÷ m**, and then use the law to predict races between two carts.

## The lab
- **Stage 1 · 🛒 Push the Cart.** Three pushers (a middle schooler, a high schooler and a power lifter) push three baby animals in shopping carts (a chick, a calf and a hippo). For each pairing, students press **▶ Push** and watch the push while its velocity–time graph draws live. The graph has three colored wedges labelled **Slow**, **Medium** and **Fast**. Students fill in a 3 × 3 grid. Forces and masses are in the ratio 1 : 2 : 3, so a stronger pusher than the load is Fast, a matched pair (the diagonal) is Medium, and a weaker pusher is Slow. **Clears:** all 9 cells right. Wrong cells are marked ❌ and can be fixed.
- **Stage 2 · 🧪 Cart & Pulley.** A cart on a table, a pulley at the right edge, and a hanging mass. The cart rolls 0.5 m to a stop. A gravity arrow (Fg) on the hanger grows with its mass. Live position–time and velocity–time graphs draw during each run, and earlier runs stay as faint lines. The app finds **a** from the slope of the v–t line and adds a row to the task's table. Repeat setups play but don't add a row.
  - **Task A (same total mass, change the force):** six 50 g masses move between the cart and the 50 g hanger.
  - **Task B (same force, change the mass):** the hanger stays at 100 g, and up to six 200 g blocks go on the cart.
  - **Check questions:** four multiple-choice questions about what more force or more mass does to the acceleration, and why the total mass stays the same in Task A. All must be right (retries allowed).
  - **Clears:** 5 different trials in each task, then the questions.
- **Stage 3 · 📈 Find the Law.** Eight guided steps using the student's own data:
  1. a vs F is a straight line through (0, 0).
  2. a ÷ F is the same for every trial (typed answer). It's the slope.
  3. 1 ÷ slope = the total mass.
  4. a vs m is a curve.
  5. a × m is the same for every trial (typed answer), and equals F.
  6. Linearizing: a vs 1 ÷ m is a straight line, with an explanation of why.
  7. Pick the equation that fits both experiments: a = F ÷ m.
  8. One practice problem.

  Students can switch between the three graphs. **Clears:** every step answered.
- **Stage 4 · 🏁 Race Day.** Two carts on parallel tracks with different cart loads (100 g blocks) and hanging masses (50 g steps). Students predict **A wins / Tie / B wins**, then watch the race. Afterward the app shows m, F and a for each cart. Race types are random: same total mass with a different split, same hanger with different cart loads, both different, and true ties (about 1 in 5). Races that aren't ties always differ in acceleration by at least 12%. **Clears:** 5 right before 3 wrong. A third miss restarts the series.

## Teacher notes
- **Passcode 1253** (🔑) unlocks every stage on that device until the page reloads. It never awards a completion code. If Stage 2 wasn't done, Stage 3 uses sample data and says so.
- **Randomization:** each device gets a random cart mass (400–600 g), so total masses and accelerations differ between students. The practice problem and all races are random.
- **Completion:** after the 5th correct race (with Stages 1–3 genuinely cleared), students enter their name and get an 8-character code with their initials in the 3rd and 6th spots. Students who come back later see "You've already earned credit" and a link to get a new code.
- **Google Form turn-in:** `FORM_PREFILL_LINK` at the top of the script holds the form's pre-filled link with the placeholders `NAME` and `CODE` (Name → `entry.2072631698`, Code → `entry.1611661514`). **📨 Turn it in** opens the form with both filled in; the student presses Submit. To also collect misses, add a question, pre-fill it with `MISSES`, and paste the new link. If the link is blank, the button hides and students screenshot or copy their code.
- Other settings at the top of the script: travel distance, mass sizes, trials needed, and race wins and misses.
- Progress saves on the device (`localStorage` key `newtons-second-law-lab-v1`).

## Tech
A single self-contained `index.html`: plain HTML/CSS/JS, canvas, no dependencies. Built for iPad Safari. Deployed via GitHub Pages from `main`.
