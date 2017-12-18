{
  "name": "<%= name %>",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack",
    "devServer": "webpack-dev-server"
  },
  "author": "<%=author%>",
  "license": "MIT",
  "dependencies": {
    "@phosphor/widgets": "^1.5.0"
  },
  "devDependencies": {
    "awesome-typescript-loader": "^3.4.1",
    "css-loader": "^0.28.7",
    "file-loader": "^1.1.5",
    "html-webpack-plugin": "^2.30.1",
    "source-map-loader": "^0.2.3",
    "style-loader": "^0.19.0",
    "typescript": "^2.6.2",
    "webpack": "^3.10.0",
    "webpack-dev-server": "^2.9.5"
  }
}
