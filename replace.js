const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) { replaceInDir(p); }
    else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      let content = fs.readFileSync(p, 'utf8');
      // replace all tailwind color classes containing 'gold' with 'cyan'
      const newContent = content.replace(/([a-z0-9:-]+)-gold/g, '$1-cyan');
      if(newContent !== content) {
        fs.writeFileSync(p, newContent);
      }
    }
  }
}
replaceInDir('./src/components');
console.log('Class replacement complete.');
