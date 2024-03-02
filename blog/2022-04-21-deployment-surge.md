---
slug: deploying-a-react-app-to-surge-sh
title: Deploying a React App to Surge.sh
description: Deploying a React App to Surge.sh
authors: shahpreetk
tags: [deployment, react, surge]
---

To deploy a React app to Surge.sh, follow the instructions below:

<!-- truncate -->

1. Create a new file named `CNAME` in the public folder and enter the name of your surge domain in it.
2. In the terminal in the root directory of your project, run the following commands:

```sh
npm run build
cd build
```

4. Rename `index.html` to `200.html` in the build folder, for client side routing.
5. Run `surge` in the terminal to deploy your app to surge.sh

#### References

- [Getting started with Surge](https://surge.sh/help/getting-started-with-surge)
- [Remembering a domain](https://surge.sh/help/remembering-a-domain)
