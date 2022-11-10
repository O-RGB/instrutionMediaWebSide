/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

interface INextHeader {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SiteHeader: React.FC<INextHeader> = ({
  title,
  description,
  image,
  url,
}) => {
  title = title ? title : "";
  description = description ? description : "";
  image = image ? image : "";
  url = url ? url : "";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Mali&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};

export default SiteHeader;
