// app/sitemap/route.js
import { NextResponse } from 'next/server';

// Example function to fetch dynamic data (e.g., from an API, database, or CMS)
async function fetchDynamicPaths() {
    // Replace this with your actual data fetching logic
    return [
        { loc : 'https://amosoli.com/' , lastmod: '2024-09-17' },
        { loc: 'https://amosoli.com/about', lastmod: '2024-09-17' },
        { loc: 'https://amosoli.com/projects', lastmod: '2024-09-17' },
        // Add more URLs dynamically...
    ];
}

export async function GET() {
    // Fetch dynamic paths (e.g., blog posts, products)
    const dynamicPaths = await fetchDynamicPaths();
    

    // Combine static and dynamic paths
    const urls = [...dynamicPaths];

    // Build the sitemap XML content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
        .map(
            (url) => `
      <url>
        <loc>${url.loc}</loc>
        <lastmod>${url.lastmod}</lastmod>
      </url>`
        )
        .join('')}
  </urlset>`;

    // Return the sitemap XML as a response
    return new NextResponse(sitemap, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
