/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

interface INextHeader {
  title?: string;
  description?: string;
}

const SiteHeader: React.FC<INextHeader> = ({ title, description }) => {
  title = title ? title : "";
  description = description ? description : "";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
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
