---
slug: adding-image-in-reactjs
title: Adding Images in React.js
description: Adding Images in React.js
authors: shahpreetk
tags: [react, rendering, images]
---

Images are integral to web development, impacting performance significantly. Efficient management can streamline your React app's functionality and user experience. Let's explore a streamlined approach.

<!-- truncate -->

**Streamlining Image Handling in React:**

One common method involves creating an `assets/images` folder within your `src` directory and importing images throughout your project. However, optimizing this process can further enhance performance.

**Using the Public Folder for Images (or Files):**

1. Create an assets or images folder in your project's `public` directory.
2. Store your images/files here for easy access.
3. Within React components, reference images directly using `/assets/<image_name>` in the `src` attribute.

**Optimizing Image Size:**

Utilize tools like [TinyPNG](https://tinypng.com/) to compress image files while maintaining quality. This reduces load times and enhances user experience, contributing to improved overall performance.

#### References

- [Storing images in react](https://www.upbeatcode.com/react/where-to-store-images-in-react-app/)
