# react-material-snackbar [![Build Status](https://travis-ci.org/gokulkrishh/react-material-snackbar.svg?branch=master)](https://travis-ci.org/gokulkrishh/react-material-snackbar)

*A material design snackbar react component (1.42KB gzip)*

> Created using [react-component-boilerplate](https://github.com/gokulkrishh/react-component-boilerplate/)

### [Demo](https://gokulkrishh.github.io/react-material-snackbar/)

### Installation

```sh
npm install --save react-material-snackbar
```
or 

```sh
yarn add react-material-snackbar
```

### Usage

```js
import SnackBar from 'react-material-snackbar';

<SnackBar
  show={true}                            //Boolean  - Required and Default - `false`
  timer={6000}                           //Number   - Optional and Default - `4000` (4 secs)
>
  // Pass any HTML element to render
  <p>Loading...</p>
</SnackBar>
```

## License

MIT © [Gokulakrishnan Kalaikovan](https://github.com/gokulkrishh)
