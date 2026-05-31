import fs from 'fs';
import path from 'path';

const components = [
  'Input', 'Card', 'Badge', 'Avatar', 'ToggleSwitch', 'Tooltip', 
  'Modal', 'Accordion', 'Tabs', 'Toast', 'Dropdown', 'Carousel', 'DataTable'
];

const basePath = '/home/dionysus/Projects/acm quest/src/components';
const assignmentsPath = '/home/dionysus/Projects/acm quest/assignments.json';

const assignments = {
  "Button": { "day": 1, "assignedDate": "2026-06-01" }
};

components.forEach((comp, index) => {
  const compDir = path.join(basePath, comp);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  fs.writeFileSync(path.join(compDir, `${comp}.jsx`), `import './${comp}.css';\n\nexport const ${comp} = (props) => {\n  return <div></div>;\n};\n`);
  fs.writeFileSync(path.join(compDir, `${comp}.css`), `/* Add ${comp} styles here */\n`);
  fs.writeFileSync(path.join(compDir, 'index.js'), `export { ${comp} } from './${comp}';\n`);

  assignments[comp] = {
    day: index + 2,
    assignedDate: `2026-06-${(index + 2).toString().padStart(2, '0')}`
  };
});

fs.writeFileSync(assignmentsPath, JSON.stringify(assignments, null, 2));
