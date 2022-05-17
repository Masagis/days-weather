import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux'

import store from '../src/store/store'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        title="Weather app"
        description="weather app web"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: '',
          site_name: '',
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" type="image/png" href="../src/assets/favicon.png" />
        <link rel="apple-touch-icon" href="../src/assets/favicon.png" />
      </Head>
      <Provider
        store={store()}
        style={{ backgroundColor: `rgba(240, 240, 240, 0.8)` }}
      >
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
