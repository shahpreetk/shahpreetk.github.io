export const BlogData = [
  {
    id: 1,
    title: "Deployment - Surge",
    subTitle: "Deploying a react app to surge.sh",
    content: `Step 1 - (OPTIONAL) Make a new file in the public folder called CNAME and write the name of your domain. Every time ahead, you can just run surge and it will remember the domain for you.
Step 2 - Type "npm run build"
Step 3 - Type "cd build"
Step 4 - Rename "index.html" to "200.html" for client side routing.
Step 5 - Type "surge"`,
    date: "21 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Getting started with Surge",
        link: "https://surge.sh/help/getting-started-with-surge",
      },
      {
        id: 2,
        title: "Remembering a domain",
        link: "https://surge.sh/help/remembering-a-domain",
      },
    ],
    hashtags: ["deployment", "react", "surge"],
  },
  {
    id: 2,
    title: "Deployment - Netlify",
    subTitle: "Deploying a react app to netlify.com",
    content: `Step 0 -
 a) For deploying to netlify make a "_redirects file" in public folder and type - "/* /index.html 200" - inside
 b) There should be no unused variables or imports in the code as it causes netlify build to fail
 c) All tags in index.html should be closed (example unclosed <br> tag which works in normal html but breaks on netlify)
Step 1 - Login to netlify
Step 2 - Select New site from Git
Step 3 - Choose Github
Step 4 - Configure the Netlify app on GitHub and choose the repository you wish to publish then select save
Step 5 - Select repo on netlify and click on Deploy Site. Netlify will now deploy the site for you.
Step 6 - You can change the domain that the site is hosted on by changing the name in Domain Settings.
Step 7 - Stopping Auto Publish under the Deploys option helps save build time.`,
    date: "21 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Deploy a React App to Netlify",
        link: "https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/",
      },
    ],
    hashtags: ["deployment", "react", "netlify"],
  },
  {
    id: 3,
    title: "Deployment - GitHub Pages",
    subTitle: "Deploying a react app to gh-pages",
    content: `Step 1 - Install gh-pages as a dev depedency: npm install -D gh-pages
Step 2 - In package.json add the following scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
"build": "react-scripts build && cp build/index.html build/404.html",
Step 3 - Run "npm run deploy" to deploy the site to GitHub Pages.
`,
    date: "21 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Creating a GitHub Pages site",
        link: "https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site",
      },
    ],
    hashtags: ["deployment", "react", "gh-pages"],
  },
  {
    id: 4,
    title: "Show Relation between two tables in Strapi API",
    subTitle:
      "Displaying information of related tables with the table requested",
    content: `Originally, when requesting a Strapi API endpoint, you can only get the information of the table you requested without the information of tables it is related to. In order to get the details of those tables you can try requesting the endpoint by using - http://localhost:1337/api/tablename?populate=*
Example:
If you have a supplier to whom you owe many payments and wish to see the payments information in the supplier information, you can request this link -->
          http://localhost:1337/api/suppliers?populate=*
So populate here, populates the API with relations, components or dynamic zones.`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Strapi Documentation",
        link: "https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#population",
      },
    ],
    hashtags: ["databases", "strapi", "sql"],
  },
  {
    id: 5,
    title: "Removing a commit from Github",
    subTitle: "Removing the latest commit once pushed to Github",
    content: `NOTE: this solution works only if the commit to be removed is the latest commit.
Step 1 - Copy the commit reference you like to go back to from the log: git log,
Step 2 - Reset git to the commit reference: git reset <commit_ref>
Step 3 - In case you like to keep the commit changes after deletion,
stash/store the local changes from the wrong commit: git stash
Step 4 - Push the changes to remote repository, (-f or --force): git push -f
Step 5 - Get back the stored changes to local repository: git stash apply
Step 6 - If you have untracked/new files in the changes, you need to add them to git: git add .
Step 7 - Commit the changes: git commit -m '<new_commit_message>'
`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "How can I remove a commit on GitHub?",
        link: "https://stackoverflow.com/a/44415889",
      },
    ],
    hashtags: ["git", "GitHub"],
  },
  {
    id: 6,
    title: "Rendering images in react",
    subTitle:
      "Using the public folder to save images and not needing to import them several times",
    content: `Images stored in the public folder are served as static assets. This increases efficiency and makes dynamically loading files simpler.
You can do so by following the instructions below:
Step 1 - Create a new folder in your public folder called "assets" or "images"
Step 2 - Store all your images in this folder
Step 3 - In your component, you can directly type the following in the src attribute: assets/<image_name>`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Storing images in react",
        link: "https://www.upbeatcode.com/react/where-to-store-images-in-react-app/",
      },
    ],
    hashtags: ["react", "rendering", "images"],
  },
  {
    id: 7,
    title: "Starting a MongoDB local connection",
    subTitle: "Starting a MongoDB local connection in macOS using the terminal",
    content: `An example of a terminal command to start a MongoDB local connection with MongoDB Compass in macOS:
/Users/preetshah/mongodb/bin/mongod --dbpath=/Users/preetshah/mongodb-data
This command takes you to the MongoDB path and starts the MongoDB server.`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Installing MongoDB on macOS",
        link: "https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/",
      },
    ],
    hashtags: ["databases", "mongoDB", "nosql"],
  },
  {
    id: 8,
    title: "Open folder in VSCode",
    subTitle: "Opening a folder in VSCode using the terminal",
    content: `Step 1 - Open the terminal
Step 2 - Type "cd <folder_name>"
Step 3 - Type "code ."
Alternatively, you can use the following command to open the folder in an Open VSCode window: "code . -r"
`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "VSCode Core CLI options",
        link: "https://code.visualstudio.com/docs/editor/command-line#_core-cli-options",
      },
    ],
    hashtags: ["terminal", "vscode", "shortcuts"],
  },
  {
    id: 8,
    title: "Black Overlay in CSS",
    subTitle: "Creating a black overlay over an image in CSS",
    content: `Commands for creating a black overlay in CSS are:

{
  background: black;
  overflow: hidden;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("<IMAGEURL COMES HERE>");
  object-fit: cover;
}`,
    date: "22 Apr, 2022",
    references: [
      {
        id: 1,
        title: "Overlay with JavaScript",
        link: "https://www.w3schools.com/howto/howto_css_overlay.asp",
      },
    ],
    hashtags: ["css", "overlay", "styles"],
  },
];
