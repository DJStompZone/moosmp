import Document, { Html, Head, Main, NextScript } from 'next/document';
import { useEffect, useState } from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  function setTheme(theme) {
                    document.documentElement.className = theme;
                  }
                  const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  const savedTheme = localStorage.getItem("theme");
                  if (savedTheme) {
                    setTheme(savedTheme);
                  } else {
                    setTheme(userPrefersDark ? "dark" : "light");
                  }
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
