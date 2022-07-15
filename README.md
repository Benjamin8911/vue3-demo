# Vue3 Demo

## installing

```bash
npm install
```

## Quick start

```bash
npm run dev
```

## Webpack

---

### Loader Use

babel-loader, vue-loader, sass-loader, css-loader, style-loader, ts-loader

### Plugin Use

CleanWebpackPlugin, HtmlWebpackPlugin, VueLoaderPlugin, MiniCssExtractPlugin

### Husky

You don't need to do the following, it's just an explanation.

```bash
npm run prepare
```

It will create a dir named .husky

Than add a pre-commit hook for this project

```bash
npx husky add .husky/pre-commit "npm run lint"
```

add a commit-msg hook for this project

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit "$1"'
```
