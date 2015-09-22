# dot loader for webpack

## Usage

``` javascript
var template = require("dot-tpl!./file.tpl");

var html = template.render(data);
```

### Recommended config

``` javascript
module.exports = {
  module: {
    loaders: [
      { test: /\.tpl$/, loader: "dot-tpl?append=true" }
    ]
  }
};
```

