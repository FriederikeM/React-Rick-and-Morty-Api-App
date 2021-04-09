# Rick & Morty App - with API and ReactRouter

![exercise cover](design/rick-and-morty-app-cover.png)

The goal of this exercise is to use ReactRouter as well as connect an external API to a React app 🎉!

Let's create an app using the [Rick and Morty API](https://rickandmortyapi.com/)

## Exercise description

- Create the pages mentioned below, and implement the features mentioned in `rick-and-morty-app.png` or the excalidraw file
- Plan your approach, take small steps
- Explore the API before getting started!
  - See what it returns and what the data looks like
  - It's recommended to install a browser extension like JSON Viewer

There are some wireframes in the `design` directory, an overview of the whole app with explanations, as well as an `.excalidraw` file. If you want to open the file, head to www.excalidraw.com, click the "Open" button and select it.

The features proposed in the design documents are:

| page          | url               | purpose                                                     |
| ------------- | ----------------- | ----------------------------------------------------------- |
| home          | `/`               | main page, welcome message, entry point                     |
| all caracters | `/characters`     | fetch and list characters (more button), each one clickable |
| one caracters | `/characters/:id` | character details, fetch more info (i.e. `/characters/1`)   |

### BONUS:

- The all caracters page (`/characters`) can filter by `name` and/or `status`

## Tips

- Look at the wireframes and plan your approach. Smaller tasks are easier to finish
- Aim to work with branches, usually per component, per page, per task etc. Split work up into tasks
- Before you get started try to think about what some components could be and what they are supposed to do
- Every now and then, take some time to look at the bigger picture and which steps are coming up next

- Don't forget to change the CSS ruleset for `.App`, or feel free to remove it all together, and come up with your own naming convention

### Resources

#### React Router:

- [React Router DOM docs](https://reactrouter.com/web/guides/quick-start)
- [Logrocket React Router Hooks](https://blog.logrocket.com/react-router-hooks-will-make-your-component-cleaner/#:~:text=React%20Router%20is%20a%20lightweight,%2C%20location%20%2C%20and%20history%20props.)
- [Intro to React Router Hooks](https://javascript.plainenglish.io/introduction-to-react-router-hooks-ffdd09c91fa2)
- YouTube [React Router Hooks](https://www.youtube.com/watch?v=aHv_3g2Fw8A)

#### Net Ninja Videos:

- [Intro](https://www.youtube.com/watch?v=aZGzwEjZrXc)
- [Exact match routes](https://www.youtube.com/watch?v=EmUa_tcSM-k)
- [Router Links](https://www.youtube.com/watch?v=DO-pSysGItQ)

#### Create React App:

- [Getting Started | Create React App](https://create-react-app.dev/docs/getting-started/)

#### npm packages:

- [NPM](https://www.npmjs.com)
- [Semver (Semantic Versioning)](https://semver.org/)
- [Semantic versioning for npm packages](https://github.com/npm/node-semver#versions)

### Git Guide

Here is a partial _example_ approach with branches. Just as a guideline on how to split the whole project into smaller steps with corresponding branch names, to make it a bit easier for you to use git in this project. This is just _one_ way of doing it :).

Follow the GitHub Flow

#### Once a step is finished:

1. `push`,
1. create a pull request on GitHub (maybe share it and get a review, definitely do a review for yourself),
1. `merge`,
1. synchronize your local machine and move to the next branch

#### Here's an examlpe workflow:

1. Setup App (branchname: `setup`)
   - Install ReactRouter package
   - Add basic app structure (i.e. simple layout/app container, router, rough main page)
   - General things/infrastructure you need to get started with adding components
1. Basic components (branchname: `header`, `layout` or even `setup/basic-components`)
   - Plan basic components such as navigation, header, layout, footer(?), buttons etc.
   - Add components one by one, try to make rather more commits than less. (markup, styling, logic etc.) <-per component
   - Try to keep components simple, if a component is bigger or has a bigger impact on the app use a separate branch
1. Assemble pages (branchname: `page/caracters`, `character-page`, `detailspage` etc.)
   - Adding a page should affect more files, since you need to add a route and create the page with your existing components, maybe even add a components or two. Try to have a branch per page
1. Refine your app (branchname: `refactor/details-page` or `refactor-navigation`)
   - Always keep in mind: Make it work first, then make it better.
   - Try to leave styling details to the end

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
