const express = require('./server/node_modules/express');
const path = require('path');
const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, '/'), {
    maxAge: '7d', // Keep 7d for images/assets
    setHeaders: (res, filePath) => {
        // Force revalidation for HTML, JS, and CSS to ensure latest versions are used
        if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
            res.setHeader('Cache-Control', 'no-cache');
        }
    },
    etag: true,
    lastModified: true
}));

app.listen(port, () => {
    console.log(`Frontend running on http://localhost:${port}`);
});
