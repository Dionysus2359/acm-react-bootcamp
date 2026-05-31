# ACM Quest: The Engineering Bootcamp

Welcome to the gauntlet. 

If you're looking for another 14-hour video tutorial where you mindlessly copy a talking head, you're in the wrong place. Tutorial hell is for amateurs. Engineering is for us. 

In this bootcamp, there are no spoon-fed answers. Instead, you'll be operating like a Junior Developer at a fast-paced tech startup. Your Tech Lead (me) has defined a set of strict requirements. You will read the client briefs (the tests), write the code, and satisfy the automated CI/CD pipelines. 

Welcome to the real world.

---

## 🛠️ The Environment Setup

Before you start writing code, you need to get your local environment running.

```bash
# 1. Install your dependencies
npm install

# 2. Start the local development server
npm run dev
```

> [!WARNING]
> **DO NOT commit your `node_modules` folder.** If I see a PR with `node_modules` in it, I will personally close it, and you will get 0 points for the day. Make sure your `.gitignore` is intact.

---

## 📅 The Daily Workflow (Phase 1)

Your job for the next 14 days is to build a robust, production-ready React Component Library from scratch. 

Look inside `src/components/`. You will see folders for each component (e.g., `Button`, `Modal`). Inside each folder, you are given a skeleton `.jsx` file, an empty `.css` file, and a `.test.jsx` file.

**How do you know what to build?**
You don't ask me. You read the `.test.jsx` file. The test file *is* your client brief. Read the assertions to understand what props the component takes, what classes it needs, and exactly how it should behave.

**How to run your tests locally:**
When you are working on a component, you need to verify it passes the requirements *before* you push it to GitHub. 

Run this command in your terminal, replacing `[ComponentName]` with your current task:
```bash
npx vitest run src/components/[ComponentName]
```
---

## 🤖 The CI/CD Pipeline & Leaderboard Points

In the real world, code isn't reviewed by just humans. It's checked by robots.
When you push your code and open a Pull Request (PR) to the `main` branch, our automated GitHub Actions pipeline will intercept your code. It will run isolated tests against the specific component you modified, calculate your score, and post a sticky grading comment directly onto your PR.

Here is exactly how you are graded for Phase 1 (20 Points Total per component):

- **Functional Base (+10 Pts):** All tests pass. If even one test fails, you get 0 for the base score and forfeit all bonuses.
- **First-Push Green Bonus (+5 Pts):** Your tests pass on the very first commit of the PR. (This rewards you for testing locally instead of treating the CI pipeline as your debugger).
- **Speedy Dev Bonus (+5 Pts):** You push your passing code before **11:59 PM IST** on the assigned day. 

---

## 🚀 Phase 2 (Teaser)

Think Phase 1 is tough? It’s just the warmup. 

In Phase 2, we stop building isolated components and start building full, responsive web applications using the component library you just created. Your work will be strictly graded by automated Lighthouse CI audits.

---

## ⚠️ Rules of Engagement

- **Rule 1: Do NOT edit the test files to make them pass.** 
  I have hidden automation scripts that check the integrity of the test files on the server. If you tamper with the tests to cheat the grading system, the pipeline will flag you, and I will fail you for this assignment immediately.

- **Rule 2: Google your errors. Read the docs.**
  React Testing Library, Vitest, and MDN Web Docs are your best friends. If you get stuck, your first instinct should be to research the error, not panic.

Good luck. You're going to need it.
