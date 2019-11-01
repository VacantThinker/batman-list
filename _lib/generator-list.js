const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../_data/batman.json')
const fileSync = fs.readFileSync(filePath, 'utf8')
const dataObj = JSON.parse(fileSync)

const shows = dataObj.map(x => x.show)

function g_index_ul_li() {
  let strToFile = ''
  shows.forEach((val) => {
    const dirName = '/show/'
    const templateLi = `
<li key='${val.id}'>
  <Link href='${dirName}${val.id}'>
    <a>${val.name}</a>
  </Link>
</li>
    `
    // console.log(templateLi)
    strToFile = strToFile + templateLi
  })
  // console.log(strToFile)
  fs.writeFileSync(path.join(__dirname, '../_temp/li-list'), strToFile, 'utf8')
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
  fs.writeFileSync(path.join(__dirname, '../_temp/path-list'), strToFile, 'utf8')
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


g_index_ul_li()
g_showdir_idjs()
g_nextconfigjs_pathmap_showid()
