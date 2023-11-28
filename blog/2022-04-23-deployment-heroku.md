---
slug: deployment-heroku
title: Deployment - Heroku
description: Deploying a Node.js project to heroku
authors: shahpreetk
tags: [deployment, backend, heroku]
---

To deploy a Node.js app to Heroku, follow the instructions below:
<!-- truncate -->
1. npm install -g heroku
2. In the terminal, type: ```heroku login```
3. Now run: ```heroku apps:create <project_name>```
Example, heroku apps:create vikhyaat
4. If the domain is not already taken, you can now run: ```git push heroku main```
5. You can now access your backend on ```https://<project_name>.herokuapp.com```. Example, https://vikhyaat.herokuapp.com/

#### References
- [Deploying Node.js Apps on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)