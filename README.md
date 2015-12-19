# node-config-python

Read and write python config files non-destructively (preserves comments and lines)

Turns this kind of thing:

```python
foo = True
bar = None
baz = whatever
qux = apples,bananas
```

Into this kind of thing:

```javascript
{ foo: true
, bar: null
, baz: "whatever"
, qux: ["apples", "bananas"]
}
```

(comments are stored in meta-data keys `__lines` and `__keys`)

## Install & Usage

```bash
npm install --save pyconf
```

```javascript
var pyconf = require('pyconf');

# alias for fs.readFile() then pyconf.parse()
pyconf.readFile("/path/to/foo.conf", function (err, obj) {
  console.log(obj);
});

pyconf.writeFile("/path/to/foo.conf", obj, function (err, obj) {
  console.log("wrote file");
});
```

Note: the `writeFile` function uses `safe-replace` so that it will work even in environments where race conditions are possible and will also create a backup file `whatever.conf.bak` of the config being overwritten.

## API

```
pyconf.parse(str, cb)                   => err, object
pyconf.stringify(obj, cb)               => err, text

pyconf.readFile(filename, cb)           => err, object
pyconf.writeFile(filename, obj, cb)     => err 
```
