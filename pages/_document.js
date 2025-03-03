import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Salma's Portfolio - A showcase of my projects, skills, and experiences." />
        <meta name="author" content="Salma" />
        <meta property="og:title" content="Salma's Portfolio" />
        <meta property="og:description" content="Explore my portfolio, featuring my skills and projects." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
