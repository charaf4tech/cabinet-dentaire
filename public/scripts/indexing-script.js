
/**
 * Google Search Indexing Script
 * This script sends ping requests to Google to encourage crawling of website pages
 */

// Configuration
const SITE_URL = 'https://cabinet-dentaire-4tech.vercel.app';
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
 * Send a ping to Google to request indexing of a specific URL using fetch instead of iframes
 * @param {string} url - The URL to be indexed
 */
function pingGoogle(url) {
  const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;
  
  // Log the indexing request
  console.log(`Requesting indexing for: ${fullUrl}`);
  
  // Use fetch API instead of iframes to avoid CSP issues
  // Note: We're using no-cors mode to prevent CORS errors
  fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(fullUrl)}`, {
    mode: 'no-cors',
    method: 'GET',
  })
  .then(() => {
    console.log(`Successfully sent ping request for: ${fullUrl}`);
  })
  .catch(error => {
    console.error(`Error pinging Google for ${fullUrl}:`, error);
  });
}

/**
 * Request indexing for the sitemap
 */
function pingSitemap() {
  console.log(`Requesting indexing for sitemap: ${SITEMAP_URL}`);
  
  // Use fetch API instead of iframes
  fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`, {
    mode: 'no-cors',
    method: 'GET',
  })
  .then(() => {
    console.log(`Successfully sent ping request for sitemap`);
  })
  .catch(error => {
    console.error('Error pinging Google for sitemap:', error);
  });
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

/**
 * Safe console log that doesn't break if console is not available
 */
function safeLog(message) {
  if (typeof console !== 'undefined' && console.log) {
    console.log(message);
  }
}

// Initialize the indexing process with error handling
try {
  // Set up daily scheduling if the script is running in a browser context
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    // Store the last run timestamp in localStorage
    const lastRunKey = 'lastIndexingRun';
    const now = new Date().getTime();
    const lastRun = parseInt(localStorage.getItem(lastRunKey) || '0');
    const dayInMs = 24 * 60 * 60 * 1000;
    
    // If it's been more than a day since the last run, run again
    if (now - lastRun >= dayInMs) {
      processPages();
      localStorage.setItem(lastRunKey, now.toString());
      safeLog('Indexing process completed. Next run scheduled in 24 hours.');
    } else {
      const nextRun = new Date(lastRun + dayInMs);
      safeLog(`Next indexing run scheduled for: ${nextRun.toLocaleString()}`);
    }
  } else {
    // If localStorage is not available, just run the process
    processPages();
  }
} catch (error) {
  console.error('Error in indexing script:', error);
}
