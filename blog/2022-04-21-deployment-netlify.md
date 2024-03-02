---
slug: deploying-a-react-app-to-netlify
title: Deploying a React App to Netlify
description: Deploying a React App to Netlify
authors: shahpreetk
tags: [deployment, react, netlify]
---

To deploy a React app to Netlify, follow the instructions below:
<!-- truncate -->
1. Some Pre-requisites
    1. For deploying to netlify make a ```_redirects``` file in the public folder
    2. Enter ```/* /index.html 200``` in the _redirects file. This is for client side routing.
    3. There should be no unused variables or imports in the code as it causes netlify build to fail.
    4. All tags in index.html should be closed (example unclosed ```<br>``` tag works in normal html but breaks on netlify).
2. Login to Netlify
3. Select **New site from Git**
4. Choose **Github**
5. Configure the Netlify app on GitHub and choose the repository you wish to publish then select save.
6. Select the repository on netlify and click on Deploy Site. Netlify will now deploy the site for you.
7. You can change the domain that the site is hosted on by changing the name in Domain Settings.
8. Stopping Auto Publish under the Deploys option helps save build time.

<u>ALTERNATIVELY</u>: If you don't want to connect GitHub to Netlify, you can just drag and drop the ```build``` folder to the [Netlify Site Drop](https://app.netlify.com/drop)

#### References
- [Deploy a React App to Netlify](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/)
