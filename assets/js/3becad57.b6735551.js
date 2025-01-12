"use strict";(self.webpackChunkshahpreetk_github_io=self.webpackChunkshahpreetk_github_io||[]).push([[7139],{7820:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var i=s(9635),t=s(4848),r=s(8453);const o={slug:"deploying-a-nodejs-project-to-linode",title:"Deploying a Node.js project to Linode",description:"Deploying a Node.js project to linode",authors:"shahpreetk",tags:["deployment","backend","linode"]},l=void 0,c={authorsImageUrls:[void 0]},d=[{value:"References",id:"references",level:4}];function a(e){const n={a:"a",code:"code",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"To deploy a Node.js app to Linode, follow the instructions below:"}),"\n",(0,t.jsxs)(n.ol,{start:"0",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sign up for a Linode account"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.strong,{children:"Create Linode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose ",(0,t.jsx)(n.strong,{children:"Ubuntu LTS"})," for the distribution"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Choose a ",(0,t.jsx)(n.strong,{children:"Region"})," closest to you"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Linode Plan"})," section, choose ",(0,t.jsx)(n.strong,{children:"Shared CPU"})," and then choose ",(0,t.jsx)(n.strong,{children:"Nanode 1GB"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a Root Password"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Add an SSH key or choose one from your existing keys"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Linode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Wait for the Linode to show ",(0,t.jsx)(n.strong,{children:"Running"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the Linode SSH Access, paste it in the terminal and run it"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'When it prompts you asking -> "Are you sure you want to continue connecting (yes/no/fingerprint)?", type "yes"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Now, run the following commands ->"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"    apt-get update\n    apt-get upgrade\n    apt-get install npm\n    npm i -g n\n    n install lts\n    exit\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Restart the server by entering your SSH Access. The server will now be using the latest node version"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make sure your latest project code is pushed to a GitHub repository."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create a SSH key on your server and copy and upload to GitHub."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Git clone the repository using SSH."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["cd into your project and run ",(0,t.jsx)(n.code,{children:"npm install"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(optional) If you want to copy the .env file from your local machine to the remote server, run the following command:\n",(0,t.jsx)(n.code,{children:"scp <location_of_file_in_local_machine>/.env root@<server_ip_address>:~/<location_of_project>"}),"\nYou can add a -r flag to the command to copy an entire folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the node project to ensure it's running correctly."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Then run the following commands:"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"npm i -g pm2 // install pm2\npm2 start <entry_file_name>.js -n <project_name> // start the project\npm2 startup ubuntu // to restart API by itself, in case of crash\napt-get install nginx // install nginx for reverse-proxy\ncd ~/etc/nginx/sites-available\nnano default\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"20",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In this file make the following changes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'a. At "server*name *;" replace the underscore with your domain name(with and without www prefix) or server IP address.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'b. In the "location /" block, remove the existing code and add the following:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-nginx",children:"location / {\nproxy_pass http://localhost:5000;\nproxy_http_version 1.1;\nproxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection 'upgrade';\nproxy_set_header Host $host;\nproxy_cache_bypass $http_upgrade;\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["c. ",(0,t.jsx)(n.strong,{children:"[Ctrl] + S"})," to save the file. ",(0,t.jsx)(n.strong,{children:"[Ctrl] + X"})," to exit the file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"nginx -t"})," to check if the changes are correct."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Restart nginx by running ",(0,t.jsx)(n.code,{children:"systemctl restart nginx"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"cd ~"})," and then ",(0,t.jsx)(n.code,{children:"ufw enable"})," to enable the firewall."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"ufw allow ssh"}),", ",(0,t.jsx)(n.code,{children:"ufw allow http"})," and ",(0,t.jsx)(n.code,{children:"ufw allow https"})," to allow using these methods through the firewall. The firewall restricts access trough other ports like 5000."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"snap install --classic certbot"})," to install the Let's Encrypt certificate manager."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"ln -s /snap/bin/certbot /usr/bin/certbot"})," to link the certificate manager to the /usr/bin/certbot folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Setup Domain on Linode by ->"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Go to ",(0,t.jsx)(n.strong,{children:"Domains"})," tab in sidebar."]}),"\n",(0,t.jsx)(n.li,{children:"Create a new domain."}),"\n",(0,t.jsx)(n.li,{children:'In the "Domain" section, type the domain name.'}),"\n",(0,t.jsx)(n.li,{children:"Provide an email address."}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.strong,{children:"Insert Default Records"}),", select ",(0,t.jsx)(n.strong,{children:"Insert Default Records from one of my Linodes"})]}),"\n",(0,t.jsx)(n.li,{children:"Select the Linode you want to use."}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Create Domain"})]}),"\n",(0,t.jsxs)(n.li,{children:["Copy the NS(name servers) and add them to your domain name provider (example: namecheap) as ",(0,t.jsx)(n.strong,{children:"Custom DNS"})]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.strong,{children:"Save"})]}),"\n",(0,t.jsx)(n.li,{children:"Check if your domain (without https) now shows your project."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"certbot --nginx"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(optional) Run ",(0,t.jsx)(n.code,{children:"certbot renew --dry-run"})," to check if the SSL certificate gets renewed successfully."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Reload your domain to check if it is now secure."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You have now successfully deployed your project to a Linode with a SSL certificate."}),"\n",(0,t.jsx)(n.h4,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linode.com/docs/guides/use-public-key-authentication-with-ssh/",children:"Creating and Using SSH keys"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}},9635:e=>{e.exports=JSON.parse('{"permalink":"/blog/deploying-a-nodejs-project-to-linode","source":"@site/blog/2023-07-17-deployment-linode.md","title":"Deploying a Node.js project to Linode","description":"Deploying a Node.js project to linode","date":"2023-07-17T00:00:00.000Z","tags":[{"inline":true,"label":"deployment","permalink":"/blog/tags/deployment"},{"inline":true,"label":"backend","permalink":"/blog/tags/backend"},{"inline":true,"label":"linode","permalink":"/blog/tags/linode"}],"readingTime":3.045,"hasTruncateMarker":true,"authors":[{"name":"Preet Shah","title":"Software Developer @ JPMC","url":"https://github.com/shahpreetk","description":"Preet Shah is a Full-Stack Software Developer at JP Morgan Chase, specialising in Java Spring Boot, Python and React. Preet is an AWS Certified Associate, currently aiming for her Developer Certification. In her free time, she enjoys crocheting, diving into murder mystery novels, and watching cat videos.","page":{"permalink":"/blog/authors/shahpreetk"},"socials":{"x":"https://x.com/shahpreetk","linkedin":"https://www.linkedin.com/in/shahpreetk/"},"imageURL":"https://github.com/shahpreetk.png\\\\","key":"shahpreetk"}],"frontMatter":{"slug":"deploying-a-nodejs-project-to-linode","title":"Deploying a Node.js project to Linode","description":"Deploying a Node.js project to linode","authors":"shahpreetk","tags":["deployment","backend","linode"]},"unlisted":false,"prevItem":{"title":"Disable CORS policy in Chrome","permalink":"/blog/disable-cors-policy-in-chrome"},"nextItem":{"title":"Deploying a Node.js project to heroku","permalink":"/blog/deploying-a-nodejs-project-to-heroku"}}')}}]);