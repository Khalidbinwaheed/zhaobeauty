const fs = require('fs');

function replaceImages(p) {
    let content = fs.readFileSync(p, 'utf8');
    if (p.endsWith('products.ts')) {
        content = content.replace(/image:\s*'\/images\//g, "image: import.meta.env.BASE_URL + 'images/");
    }
    if (p.endsWith('.tsx')) {
        // Handle images that might have class names or other attributes next to them. 
        // We just replace src="/images/... with src={`${import.meta.env.BASE_URL}images/...
        // e.g., src="/images/logo.png" -> src={`${import.meta.env.BASE_URL}images/logo.png`}
        content = content.replace(/src="\/images\/([^"]+)"/g, "src={`${import.meta.env.BASE_URL}images/$1`}");
    }
    fs.writeFileSync(p, content, 'utf8');
}

replaceImages('./src/data/products.ts');
replaceImages('./src/components/sections/Hero.tsx');
replaceImages('./src/components/sections/About.tsx');
replaceImages('./src/components/Header.tsx');
console.log('Fixed image paths');
