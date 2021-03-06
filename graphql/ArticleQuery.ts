import gql from 'graphql-tag'

export const ArticleQuery = gql`
  query getArticle($slug: String) {
    article(where: { slug: $slug }) {
      id
      title
      body
    }
  }
`
