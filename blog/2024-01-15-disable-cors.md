---
slug: disable-cors-policy-in-chrome
title: Disable CORS policy in Chrome
description: Opens a New Chrome Session with CORS disbaled
authors: shahpreetk
tags: [cors, chrome, same-origin-policy, windows, mac, testing]
---

To initiate a new Chrome session with CORS disabled on **Windows** for testing purposes, you can use either of the following commands:

Launch the `Command Prompt (cmd)` terminal and navigate to the directory where the chrome.exe is situated.

Typically, it can be found in either the **Program Files** or **Program Files (x86)** directories. Executing the following commands will initiate a new Chrome window with the security policy disabled:

```sh
C:\Users\shahpreetk> cd C:\Program Files\Google\Chrome\Application

⁠
C:\Program Files\Google\Chrome\Application> chrome.exe --user-data-dir="C:/temp/chrome" -—disable-web-security 
```

<!-- truncate -->

OR

```sh
C:\Users\shahpreetk> cd C:\Program Files (x86)\Google\Chrome\Application

⁠
C:\Program Files (x86)\Google\Chrome\Application\> ⁠ chrome.exe --user-data-dir="C:/temp/chrome" --disable-web-security ⁠
```

For **Mac**, you can achieve the same testing setup with the following commands:

- To open a new Chrome session/window with CORS disabled:

```sh
open -na "Google Chrome" --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
```

- To open a new Chrome tab in an open Chrome session/window with CORS disabled:

```sh
open -a "Google Chrome" --args --disable-web-security --user-data-dir
```
