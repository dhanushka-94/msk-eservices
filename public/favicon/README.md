# MSK eServices Favicon

This directory contains all the favicon files for the MSK eServices website.

## Files Included

- `favicon.ico` - The main favicon file (16x16, 32x32)
- `favicon-16x16.png` - 16x16 PNG favicon
- `favicon-32x32.png` - 32x32 PNG favicon
- `apple-touch-icon.png` - 180x180 PNG for Apple devices
- `android-chrome-192x192.png` - 192x192 PNG for Android devices
- `android-chrome-512x512.png` - 512x512 PNG for Android devices
- `mstile-150x150.png` - 150x150 PNG for Microsoft tiles
- `safari-pinned-tab.svg` - SVG for Safari pinned tabs
- `favicon.svg` - Original SVG favicon
- `logo.svg` - Original SVG logo
- `site.webmanifest` - Web app manifest file
- `browserconfig.xml` - Configuration for Microsoft browsers

## How to Generate

In a production environment, you would typically use tools like:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [Favicons NPM package](https://www.npmjs.com/package/favicons)

These tools can generate all the necessary favicon files from a single source image.

## Implementation

The favicon references are added to the `<head>` section of the `index.html` file:

```html
<link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon/favicon-16x16.png">
<link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon/favicon.svg">
<link rel="manifest" href="%PUBLIC_URL%/favicon/site.webmanifest">
<link rel="mask-icon" href="%PUBLIC_URL%/favicon/safari-pinned-tab.svg" color="#ffd700">
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon/favicon.ico">
<meta name="msapplication-TileColor" content="#ffd700">
<meta name="msapplication-config" content="%PUBLIC_URL%/favicon/browserconfig.xml">
```

## Colors

- Primary: `#ffd700` (Gold)
- Background: `#121212` (Dark) 