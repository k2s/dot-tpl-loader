## Usage

[![Greenkeeper badge](https://badges.greenkeeper.io/L3au/dot-tpl-loader.svg)](https://greenkeeper.io/)

``` javascript
var template = require("./file.tpl");

var html = template(data);
// or
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

