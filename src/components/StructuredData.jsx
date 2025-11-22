import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IMC Business Solutions",
    alternateName: "IMC Business Solutions LLP",
    url: "https://icare.imcbs.com",
    logo: "https://icare.imcbs.com/src/assets/logo.png",
    description: "IMC Business Solutions is a leading software company in Wayanad, Kerala, providing enterprise-grade IT services and custom software solutions since 2009.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Palakkunnummal Building, Near Govt Ayurveda Hospital, Emily",
      addressLocality: "Kalpetta",
      addressRegion: "Wayanad, Kerala",
      postalCode: "673121",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9447049940",
      contactType: "Customer Service",
      email: "info@imcbs.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Malayalam"],
    },
    foundingDate: "2009",
    sameAs: [
      "https://imcbs.com",
      "https://www.linkedin.com/company/imc-business-solutions",
    ],
  };

  // Software Product Schema for TASK iCare
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TASK iCare",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    description: "TASK iCare is a complete inventory and business management software with GST billing, sales tracking, purchase management, and real-time reporting capabilities.",
    screenshot: "https://icare.imcbs.com/src/assets/logo.png",
    softwareVersion: "2025",
    author: {
      "@type": "Organization",
      name: "IMC Business Solutions",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
    featureList: [
      "Sales & Billing Management",
      "Purchase Management",
      "Stock & Inventory Control",
      "GST & Barcode Support",
      "User Roles & Permissions",
      "Reports & Analytics",
      "Multi-Branch Access",
      "Payment & Collection Tracking",
      "Mobile Access",
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TASK iCare",
    url: "https://icare.imcbs.com",
    description: "Complete inventory and business management software by IMC Business Solutions",
    publisher: {
      "@type": "Organization",
      name: "IMC Business Solutions",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://icare.imcbs.com/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb Schema for Home Page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://icare.imcbs.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Features",
        item: "https://icare.imcbs.com/options",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Demonstration",
        item: "https://icare.imcbs.com/demonstration",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Company",
        item: "https://icare.imcbs.com/company",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://icare.imcbs.com/contact",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
};

export default StructuredData;
