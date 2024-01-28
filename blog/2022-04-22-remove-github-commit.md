---
slug: remove-github-commit
title: Removing a commit from Github
description: Removing a commit pushed to Github
authors: shahpreetk
tags: [git, github]
---

The following steps can be used to remove a commit pushed to Github:
<!-- truncate -->

```js
git log // copy the commit reference you like to go back to from the log
git reset <commit_ref> // reset git to the commit reference
git stash // stash/store the local changes from the wrong commit if you want to keep the commit changes
git push -f // push the changes to remote repository, (-f or --force)
git stash apply // get back the stored changes to local repository
git add . // if you have untracked/new files in the changes, you need to add them to git
git commit -m '<your_commit_message>' // commit the changes
```

<u>NOTE</u>: this solution works only if the commit to be removed is the latest commit pushed to GitHub.


#### References
- [How can I remove a commit on GitHub?](https://stackoverflow.com/a/44415889)