// Vercel Speed Insights for static sites
// This script loads and initializes Speed Insights

(function() {
  // Create a script element to load the Speed Insights module
  var script = document.createElement('script');
  script.type = 'module';
  script.textContent = `
    import { injectSpeedInsights } from '/node_modules/@vercel/speed-insights/dist/index.mjs';
    
    // Initialize Speed Insights
    injectSpeedInsights({
      debug: ${window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'}
    });
  `;
  
  // Add the script to the document head
  if (document.head) {
    document.head.appendChild(script);
  } else {
    // If head is not yet available, wait for DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      document.head.appendChild(script);
    });
  }
})();
