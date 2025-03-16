/** @type {import('next-sitemap').IConfig} */
module.exports = {
    // Base URL of your website (required)
    siteUrl: 'https://sergioaco.com',
    
    // Automatically generate robots.txt file
    generateRobotsTxt: true,
    
    // Optional: Directory where sitemap files will be generated
    // Defaults to './public'
    outDir: './public',
    
    // Optional: Sitemap file name (without extension)
    // Defaults to 'sitemap'
    sitemapBaseFileName: 'sitemap',
    
    // Optional: How frequently pages are likely to change
    // Can be 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
    changefreq: 'daily',
    
    // Optional: Default priority for pages (0.0 - 1.0)
    priority: 0.7,
    
    // Optional: Generate index sitemap for large sites
    generateIndexSitemap: true,
    
    // Optional: Exclude specific paths from sitemap
    exclude: ['/admin/*', '/private/*'],
    
    // Optional: Custom robots.txt configuration
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/private'],
            },
        ],
        // Optional: Add additional sitemap URLs to robots.txt
        additionalSitemaps: [
            'https://sergioaco.com/sitemap.xml',
        ],
    },
    
    // Optional: Transform function to customize sitemap entries
    transform: async (config, path) => {
        return {
            loc: path, // URL path
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: new Date().toISOString(), // Last modified date
        }
    },
};