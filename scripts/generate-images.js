#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://img.openaa.com';
const IMG_DIR = path.join(__dirname, '..', 'img');
const OUTPUT_FILE = path.join(__dirname, '..', 'images.json');

const CATEGORIES = [
  { key: 'news',     name: '新闻图片' },
  { key: 'share',    name: '分享海报' },
  { key: 'banners',  name: '广告图片' },
  { key: 'default',  name: '默认图片' },
  { key: 'logo',     name: 'Logo' },
  { key: 'icons',    name: '图标' },
  { key: 'dmv',      name: 'DMV 图片' },
  { key: 'services', name: '本地服务图片' },
  { key: 'pages',    name: '页面配图' },
  { key: 'others',   name: '其它图片' },
];

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']);

const results = [];

for (const { key, name } of CATEGORIES) {
  const dirPath = path.join(IMG_DIR, key);

  if (!fs.existsSync(dirPath)) {
    continue;
  }

  let files;
  try {
    files = fs.readdirSync(dirPath);
  } catch (err) {
    console.warn(`Warning: could not read directory ${dirPath}: ${err.message}`);
    continue;
  }

  const imageFiles = files
    .filter(f => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

  for (const filename of imageFiles) {
    const relPath = `img/${key}/${filename}`;
    results.push({
      category: key,
      categoryName: name,
      filename,
      path: relPath,
      url: `${BASE_URL}/${relPath}`,
    });
  }
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2) + '\n', 'utf8');
console.log(`Generated images.json with ${results.length} image(s).`);
