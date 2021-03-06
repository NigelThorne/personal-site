import Head from 'next/head'
import React from 'react'
import {
  Articles,
  Books,
  ButtonLink,
  Layout,
  Podcasts,
  Subscribe
} from '../../components'
import { HomeQuery } from '../../graphql/HomeQuery'
import { Api } from '../../lib/Api'

import Styles from './index.css'

const Page = ({ articles, books, podcasts }) => (
  <Layout>
    <Head>
      <title>craigs.io - welcome</title>
    </Head>

    <Articles collection={articles} />

    <div className={Styles.section}>
      <hr />
      <h1>Books</h1>
      <p>Recent books I have listened to and have gained insights from</p>

      <Books collection={books} />
      <ButtonLink label="more books" as="/books" link="/books" />
    </div>

    <div className={Styles.section}>
      <hr />
      <h1>Podcasts</h1>
      <p>
        The right selection of Podcasts is just the food a creative mind craves
      </p>

      <Podcasts collection={podcasts} />
      <ButtonLink label="more podcasts" as="/podcasts" link="/podcasts" />
    </div>

    <div className={Styles.section}>
      <Subscribe />
    </div>
  </Layout>
)

Page.getInitialProps = async () => {
  const { data } = await Api.query({ query: HomeQuery })
  return { ...data }
}

export default Page
