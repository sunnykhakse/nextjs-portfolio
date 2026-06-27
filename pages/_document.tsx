import Document, { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
