import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GTag, MetaTag } from 'components/Heads';

export default class ProjectDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <MetaTag />
          <GTag />
        </Head>
        <body className="text-lg text-gray-700 lg:overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
