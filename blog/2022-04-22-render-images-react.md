---
slug: render-images-react
title: Rendering images in React
description: Using the public folder to save images and not needing to import them several times
authors: shahpreetk
tags: [react, rendering, images]
---

Images stored in the public folder are served as static assets. Doing this, should help you avoid importing the images in your components several times. It also shortens the path to the image in the src attribute.


<!-- truncate -->

You can do so by following the instructions below:
1. Create a new folder in your public folder called ```assets``` or ```images```
2. Store all your images in this folder
3. In your component, you can directly type the following in the src attribute: ```/assets/<image_name>```

#### References
- [Storing images in react](https://www.upbeatcode.com/react/where-to-store-images-in-react-app/)