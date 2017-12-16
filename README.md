# Tenth Muse Design Trial Project

Technologies used, ReactJS, Express, Webpack, Babel

## Project Overview

Since I used React, I have created an Express server to server the page and handle get requests for the posts.

Running the node server (Any changes to folder or webpack running will automatically restart node server)

## How to Run Everything
(be sure node is installed)

1. Clone Project
```
git clone https://github.com/chaseolsen/trialproject.git
```

2. Install Dependencies
```
npm install
```

3. Run Node Server
```
node server
```
Done! Then navigate to Localhost:3000

I also used Webpack to transpile all of my js files into client.min.js (Any changes to .js files will automatically run webpack)
```
webpack --w
```

If nodemon is installed you can also run this to automatically restart server if any changes are detected
```
nodemon server
```
