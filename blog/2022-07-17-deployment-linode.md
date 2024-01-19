---
slug: deployment-linode
title: Deployment - Linode
description: Deploying a Node.js project to linode
authors: shahpreetk
tags: [deployment, backend, linode]
---

To deploy a Node.js app to Linode, follow the instructions below:
<!-- truncate -->
0. Sign up for a Linode account
1. Click on **Create Linode**
2. Choose **Ubuntu LTS** for the distribution
3. Choose a **Region** closest to you
4. In the **Linode Plan** section, choose **Shared CPU** and then choose **Nanode 1GB**.
5. Create a Root Password
6. Add an SSH key or choose one from your existing keys
7. Click **Create Linode**
8. Wait for the Linode to show **Running**
9. Copy the Linode SSH Access, paste it in the terminal and run it
10. When it prompts you asking -> "Are you sure you want to continue connecting (yes/no/fingerprint)?", type "yes"
11. Now, run the following commands ->

    ```sh
    apt-get update
    apt-get upgrade
    apt-get install npm
    npm i -g n
    n install lts
    exit
    ```
12. Restart the server by entering your SSH Access. The server will now be using the latest node version
13. Make sure your latest project code is pushed to a GitHub repository.
14. Create a SSH key on your server and copy and upload to GitHub.
15. Git clone the repository using SSH.
16. cd into your project and run ```npm install```
17. (optional) If you want to copy the .env file from your local machine to the remote server, run the following command:
      ```scp <location_of_file_in_local_machine>/.env root@<server_ip_address>:~/<location_of_project>```
You can add a -r flag to the command to copy an entire folder.
18. Run the node project to ensure it's running correctly.
19. Run ```npm i -g pm2``` to install pm2.
20. Run ```pm2 start <entry_file_name>.js -n <project_name>``` to start the project.
21. Run ```pm2 startup ubuntu``` to restart API by itself, in case of crash.
22. Run ```apt-get install nginx``` to install nginx for reverse-proxy.
23. Now, run the following commands:
    ```
    cd ~/etc/nginx/sites-available
    nano default
    ```
    In this file make the following changes:
        1. At "server_name _;" replace the underscore with your domain name(with and without www prefix) or server IP address.
        2. In the "location /" block, remove the existing code and add the following:
              ```
              location / {
                  proxy_pass http://localhost:5000;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection 'upgrade';
                  proxy_set_header Host $host;
                  proxy_cache_bypass $http_upgrade;
              }
              ```

        3. **[Ctrl] + S** to save the file. **[Ctrl] + X**  to exit the file.
24. Run ```nginx -t``` to check if the changes are correct.
25. Restart nginx by running ```systemctl restart nginx```.
26. ```cd ~``` and then ```ufw enable``` to enable the firewall.
27. Run ```ufw allow ssh```, ```ufw allow http``` and ```ufw allow https``` to allow using these methods through the firewall. The firewall restricts access trough other ports like 5000.
28. Run ```snap install --classic certbot``` to install the Let's Encrypt certificate manager.
29. Run ```ln -s /snap/bin/certbot /usr/bin/certbot``` to link the certificate manager to the /usr/bin/certbot folder.
30. Setup Domain on Linode by ->
    1. Go to **Domains** tab in sidebar.
    2. Create a new domain.
    3. In the "Domain" section, type the domain name.
    4. Provide an email address.
    5. In **Insert Default Records**, select **Insert Default Records from one of my Linodes**
    6. Select the Linode you want to use.
    7. Click **Create Domain**
    8. Copy the NS(name servers) and add them to your domain name provider (example: namecheap) as **Custom DNS**
    9. Click **Save**
    10. Check if your domain (without https) now shows your project.
31. Run ```certbot --nginx```
32. (optional) Run ```certbot renew --dry-run``` to check if the SSL certificate gets renewed successfully.
33. Reload your domain to check if it is now secure.

You have now successfully deployed your project to a Linode with a SSL certificate.

#### References
- [Creating and Using SSH keys](https://www.linode.com/docs/guides/use-public-key-authentication-with-ssh/)