
---

 - 部署实例
    
    - https://vacantthinker.github.io/batman-list/
        - host '/batman-list'
    - https://batman-list.littlehappyforsmile.now.sh/
        - host ''

---

 - PrefixedLink 组件实现来自于

    https://github.com/dmitriyaa/next-hello-world

---

 - 依赖
    
    - prettier 代码自动格式化, 可在webstorm中的file watcher, 配置prettier
    
    - gh-pages 推送特定的文件夹到gh-pages分支

```json
  "dependencies": {
    "react": "16.11.0",
    "react-dom": "16.11.0",
    "next": "9.1.2",
    "gh-pages": "^2.1.1",
    "prettier": "^1.18.2"
  },

```

---

 - 导出静态页面, 同时部署到github page
    
    - 需要linkPrefix, 即前置链接
    
    - 使用babel插件, 设置一个前置链接, linkPrefix

.babelrc.js
```javascript
const env = require('./env-config')

module.exports = {
  "presets": [
    [
      "next/babel",
      {
        "preset-env": {
          "modules": "commonjs"
        }
      }
    ]
  ],
  "plugins": [
    [
      "transform-define",
      env
    ]
  ]
}


```

env-config.js
```javascript
const isProduction = process.env.NODE_ENV === 'production';
// const host = '/batman-list';
const host = '';

module.exports = {
  'process.env.linkPrefix': isProduction ? host: ''
}

```

components/PrefixedLink.js
```javascript
import Link from 'next/link'
import React from 'react'

const PrefixedLink = ({ href, as = href, children }) => (
  <Link href={href} as={`${process.env.linkPrefix}${as}`}>
    {children}
  </Link>
)

export default PrefixedLink

```

---

 - 部署到github page, 图像加载问题
    
    - 缺少, /batmant-list/. https://vacantthinker.github.io/static/481.jpg

PrefixedImg.js
```javascript
import React from 'react'

const PrefixedImg = ({ alt = '', src}) => (
  <img alt={`${alt}`} src={`${process.env.linkPrefix}${src}`} />
)

export default PrefixedImg


```

---
end
