import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import strip from 'strip-markdown'
import config from './configs/config.json'
import { Post } from './models'

const postsDir = path.join(process.cwd(), 'posts')

export const getAllPostSlugs = async (): Promise<string[]> => {
  const fileNames = await fs.promises.readdir(postsDir)
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ''))

  return slugs
}

export const getAllPostTags = async (): Promise<string[]> => {
  const posts = await getAllPosts()

  return Array.prototype.concat.apply(
    [],
    // eslint-disable-next-line prettier/prettier
    posts.map((post) => post.tags)
  )
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const filePath = path.join(postsDir, `${slug}.md`)
  if (!filePath) return
  const postRawData = await fs.promises.readFile(filePath)
  const { data, content } = matter(postRawData)
  const post: Post = {
    title: data.title ?? '',
    slug: slug,
    description: (await getContentExcerpt(content)) ?? '',
    content: content ?? '',
    createdAt: data.createdAt ?? '',
    updatedAt: data.updatedAt ?? '',
    catchImageUrl: data.catchImageUrl ?? '/assets/digest_image.png',
    tags: data.tags ?? [],
  }

  return post
}

export const getAllPosts = async (): Promise<Post[]> => {
  const slugs = await getAllPostSlugs()
  const posts = slugs.map(async (slug) => await getPostBySlug(slug))

  return (await Promise.all(posts)).sort((a, b) =>
    // eslint-disable-next-line prettier/prettier
    a.createdAt < b.createdAt ? 1 : -1
  )
}

const getContentExcerpt = async (mdText: string): Promise<string> => {
  const processed = await remark().use(strip).process(mdText)
  const contentText = processed.toString()
  const excerpt = contentText
    .trim()
    .replace(/\s+/g, ' ')
    .slice(0, config.excerptLength)
  if (contentText.length > config.excerptLength) {
    return excerpt + '...'
  }

  return excerpt
}
