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
    </Head>
  );
};

export default SiteHeader;
