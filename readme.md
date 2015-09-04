# dot loader for webpack

## Usage

``` javascript
var template = require("dot-tpl!./file.tpl");

var html = template(data);
```

### Recommended config

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.tpl$/, loader: "dot-tpl?append" }
    ]
  }
};
```

