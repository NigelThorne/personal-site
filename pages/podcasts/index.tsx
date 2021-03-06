import Head from 'next/head'
import React from 'react'
import { Layout, Podcasts } from '../../components'
import { PodcastsQuery } from '../../graphql/PodcastsQuery'
import { Api } from '../../lib/Api'

const Page = ({ podcasts }) => (
  <Layout>
    <Head>
      <title>Podcasts</title>
    </Head>

    <h1>Podcasts</h1>
    <p>Podcasts I subscribe to</p>

    <Podcasts collection={podcasts} />
  </Layout>
)

Page.getInitialProps = async () => {
  const { data } = await Api.query({ query: PodcastsQuery })
  return { ...data }
}

export default Page
