import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='GuitarCO - Venta de guitarras y blog de música'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'true'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Quicksand:wght@500&family=Rubik+Dirt&family=Share+Tech+Mono&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
