# Images

## A React Native project to aggregate stock image APIs

### Technologies

1. Global state management with [`@reduxjs/toolkit`](https://redux-toolkit.js.org/) and [`react-redux`](https://react-redux.js.org/).
1. App config with [`react-native-config`](https://github.com/luggit/react-native-config).
1. Navigation with [`@react-navigation/native`](https://reactnavigation.org/).
1. Stock image API with the [Pixabay API](https://pixabay.com/api/docs/).

### Project Setup

1. In the project root run `yarn` in your terminal.
1. Change into your `ios` directory with `cd ios` in your terminal and run the command `pod install`.
1. Create a `.env` file at the project root and add the following text to it: `PIXABAY_KEY=`
1. Go to the [Pixabay website and sign up for an account](https://pixabay.com/accounts/register/).
1. In the same browser you registered with navigate to the [API documentation page](https://pixabay.com/api/docs/), copy your API key, and paste it into the `.env` file after `PIXABAY_KEY=`.
1. In your terminal run `yarn ios` and `yarn android` to see the app on both platforms.
