# POKEAPP V2

_Gotta Catch 'Em All!_

"POKEAPP V2" is a website to collect pokemons made in React JS. This project is an updated version of a previous POKEAPP website I did in order to complete one of the recruitment stage of Tokopedia Indonesia.

## What's New?

* Updated the navbar logo and menu to make navigation easier. Now, in order to return home, you just need to click the logo on the navbar and click the Pokemons Owned button (or just the pokeball icon for mobile) to go to the My Pokemons page.
* Added the feature to catch pokemons on homepage to make it easier to catch pokemons without going to the detail page.
* Changed the storage to save pokemons from session storage to local storage so your caught pokemons won't disappear after you close the browser.
* Added page query params on homepage when browsing pokemons so you'll still keep your current page number when refreshing or going back from the detail page.
* Added useContext state management to manage encountered pokemons, pokemon caught status, and loading status better.

## Tech Stack

* React JS
* Emotion JS
* Apollo GraphQL
* React Router
* React Testing Library

## Structure

Most of the important folders and files are inside the `src` folder. Inside, you will find 3 __files__:

1. `App.js`
2. `index.js`
3. `_styles.js`

`App.js` is where all the components are placed. `index.js` is the the root file where rendering happens and where the Router, Apollo provider, and the context providers are placed. Lastly, `_styles.js` is the file for global styles.

Aside from the files, you will also find 7 __folders__:

1. `assets`
2. `components`
3. `containers`
4. `pages`
5. `queries`
6. `store`
7. `utils`

`assets` is where all the assets for this app is placed such as icons. All of the small components are stored in `components`, the large containers in `containers`, and pages in `pages`. Inside those files, there is an `index.js` file where all the components are exported to make importing them easier in other components. Each components and containers also has its' own test inside the `__test__` folder. All the queries needed to make request with GraphQL are located in `queries` folder. The store and reducers to manage the needed states are stored in `store`. Last, the `utils` folder contains the functions necessary for this app.

## Deployment and Workflow

This project is deployed to github pages and can be accessed [here](https://alifsiregar.github.io/pokeappv2/). The workflow consists of 4 steps:

1. `Install Dependencies`
2. `Run Test`
3. `Build Project`
4. `Deploy Project`

To deploy the project, I am using JamesIves's [Github Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action).

## Documentation

In order to start the app in development mode,  you can run this syntax in the project directory:

### `npm start`

By default, the app will open in [http://localhost:3000](http://localhost:3000). The app also has hot reload, which means that it will refresh if you make any edits.

If you want to add more tests to the components or containers, add them inside the `__test__` folder on each components and run:

### `npm run test`

This will run all the tests and give you the results.

And last, if you want to build the app for production, you can run this syntax in the project directory:

### `npm run build`

This will bundle the React in production mode and optimizes the build for the best performance.

The build is then minified and the app is ready to be deployed!
