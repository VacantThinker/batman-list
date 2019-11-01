const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../_data/batman.json')
const fileSync = fs.readFileSync(filePath, 'utf8')
const jsonObj = JSON.parse(fileSync)

const shows = jsonObj.map(x => x.show)

function g_indexjs_ul_li() {
  let strToFile = ''
  shows.forEach((val) => {
    const dirName = '/show/'
    const templateLi = `
<li key='${val.id}'>
  <PrefixedLink href='${dirName}${val.id}'>
    <a>${val.name}</a>
  </PrefixedLink>
</li>
    `
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(path.join(__dirname, '../_temp/indexjs_ul_li'),
    strToFile,
    'utf8')
}

function g_nextconfigjs_pathmap_showid() {
  let strToFile = ''
  shows.forEach((val) => {
    const dirName = '/show/'
    const page1 = `${dirName}${val.id}`
    const templateLi = `
'${page1}' : {page : '${page1}'},
      `
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(path.join(__dirname, '../_temp/nextconfigjs_pathmap_showid'), strToFile, 'utf8')
}

function g_showdir_idjs() {
  shows.forEach((val) => {
    const id = val.id

    const templatePost = `
import Layout from "../../components/Layout";
import React from "react";

const Post${val.id} = () => (
  <Layout>
    <h1>${val.name}</h1>
    ${val.summary}
    <img alt='' src='${val.image.medium}' />
  </Layout>
)

export default Post${val.id};
        `

    // console.log(templatePost)
    fs.writeFileSync(path.join(__dirname, `../pages/show/${id}.js`), templatePost, 'utf8')

  })

}


g_indexjs_ul_li()
g_nextconfigjs_pathmap_showid()
// g_showdir_idjs()
