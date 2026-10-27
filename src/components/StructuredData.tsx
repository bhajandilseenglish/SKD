import React from "react";
import { siteConfig } from "@/data/siteData";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://skdgroupofinstitutions.com/#organization",
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: "https://skdgroupofinstitutions.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://skdgroupofinstitutions.com/assets/brand/logo.png",
          caption: "SKD Group of Institutions",
        },
        image: "https://skdgroupofinstitutions.com/assets/images/acca-coaching-chandigarh-.png",
        description: siteConfig.subTagline,
        telephone: siteConfig.contact.primaryPhone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line1 + ", " + siteConfig.address.line2,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "30.7046",
          longitude: "76.8016",
        },
        sameAs: [
          siteConfig.socials.instagram,
          siteConfig.socials.linkedin,
          siteConfig.socials.facebook,
          siteConfig.socials.youtube,
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://skdgroupofinstitutions.com/#localbusiness",
        name: siteConfig.name,
        image: "https://skdgroupofinstitutions.com/assets/brand/logo.png",
        telephone: siteConfig.contact.primaryPhone,
        email: siteConfig.contact.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line1 + ", " + siteConfig.address.line2,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          postalCode: siteConfig.address.pincode,
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "08:30",
            closes: "19:30",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
