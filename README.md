# react-material-snackbar [![Build Status](https://travis-ci.org/gokulkrishh/react-material-snackbar.svg?branch=master)](https://travis-ci.org/gokulkrishh/react-material-snackbar)

*A material design snackbar react component.*


> Created using [react-component-boilerplate](https://gokulkrishh.github.io/react-component-boilerplate/)

## [Demo](https://gokulkrishh.github.io/react-material-snackbar/)

### Installation

```sh
npm install --save react-material-snackbar
```

#### Usage

```js
  import SnackBar from 'react-material-snackbar';

  <SnackBar
    actionText="undo"                      //String 	- Optional and Default - `close`
    onCloseCallback={() => {}}             //Function - Optional
    show={true}                            //Boolean  - Required and Default - `false`
    snackBarText="Application is offline"  //String   - Required
    timer={6000}                           //Number   - Optional and Default - `4000` (4 secs)
  />
```

## License

MIT © [Gokulakrishnan Kalaikovan](https://github.com/gokulkrishh)
