import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class ProjectDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="text-lg text-gray-700 lg:overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
