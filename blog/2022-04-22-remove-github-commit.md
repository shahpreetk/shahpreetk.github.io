---
slug: remove-github-commit
title: Removing a commit from Github
description: Removing the last commit pushed to Github
authors: shahpreetk
tags: [git, github]
---

<u>NOTE</u>: this solution works only if the commit to be removed is the latest commit pushed to GitHub.

<!-- truncate -->

1. Copy the commit reference you like to go back to from the log: ```git log```
2. Reset git to the commit reference: ```git reset <commit_ref>```
3. In case you like to keep the commit changes after deletion, stash/store the local changes from the wrong commit: ```git stash```
4. Push the changes to remote repository, (-f or --force): ```git push -f```
5. Get back the stored changes to local repository: ```git stash apply```
6. If you have untracked/new files in the changes, you need to add them to git: ```git add .```
7. Commit the changes: ```git commit -m '<new_commit_message>'```


#### References
- [How can I remove a commit on GitHub?](https://stackoverflow.com/a/44415889)