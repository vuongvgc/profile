This is a starter template for [Learn Next.js](https://nextjs.org/learn).

Build website: - Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel. - You need to do production optimizations such as code splitting. - You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering. - You might have to write some server-side code to connect your React app to your data store.

<hr/>
Next js: - Automatic code splitting for faster page loads - Client-side routing with optimized prefetching
<hr/>

Navigate: - Link component - Next.js does code splitting automatically, so each page only loads what’s necessary for that page. That means when the homepage is rendered, the code for other pages is not served initially. - Furthermore, in a production build of Next.js, whenever Link components appear in the browser’s viewport, Next.js automatically prefetches the code for the linked page in the background. By the time you click the link, the code for the destination page will already be loaded in the background, and the page transition will be near-instant

<hr/>

Assets - Public - Image component:Next.js also has support for Image Optimization allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it

Layout Component

Global Styles
CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well
