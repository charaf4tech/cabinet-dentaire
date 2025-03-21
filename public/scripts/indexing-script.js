
/**
 * Google Search Indexing Script
 * This script sends ping requests to Google to encourage crawling of website pages
 */

// Configuration
const SITE_URL = 'https://brightsmile.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const PAGES = [
  '/',
  '/about',
  '/services',
  '/doctors',
  '/contact',
  '/projects'
];

/**
 * Send a ping to Google to request indexing of a specific URL
 * @param {string} url - The URL to be indexed
 */
function pingGoogle(url) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  
  // Log the indexing request
  console.log(`Requesting indexing for: ${fullUrl}`);
  
  // Create a hidden iframe to send the request
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = `https://www.google.com/ping?sitemap=${encodeURIComponent(fullUrl)}`;
  
  // Add the iframe to DOM temporarily and remove after loading
  document.body.appendChild(iframe);
  iframe.onload = () => {
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };
}

/**
 * Request indexing for the sitemap
 */
function pingSitemap() {
  console.log(`Requesting indexing for sitemap: ${SITEMAP_URL}`);
  
  // Ping Google with the sitemap URL
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  document.body.appendChild(iframe);
  iframe.onload = () => {
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);
  };
}

/**
 * Process all individual pages for indexing
 */
function processPages() {
  // First ping the sitemap
  pingSitemap();
  
  // Then ping each individual page with a delay
  PAGES.forEach((page, index) => {
    setTimeout(() => {
      pingGoogle(page);
    }, index * 2000); // 2-second delay between requests to avoid rate limiting
  });
}

// Initialize the indexing process
processPages();

// Set up daily scheduling if the script is running in a browser context
if (typeof window !== 'undefined') {
  // Store the last run timestamp in localStorage
  const lastRunKey = 'lastIndexingRun';
  const now = new Date().getTime();
  const lastRun = parseInt(localStorage.getItem(lastRunKey) || '0');
  const dayInMs = 24 * 60 * 60 * 1000;
  
  // If it's been more than a day since the last run, run again
  if (now - lastRun >= dayInMs) {
    processPages();
    localStorage.setItem(lastRunKey, now.toString());
    console.log('Indexing process completed. Next run scheduled in 24 hours.');
  } else {
    const nextRun = new Date(lastRun + dayInMs);
    console.log(`Next indexing run scheduled for: ${nextRun.toLocaleString()}`);
  }
}
