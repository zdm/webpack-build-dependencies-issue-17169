[https://github.com/webpack/webpack/discussions/17176](https://github.com/webpack/webpack/discussions/17176)

### How to reproduce

```shell
# clone repo
git clone https://github.com/zdm/webpack-build-dependencies-issue-17169

cd webpack-build-dependencies-issue-17169
cd main

# this command:
# - installs dependencies
# - links "package-a" and "package-b" to the "main/node_modules"
npm i

# this command runs:
# node --preserve-symlinks node_modules/webpack/bin/webpack.js
npm run build
```

Build is OK, but cache is not used due to the following errors:

```txt
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: Can't resolve 'package-b/webpack.config.js' in 'd:\projects\devel\issues\webpack-build-dependencies-issue-17169\package-a'
<w> while resolving 'package-b/webpack.config.js' in d:\projects\devel\issues\webpack-build-dependencies-issue-17169\package-a as file
<w>  at resolve esm file package-b/webpack.config.js
<w>  at file dependencies d:\projects\devel\issues\webpack-build-dependencies-issue-17169\package-a\webpack.config.js
<w>  at file d:\projects\devel\issues\webpack-build-dependencies-issue-17169\package-a\webpack.config.js
<w>  at resolve esm file package-a/webpack.config.js
<w>  at file dependencies d:\projects\devel\issues\webpack-build-dependencies-issue-17169\main\webpack.config.js
<w>  at file d:\projects\devel\issues\webpack-build-dependencies-issue-17169\main\webpack.config.js
<w>  at resolve commonjs d:\projects\devel\issues\webpack-build-dependencies-issue-17169\main\webpack.config.js
..
```
