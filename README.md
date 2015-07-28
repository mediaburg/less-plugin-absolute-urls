[![NPM version](https://badge.fury.io/js/less-plugin-absolute-urls.svg)](http://badge.fury.io/js/less-plugin-absolute-urls) [![Dependencies](https://david-dm.org/mediaburg/less-plugin-absolute-urls.svg)](https://david-dm.org/mediaburg/less-plugin-absolute-urls) [![devDependency Status](https://david-dm.org/mediaburg/less-plugin-absolute-urls/dev-status.svg)](https://david-dm.org/mediaburg/less-plugin-absolute-urls#info=devDependencies) [![optionalDependency Status](https://david-dm.org/mediaburg/less-plugin-absolute-urls/optional-status.svg)](https://david-dm.org/mediaburg/less-plugin-absolute-urls#info=optionalDependencies)

less-plugin-absolute-urls
=========================

Replace all relative urls with absolute file paths.

## Usage

```
npm install -g less-plugin-absolute-urls

lessc file.less --absolute-urls="replace={par1}:{par2}"
```

### Options

- `replace`: replaces `{par1}` in all url paths with `{par2}`, can be defined multiple times