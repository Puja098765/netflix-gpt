#netflix-Gpt

- create react app
- configured tailwind-css
- Header
- Routing of App
- Login form
- Signup form
- formik site for form
- Form Validation
- useRefHook
- for auhtentication--- need backend-- using google firebase(firebase.google.com)--backend as a service
- firebase setup
- Deploying our app to production
- create signUp  userAccount in firebase
- Implement Sign In user Api
-Created Redux Store with userSlice
- Implemented Sign out
- update Profile
- Fetch from TMDB(the movie database)
- Bug Fix : Sign up user displayName and profile picture update
- Bug Fix : if user is not logged in Redirect /browse to Login Page and vice versa
- unsubscribe to the onAuthStateChanged callback
- add hardcoded values to the constants file
- Register TMDB API and create an app and get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for now playing Movies
- Create movieSlice
- Update Store with  Trailer movie data
- Planning for MainContainer and secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the utube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build Secondary Components
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browse page amazing with Tailwind Css
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- Multi-language Feature in our App




#features
-Login/Sign up Form
-Redirect to Browse Page
-Browse(after authentication)
     -Header
     -Main Movie
         -Tailor in background
         Title and Description
         -Movie Suggestions
         -MovieLists *N
NetflixGPT
     -Search Bar
     -Movie Suggetsions

npm i -D react-router-dom



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
