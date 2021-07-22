const fs = require('fs').promises
const path = require('path')

function formatDate(date) {
  const yyyy = date.getFullYear()
  const MM = ('0' + (date.getMonth() + 1)).slice(-2)
  const dd = ('0' + date.getDate()).slice(-2)
  const hh = ('0' + date.getHours()).slice(-2)
  const mm = ('0' + date.getMinutes()).slice(-2)
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}`
}

!(async () => {
  const slug = process.argv[2]
  if (!slug) {
    throw new Error('slug must be specified.')
  }
  const newPostFileName = `${slug}.md`

  const postsDir = path.join(process.cwd(), 'posts')
  const postsFileNames = await fs.readdir(postsDir)
  if (postsFileNames.includes(newPostFileName)) {
    throw new Error('the slug already exists.')
  }

  const newPostHeader = `---
title: "Post Title"
createdAt: "${formatDate(new Date())}"
tags: []
---
## Content here
`

  const filePath = path.join(postsDir, newPostFileName)
  await fs.writeFile(filePath, newPostHeader)

  console.info('new post was successfully created!')
})()
