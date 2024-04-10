const { createSitemap } = require('vue-router-sitemap');
const { routes } = require('./src/router/index'); // 路径根据你的项目实际情况调整
const fs = require('fs');

const sitemap = createSitemap({
  routes,
  hostname: 'https://www.aiotools.top/', // 替换为你的域名
}).toString();

fs.writeFileSync('public/sitemap.xml', sitemap);
