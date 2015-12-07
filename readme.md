## Usage

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

