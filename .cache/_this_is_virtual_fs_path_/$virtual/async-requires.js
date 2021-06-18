// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blogs-js": () => import("./../../../src/pages/blogs.js" /* webpackChunkName: "component---src-pages-blogs-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../../../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-viz-js": () => import("./../../../src/pages/viz.js" /* webpackChunkName: "component---src-pages-viz-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

