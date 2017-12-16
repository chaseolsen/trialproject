# Tenth Muse Design Trial Project

## Technologies Used

* ReactJS
* Express (to create node server)
* Axios (to get post data using ES6 promise)
* Webpack (to transpile ES6 and all js files into client.min.js)
* Babel (to handle ES6 code with webpack)

## Project Overview

Since I used React, I have created an Express server to serve the page and handle GET requests to retreive the posts. You'll need to run the Express server so the app can retreive post data from the server.

Here is basic file structure of project

    ├── node_modules            # Will be generated when running 'npm install'
    ├── server                  # Contains index.js for Express server and controllers for getting post data.
    ├── src                     # Source files, Images, JS, Styles, index.html, client.min.js, etc.
    ├── .gitignore              # To prevent pushing big files such as Node_Modules
    ├── package.json            # Contains Dependency List
    ├── webpack.config.js       # Webpack Configuration File
    └── README.md


## How to Run Everything
(be sure node is installed)

1. Clone Project
```
git clone https://github.com/chaseolsen/trialproject.git
```
2. Enter Project
```
cd trialproject
```

3. Install Dependencies
```
npm install
```

4. Run Node Server
```
node server
```
Done! Then navigate to Localhost:3000

## Extra Details About Development Environment

I also used Webpack to transpile all of my js files into client.min.js (Any changes to .js files will automatically run webpack)
```
webpack --w
```

If nodemon is installed you can also run this to automatically restart server if any changes are detected
```
nodemon server
```
