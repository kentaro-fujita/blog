import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { getAllArticleTags, getSortedArticleHeaders } from '../lib/posts'
import { ArticleHeader as IArticleHeader, Tag} from '../models'

type Props = {
  articles: IArticleHeader[],
  tags: Tag[]
}

const Index: NextPage<Props> = ({ articles, tags }: Props) => {
  return (
    <>
    </>
  )
}
export default Index

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getSortedArticleHeaders()
  const tags = await getAllArticleTags()

  return {
    props: {
      articles,
      tags,
    },
  }
}