const fs = require('fs');
const kt = fs.readFileSync('C:/AndroidApps/kontrol/app/src/main/java/com/example/yapkontrol/data/local/seed/InspectionItemsSeed.kt', 'utf-8');

const categories = [...kt.matchAll(/Category\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*(\d+)\)/g)]
  .map(m => ({id: m[1], name: m[2], description: m[3], iconName: m[4], displayOrder: parseInt(m[5])}));

const items = [...kt.matchAll(/InspectionItem\("([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)",\s*RiskLevel\.([A-Z]+),\s*"([^"]+)",\s*(\d+)\)/g)]
  .map(m => ({id: m[1], categoryId: m[2], text: m[3], description: m[4], riskLevel: m[5], solutionHint: m[6], displayOrder: parseInt(m[7])}));

fs.mkdirSync('C:/AndroidApps/kontrol-web/src/lib', {recursive: true});
fs.writeFileSync('C:/AndroidApps/kontrol-web/src/lib/seed.ts', 'export const categories = ' + JSON.stringify(categories, null, 2) + ';\n\nexport const items = ' + JSON.stringify(items, null, 2) + ';');

console.log(`Parsed ${categories.length} categories and ${items.length} items`);
