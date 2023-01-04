import { useQuery } from '@apollo/client'

import { PagesQuery } from '../lib/queries'
import Navigation from '../src/components/Navigation/Navigation'

import type { PageEntity } from '../src/graphqlTypes'

const Home = () => {
  const { loading, error, data } = useQuery(PagesQuery)


  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>

  console.log(data)

  return (
    <>
      {data.pages.data.map((page: PageEntity) => {
        return (
          <div key={page?.attributes?.slug}>
            <p>{page?.attributes?.title}</p>
            <p>{page?.attributes?.slug}</p>
          </div>
        )
      })}
      <Navigation />
    </>
  )
}


export default Home