const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS) directly from the base level
app.use(express.static(path.join(__dirname)));  // Serve static files from the root

// Serve scripts, components, and other assets
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/components', express.static(path.join(__dirname, 'components'))); 
app.use('/ahsing-font', express.static(path.join(__dirname, 'ahsing-font'))); 
app.use('/data', express.static(path.join(__dirname, 'data'))); 
app.use('/logos', express.static(path.join(__dirname, 'logos'))); 

// Only send index.html if it's NOT a file request
app.get('*', (req, res, next) => {
    if (req.path.startsWith('/scripts') || req.path.startsWith('/styles') || req.path.includes('.')) {
        return next(); // Let Express serve the file
    }
    res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
