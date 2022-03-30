# ssr-example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

|     |  CSR  |  SSR  | SSG  |
|  ----  | ----  |  ----  | ----  |
| 优点  | 前后端分离；服务器压力小，部署简单 | 利于SEO；首屏渲染快  | 利于SEO；首屏加载快；服务器压力小 |
| 缺点  | 不利于SEO，爬虫难以爬取内容；首屏渲染慢，渲染前需要加载完JS文件和 API接口请求 | 服务器压力大，需要处理更多的请求和渲染工作，运维成本更高；页面响应慢，需要等服务端处理完才返回  | 不适合交互性强、数据易变化的页面，适合静态页面 |
