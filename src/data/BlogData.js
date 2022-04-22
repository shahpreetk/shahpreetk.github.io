export const BlogData = [
  {
    id: 1,
    title: "Deployment - Surge",
    subTitle: "Deploying a react app to surge.sh",
    content: `Step 1: (OPTIONAL) Make a new file in the public folder called CNAME and write the name of your domain. Every time ahead, you can just run surge and it will remember the domain for you.
Step 2: "npm run build"
Step 3: Now "cd build"
Step 4: rename "index.html" to "200.html" for client side routing.
Step 5: "surge"`,
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
 a) for deploying to netlify make a "_redirects file" in public folder and write - "/* /index.html 200" - inside
 b) there should also be no unused variables or imports in the code as it causes netlify build to fail
 c) all tags in index.html should be closed (example unclosed <br> tag which works in normal html but breaks on netlify)
Step 1 - login to netlify
Step 2 - select New site from Git
Step 3 - choose Github
Step 4 - Configure the Netlify app on GitHub and choose the repository you wish to publish then select save
Step 5 - select repo on netlify and click on Deploy Site. Netlify will now deploy the site for you.
Step 6 - You can change the domain that the site is hosted on by changing the name in Domain Settings.
Step 7 - Stopping Auto Publish under the Deploys option helps save build time.`,
    date: "2020-02-02",
    references: [],
    hashtags: ["deployment", "react", "netlify"],
  },
];
