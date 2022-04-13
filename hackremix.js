const fs = require('fs');
const loaderFile = './node_modules/@remix-run/dev/compiler/loaders.js';
const loaders = fs.readFileSync(loaderFile).toString();
const newLoaders = loaders.replace("const loaders = {", `const loaders = {\n  ".scss": "file",`);
fs.writeFileSync(loaderFile, newLoaders);