---
slug: deployment-githubpages
title: Deployment - GitHub Pages
description: Deploying a React app to GitHub Pages
authors: shahpreetk
tags: [deployment, react, gh-pages]
---

To deploy a React app to GitHub Pages, follow the instructions below:
<!-- truncate -->
1. Install gh-pages as a dev depedency: ```npm install -D gh-pages```
2. In package.json add the following in scripts:
```sh
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
"build": "react-scripts build && cp build/index.html build/404.html",
```
3. Run ```npm run deploy``` to deploy the site to GitHub Pages.

NOTE: On Windows cmd, it will be ```copy``` instead of ```cp```.

#### References
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)