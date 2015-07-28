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