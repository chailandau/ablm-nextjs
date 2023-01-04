import { gql } from '@apollo/client'


export const Pages = gql`
query getPages {
  pages {
    data {
      attributes {
        title,
        slug
      }
    }
  }
}
`