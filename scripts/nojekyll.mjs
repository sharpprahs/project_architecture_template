import { writeFileSync, mkdirSync } from 'node:fs';
mkdirSync('build', { recursive: true });
writeFileSync('build/.nojekyll', '');
console.log('✔ .nojekyll created in build/');