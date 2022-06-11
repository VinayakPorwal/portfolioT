import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
              <link rel="icon" type="image/png" href="/profile-pic.png" sizes="32x32"></link>

    </Head>
  );
}
