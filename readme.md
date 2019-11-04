
---

 - 部署实例
    
    - https://vacantthinker.github.io/batman-list/
        - host '/batman-list'
    - https://batman-list-tidy-humor.now.sh/
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
    
    - 使用.babelrc会提示一个错误, 使用.babelrc.js 就没有这个问题, 见鬼了

.babelrc.js
```javascript
const env = require('./env.config')

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

env.config.js
```javascript
const isProduction = process.env.NODE_ENV === 'production';
const hostUrl = '/batman-list';
const backend_url = isProduction ? hostUrl: '';
// const backend_url = '';

module.exports = {
  'process.env.linkPrefix': backend_url,
  backend_url
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

 - 编码时, 强烈建议
    
    - 使用id, 而不是 xxx.id
    
        - 方便修改代码
        - 接收数据

---

 - https://reactjs.org/docs/lists-and-keys.html#keys
    
    - 每一个循环生成的组件, 都需要一个key属性

---

 - export default XXXName, 组件
    
    - 不允许重名

--- 

 - 根据模板组件, 生成静态组件
    
    - a 缓存所有数据, http 字符串 图片 文件
    - b 根据xxx.map(value=>{}), 查找所有路线图
    - c 根据路线图, 对应模板组件, 一键生成模板对应的静态页面
    - d 更新next.config.js

---

 - 诡异next export
    
    - 两个项目
    - batman-list
        - show/481 show/900
        - 利用模板+循环, 制造所有的纯静态页面, 
        - githubpage xxx/batman-list 访问完全没问题, 
        - 单页面, 也可单个链接刷新访问
    - batman-list-await
        - show/[id]
        - 利用模板+循环, 不制造纯静态页面, 使用模板本身+查询数据, 
        - githubpage xxx/batman-list-await 访问有问题, 提示as href 不兼容问题,
        - 单页面访问没问题

---

 - 关于varName {} `` $ 的使用
``` 
    - 元素文本节点 textNode, {varName}
    - 元素属性值 attributeValue, key={`${varName}`}
        
```
    
```javascript
        {shows.map(show => {
          const id = show.id
          const name = show.name
          return (
            <li key={`${id}`}>
              <PrefixedLink href={`${dirName}${id}`} as={`${dirName}${id}`}>
                <a>{name}</a>
              </PrefixedLink>
            </li>
          )
        })}

```

 - npm-package gh-pages
    
    - 推送指定文件夹到github仓库 gh-pages分支
    - 手动删除github仓库, gh-pages分支
        - 再次推送, 失败
        - 原因, 本地已有gh-pages分支, 删除后即可再次推送

---
end
