---
slug: git-tips-and-tricks
title: Git Tips and Tricks
description: A collection of useful Git tips and tricks to enhance your workflow and productivity.
authors: shahpreetk
tags: [git, version-control, productivity, github]
---

Git is an essential tool for developers, providing a robust version control system that facilitates code management, collaboration, and version tracking. While many developers use Git daily, mastering some advanced features can significantly improve your workflow and productivity. In this article, we’ll cover some handy Git tips and tricks that can streamline your development process.

<!-- truncate -->

### Efficiently Managing Commits with `git rebase`

Rebasing is one of Git’s most powerful features, allowing you to clean up and restructure your commit history. It helps you keep your commit timeline more concise by combining or reordering commits, making the project history easier to understand and maintain.

Here’s a basic example of how to rebase your feature branch onto the latest state of the `main` branch:

```bash
git checkout main
git pull --all
git checkout <feature-branch>
git rebase -i main
```

This command opens an interactive rebase session (`-i`), where you can choose to squash, reorder, or edit individual commits. In the interactive rebase editor, you’ll see options like `pick`, `reword`, `squash`, and `edit`, giving you control over how each commit should be handled.

Once you’ve made your adjustments, save and close the editor (`Esc`, followed by `:wq`). If there are no conflicts, Git will automatically reapply your changes on top of the `main` branch.

However, if conflicts arise during the rebase process, Git will pause and allow you to resolve them manually. After resolving conflicts, use:

```bash
git rebase --continue
```

Repeat this process until the rebase is complete. Once finished, you’ll see a message like `Successfully rebased....` At this point, you’ll need to push your changes with a force push:

```bash
git push origin <feature-branch> --force
```

This is necessary because you have rewritten the commit history, and a standard push would result in conflicts.

#### Why Use Rebasing?
The primary advantage of rebasing is maintaining a cleaner and linear commit history. Instead of creating "merge commits" that branch off, rebasing applies your commits directly on top of the target branch, creating a straight line of progress. This makes it easier to follow the evolution of the project and track changes back to their origins without needing to navigate through branches and merge commits.

:::warning
  Be cautious when using git rebase in a shared branch. Since rebasing rewrites commit history, any collaborators who have pulled the original commit history will encounter issues. Only force-push after a rebase when you are sure others aren’t depending on your branch.
:::

### Using `git bisect` to Find Bugs

When you're trying to locate the commit that introduced a bug in a large codebase, `git bisect` is incredibly useful. It performs a binary search through your commit history to pinpoint where things went wrong.

To use `git bisect`:

```bash
git bisect start
git bisect bad #mark the current commit as bad
git bisect good <commit-SHA> #mark a known good commit (like a tag or SHA)
```

Git will start checking commits between the good and bad points, allowing you to test each one. You can mark each commit as "good" or "bad" until you find the problematic commit. After you’ve found it:

```bash
git bisect reset
```

### Using `git reflog` to Recover Lost Commits

`git reflog` keeps a log of every action you’ve taken in Git, even after commits are deleted or reset. It’s useful for recovering commits that you may have thought were lost.

For example, if you accidentally reset a branch or force-pushed to the wrong branch, you can find your lost commits with:

```bash
git reflog
```

Once you find the SHA of the lost commit, you can restore it with:

```bash
git checkout <commit-SHA>
```

### Cherry-Picking Specific Commits (`git cherry-pick`)

If you need to apply a specific commit from one branch to another without merging the entire branch, you can use `git cherry-pick`. This command applies individual commits to your current branch:

```bash
git cherry-pick <commit-SHA>
```

:::info
  To get the commit-SHA of a commit, you can use `git log --oneline`. Copy the SHA of the commit you want to cherry-pick and use it in the command above.
:::

This is helpful when you need to bring over a bug fix or a feature that’s present in one branch but not another.
