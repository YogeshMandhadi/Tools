# Multi-Tools Website

A comprehensive collection of 100+ free online tools built with HTML, CSS (Bootstrap), and vanilla JavaScript. This project offers a wide range of utilities from image converters to calculators, SEO tools, text utilities, and more.

## Features

- **100+ Online Tools**: A diverse collection of tools organized by category.
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices.
- **Dynamic Search**: Real-time search functionality to quickly find tools.
- **Modular Structure**: Each tool is in its own file for clean and maintainable code.
- **Zero Dependencies**: Built with vanilla JavaScript - no frameworks required.
- **Fast & Lightweight**: Optimized for quick loading and smooth performance.
- **Ad Integration**: Strategically placed ad spaces for monetization.

## Categories

- **Image Tools**: Converters, resizers, compressors, and more for image manipulation.
- **SEO Tools**: Meta tag generators, keyword analyzers, sitemap tools, etc.
- **Text Tools**: Word counters, case converters, text generators, etc.
- **Developer Tools**: Code formatters, validators, converters for developers.
- **Math & Calculators**: Various calculators for different needs.
- **Unit Converters**: Convert between different units of measurement.
- **Security & Encryption**: Password generators, hash tools, encryption utilities.
- **Social Media Tools**: Downloaders, generators, and utilities for social media.
- **Miscellaneous Tools**: Various other helpful utilities.

## Project Structure

```
├── index.html                  # Main homepage with all tools listed
├── header.html                 # Header component
├── footer.html                 # Footer component
├── css/
│   └── styles.css              # Main stylesheet
├── js/
│   ├── main.js                 # Core JavaScript functionality
│   └── tools.js                # Tool data and rendering logic
└── tools/                      # Individual tool pages
    ├── image-tools/            # Image-related tools
    ├── seo-tools/              # SEO-related tools
    ├── text-tools/             # Text-related tools
    ├── developer-tools/        # Developer tools
    ├── calculators/            # Math & calculator tools
    ├── unit-converters/        # Unit conversion tools
    ├── security-tools/         # Security & encryption tools
    ├── social-media-tools/     # Social media tools
    └── misc-tools/             # Miscellaneous tools
```

## Installation & Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/multi-tools-website.git
   ```

2. Open the `index.html` file in your web browser to view the site locally.

3. Alternatively, deploy the entire folder to any static web hosting service.

No build process or server-side code is required. The site is purely client-side.

## Adding a New Tool

1. Create a new HTML file in the appropriate category folder inside `tools/`.
2. Use the following template:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tool Name - Multi-Tools</title>
    <meta name="description" content="Tool description for SEO">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="../../css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>
<body>
    <!-- Header will be loaded dynamically -->
    <div id="header-placeholder"></div>

    <div class="container mt-4">
        <div class="tool-container">
            <div class="tool-header">
                <h1>Tool Name</h1>
                <p class="tool-description">Detailed description of what this tool does.</p>
            </div>
            
            <div class="tool-content">
                <!-- Tool-specific content here -->
            </div>
            
            <!-- Ad space -->
            <div class="ad-placeholder my-4">
                <p>Advertisement Space</p>
            </div>
        </div>
        
        <!-- Related tools section -->
        <div class="related-tools">
            <h3>Related Tools</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4" id="related-tools-container">
                <!-- Related tools will be populated dynamically -->
            </div>
        </div>
    </div>

    <!-- Footer will be loaded dynamically -->
    <div id="footer-placeholder"></div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Custom JS -->
    <script src="../../js/main.js"></script>
    <script src="../../js/tools.js"></script>
    
    <!-- Tool-specific script -->
    <script>
        // Your tool-specific JavaScript here
    </script>
</body>
</html>
```

3. Add the tool's information to the `toolsData` array in `js/tools.js`.

## Monetization

The website includes strategically placed ad containers that can be connected to ad networks like Google AdSense. Ad placements are included in:

- Top of the homepage
- Sidebar
- Bottom of each page
- Within individual tool pages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/multi-tools-website](https://github.com/yourusername/multi-tools-website) 