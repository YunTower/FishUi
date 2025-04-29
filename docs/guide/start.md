# 快速开始

## 安装
```shell
npm install fish-ui
```

## 按需引入
根据项目需求按需加载组件，减少打包体积

## 完整引入
如果你不在乎打包后的体积，那么你可以引入整个组件库
::: code-group
```ts [main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import 'fish-ui/dist/index.css'
import FishUi from 'fish-ui';

const app = createApp(App)

app.use(FishUi)

app.mount('#app')

```
:::