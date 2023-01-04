import { gql } from '@apollo/client'


export const Navigation = gql`
query getNavigation {
  renderNavigation(
    navigationIdOrSlug: "main-navigation"
    type: TREE
    menuOnly: false
  ) {
    id
    title
    path
    items {
      id
      title
      path
     
    }
  }
}
`

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