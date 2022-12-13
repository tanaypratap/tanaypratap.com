import Document, { Html, Head, Main, NextScript } from "next/document";

// const image = "https://tanaypratap.com/logo.jpg";
const siteDescription = "tanaypratap description";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name='description' content={siteDescription}></meta>
          <meta charSet='utf-8' />
          {/* Twitter */}
          <meta property='twitter:card' content='summary' key='twcard' />
          <meta
            property='twitter:creator'
            content='@tanaypratap'
            key='twhandle'
          />
          <meta property='twitter:site' content='@tanaypratap' key='twsite' />
          <meta property='twitter:title' content='tanaypratap' key='twtitle' />
          <meta
            property='twitter:description'
            content='description'
            key='twdesc'
          />
          {/* <meta property='twitter:image' content={image} key='twimage' /> */}
          {/* Open Graph */}
          <meta property='og:title' content='tanaypratap' key='ogtitle' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://tanaypratap.com/' />
          {/* <meta property='og:image' content={image} /> */}
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='630' />
          <meta property='og:description' content={siteDescription} />
          <meta property='og:site_name' content='neoG' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
