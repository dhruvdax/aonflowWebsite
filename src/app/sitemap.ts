import { MetadataRoute } from 'next';

type WPPost = {
  slug: string;
  modified_gmt: string;
};

const staticRoutes = [
  '',
  '/about',
  '/api-integration',
  '/b2b-integration',
  '/blog',
  '/book-a-demo',
  '/career',
  '/cloud-integration',
  '/community-policy',
  '/contact',
  '/cookie-policy',
  '/customer-support',
  '/data-migration',
  '/documentation',
  '/dynamics-365',
  '/e-commerce',
  '/embedded-software-policy',
  '/finance',
  '/generator',
  '/google-sheets',
  '/healthcare',
  '/how-it-works',
  '/hr',
  '/hubspot',
  '/integrations/salesforce-business-central',
  '/integrations/salesforce-quickbooks-online',
  '/ipaas-for-saas',
  '/it',
  '/marketing',
  '/marketing-operations',
  '/microsoft-dynamics-business-central',
  '/microsoft-teams',
  '/netsuite',
  '/partner',
  '/pricing',
  '/privacy-policy',
  '/product',
  '/product-process',
  '/quickbooks-online',
  '/sales',
  '/sales-operations',
  '/salesforce',
  '/security-policy',
  '/shopify',
  '/slack',
  '/solutions',
  '/stripe',
  '/sub-processors',
  '/supply-chain',
  '/terms-of-service',
  '/twilio',
  '/woocommerce',
  '/zoho-crm',
];

const API_URL = 'https://www.aonflow.com/blog/wp-json/wp/v2';
const BASE_URL = 'https://www.aonflow.com';

async function getAllPosts(): Promise<WPPost[]> {
  let allPosts: WPPost[] = [];
  let page = 1;
  const perPage = 100;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const res = await fetch(`${API_URL}/posts?per_page=${perPage}&page=${page}&_fields=slug,modified_gmt`);
      if (!res.ok) {
        console.error(`Sitemap: Failed to fetch posts (page ${page}): ${res.statusText}`);
        break;
      }
      
      const totalPagesHeader = res.headers.get('x-wp-totalpages');
      if (totalPagesHeader) {
          totalPages = parseInt(totalPagesHeader, 10);
      }
      
      const posts: WPPost[] = await res.json();
      if (posts.length === 0) {
        break;
      }
      allPosts = allPosts.concat(posts);
      page++;
    }
  } catch (error) {
    console.error('Sitemap: Error fetching posts from WordPress:', error);
  }
  
  return allPosts;
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const blogPosts = await getAllPosts();

  const postEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modified_gmt + 'Z'),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return [
    ...staticEntries,
    ...postEntries,
  ];
}
