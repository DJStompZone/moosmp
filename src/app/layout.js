import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>MooSMP Logo Gallery</title>
        <meta name="title" content="MooSMP Logo Gallery" />
        <meta
          name="description"
          content="A gallery of logo options for the MooSMP Minecraft Bedrock server. Hundreds of different logos to choose from."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moo.logo.stomp.zone" />
        <meta property="og:title" content="MooSMP Logo Gallery" />
        <meta
          property="og:description"
          content="A gallery of logo options for the MooSMP Minecraft Bedrock server. Hundreds of different logos to choose from."
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/eqgyTC8.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://moo.logo.stomp.zone/" />
        <meta property="twitter:title" content="MooSMP Logo Gallery" />
        <meta
          property="twitter:description"
          content="A gallery of logo options for the MooSMP Minecraft Bedrock server. Hundreds of different logos to choose from."
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/eqgyTC8.png"
        />
      </head>
      <body className="flex flex-col min-h-screen">{children}</body>
    </html>
  );
}
