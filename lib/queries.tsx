import { gql } from '@apollo/client'


export const NavigationQuery = gql`
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

export const PagesQuery = gql`
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