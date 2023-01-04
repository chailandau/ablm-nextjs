import { useQuery } from '@apollo/client'

import { Pages } from '../lib/queries'

import type { PageEntity } from '../src/graphqlTypes'

export default function Home() {
  const { loading, error, data } = useQuery(Pages)


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
    </>
  )
}
