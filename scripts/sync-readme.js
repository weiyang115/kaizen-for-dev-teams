const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'README.md');
const ABOUT_PAGE = path.join(ROOT, 'src', 'pages', 'about.md');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function addFrontMatter(content) {
  // delete Title（# ProjectName）
  // content = content.replace(/^# .*\n/, '');

  // add Docusaurus frontmatter
  return `---
title: About
description: Learn more about this project
slug: /about
---

${content.trim()}
`;
}

function copyWithFrontmatter(src, dest) {
  ensureDir(dest);
  let content = fs.readFileSync(src, 'utf8');
  const final = addFrontMatter(content);
  fs.writeFileSync(dest, final, 'utf8');
  console.log(`✅ Generated ${path.relative(ROOT, dest)}`);
}

copyWithFrontmatter(SRC, ABOUT_PAGE);

console.log('✅ README.md sync to src/pages/about.md');
