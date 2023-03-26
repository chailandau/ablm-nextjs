
import { useQuery } from '@apollo/client'
import { PagesQuery } from '../lib/queries'
import Text from '../src/atoms/Text/Text'
import Navigation from '../src/components/Navigation/Navigation'

import type { PageEntity } from '../src/graphqlTypes'
import Error from '../src/utils/Error'
import Loading from '../src/utils/Loading'

const Home = () => {
  const { loading, error, data } = useQuery(PagesQuery)

  if (loading) {
    return <Loading />
  }

  if (error) {
    console.error(error)
    return <Error />
  }

  return (
    <>
      {data &&
        data.pages.data.map((page: PageEntity) => {
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