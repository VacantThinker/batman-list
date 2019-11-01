const fs = require('fs')
const path = require('path')
const axios = require('axios').default

const production = process.env.NODE_ENV === 'production'
const hostUrl = '/batman-list'
// const hostUrl = '';


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
  shows.forEach(val => {
    const id = val.id
    const htmlImgUrl = `/static/${id}.jpg`

    const templatePost = `
import WrapLayout from "../../components/WrapLayout";
import PrefixedImg from "../../components/PrefixedImg";
import React from "react";

const Post${val.id} = () => (
  <WrapLayout>
    <h1>${val.name}</h1>
    ${val.summary}
    <PrefixedImg alt='' src='${htmlImgUrl}' />
  </WrapLayout>
)

export default Post${val.id};
        `

    // console.log(templatePost)
    fs.writeFileSync(path.join(__dirname, `../pages/show/${id}.js`), templatePost, 'utf8')

  })
  console.log(`g_showdir_idjs end ---`)
}

function g_showdir_idjs_image() {
  shows.map(val => {

    // get image file
    const imgId = val.id
    const imgUrl = val.image.medium

    // GET request for remote image
    axios({
      method: 'get',
      url: imgUrl,
      responseType: 'stream'
    })
      .then(function(response) {
        const filePath = path.join(__dirname, `../public/static/${imgId}.jpg`)
        fs.writeFileSync(filePath, null, { encoding: 'utf8' })
        response.data.pipe(fs.createWriteStream(filePath))
        console.log(`${filePath} --- `)
        // fs.writeFile(filePath, null, err => {
        //   response.data.pipe(fs.createWriteStream(filePath))
        //   console.log(`${filePath} --- `)
        // })
      })
  })
}

// g_indexjs_ul_li()
// g_nextconfigjs_pathmap_showid()
g_showdir_idjs()
// g_showdir_idjs_image()
