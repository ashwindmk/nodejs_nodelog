# NodeLog

Simple logging module for Node JS.


## Installation

```shell
npm install @ashwindmk/nodelog
```


## Configuration

```
-1 : Disable all logging
0 : Only Error logs
1 : Error and Debug logs
2 : Error, Debug and Info logs
3 : Enable all logs
```


## Usage

```javascript
const nodelog = require("./nodelog");

// Set log level
nodelog.setLevel(1);

// Log messages
nodelog.debug('This is a simple debug log.');
```


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
