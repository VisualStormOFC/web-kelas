# Vercel Speed Insights Setup

This project has been configured with Vercel Speed Insights to monitor web performance and Core Web Vitals.

## What was installed

- `@vercel/speed-insights` v2.0.0 - Official Vercel Speed Insights package

## Configuration

### Files Added/Modified:

1. **package.json** - Added @vercel/speed-insights as a dependency
2. **package-lock.json** - Lock file for consistent dependency resolution
3. **js/speed-insights.js** - Initialization script for Speed Insights
4. **index.html** - Added Speed Insights script tag
5. **pages/*.html** - Added Speed Insights script tag to all page files
6. **.gitignore** - Added to ignore node_modules and other generated files

### How it works:

The Speed Insights script is loaded on every page using an ES module approach:
- The `speed-insights.js` file dynamically imports the `injectSpeedInsights` function from the npm package
- It initializes Speed Insights with debug mode enabled for localhost/development
- The script is included at the end of each HTML page before the closing `</body>` tag

## Next Steps

To see Speed Insights data in your Vercel dashboard:

1. **Enable Speed Insights in Vercel Dashboard:**
   - Go to your Vercel project dashboard
   - Navigate to the Speed Insights tab in the sidebar
   - Click "Enable" to activate Speed Insights for this project

2. **Deploy to Vercel:**
   ```bash
   vercel deploy
   ```
   Or push to your connected Git repository for automatic deployment

3. **Wait for Data:**
   - After deployment, Speed Insights will start collecting data as users visit your site
   - Metrics will appear in the dashboard after a few days of traffic

## Development

To run the site locally:

```bash
npm run dev
```

This will start a local HTTP server on port 3000.

## Important Notes

- Speed Insights does NOT track data in development mode (localhost)
- Data collection only happens on production Vercel deployments
- The `node_modules` directory is ignored by Git but required for deployment
- Vercel will automatically install dependencies during deployment

## Documentation

For more information, visit:
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
