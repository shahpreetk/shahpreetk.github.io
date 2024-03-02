---
slug: deploying-a-nodejs-project-to-heroku
title: Deploying a Node.js project to heroku
description: Deploying a Node.js project to heroku
authors: shahpreetk
tags: [deployment, backend, heroku]
---

To deploy a Node.js app to Heroku, follow the instructions below:
<!-- truncate -->
In the terminal, navigate to the root of your project and follow the steps below:
```js
npm install -g heroku
heroku login
heroku apps:create <project_name> // Example, heroku apps:create vikhyaat
git push heroku main
```

You can now access your backend on <b>https://\<project_name>.herokuapp.com</b>

Example, https://vikhyaat.herokuapp.com/

#### References
- [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)