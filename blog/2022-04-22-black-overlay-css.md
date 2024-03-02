---
slug: creating-black-overlay-on-image-in-css
title: Creating a Black Overlay on image in CSS
description: Creating a black overlay over an image in CSS
authors: shahpreetk
tags: [css, overlay, styles]
---

Code for creating a black overlay in CSS over an image:
```css
{
  background: black;
  overflow: hidden;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("<IMAGEURL_COMES_HERE>");
  object-fit: cover;
}
```

#### References
- [Overlay with JavaScript](https://www.w3schools.com/howto/howto_css_overlay.asp)