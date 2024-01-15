---
slug: disable-cors
title: Disable CORS policy in Chrome
description: Opens a New Chrome Session with CORS disbaled
authors: shahpreetk
tags: [cors, chrome, same-origin-policy, windows, mac, testing]
---

To initiate a new Chrome session with CORS disabled on <b>Windows</b> for testing purposes, you can use either of the following commands:

Launch the Command Prompt (cmd) terminal and navigate to the directory where the chrome.exe is situated. Typically, it can be found in either the <b>Program Files</b> or <b>Program Files (x86)</b> directories. Executing the following commands will initiate a new Chrome window with the security policy disabled:

```
C:\Users\shahpreetk> cd C:\Program Files\Google\Chrome\Application

⁠
C:\Program Files\Google\Chrome\Application> chrome.exe --user-data-dir=“C:\temp\chrome” —disable-web-security 
```

OR

```
C:\Users\shahpreetk> cd C:\Program Files (x86)\Google\Chrome\Application

⁠
C:\Program Files (x86)\Google\Chrome\Application\> ⁠ chrome.exe --user-data-dir=“C:\temp\chrome” —disable-web-security ⁠
```

<!-- truncate -->


For <b>Mac</b>, you can achieve the same testing setup with the following commands:


- To open a new Chrome session/window with CORS disabled:
```
open -na "Google Chrome" --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
```

- To open a new Chrome tab in an open Chrome session/window with CORS disabled:
```
open -a "Google Chrome" --args --disable-web-security --user-data-dir
```