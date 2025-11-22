import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "TASK iCare - Complete Inventory & Business Management Software",
  description = "Transform your business with TASK iCare - All-in-one inventory management system with GST billing, sales tracking, purchase management, and real-time reporting.",
  keywords = "TASK iCare, inventory management software, business management system, GST billing software, sales tracking, purchase management, IMC Business Solutions",
  ogImage = "/src/assets/logo.png",
  url = "https://icare.imcbs.com/",
  type = "website",
}) => {
  const fullTitle = `${title} | IMC Business Solutions`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
