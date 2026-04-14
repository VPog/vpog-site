import { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url,                    lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/about`,         lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/projects`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/exec`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/calendar`,      lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${siteConfig.url}/outcomes`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/get-involved`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
