const fs = require('fs');

// Read the data file
const content = fs.readFileSync('data.js', 'utf8');
const dataMatch = content.match(/const data_unfiltered = (\[[\s\S]*?\]);/);

if (dataMatch) {
  const data = eval(dataMatch[1]);
  
  // Get all unique values for each field
  const fields = {};
  data.forEach(item => {
    Object.keys(item).forEach(key => {
      if (!fields[key]) fields[key] = new Set();
      if (item[key] && item[key] !== '') {
        // Split comma-separated values for certain fields
        if (['attracts', 'flowering_time', 'soil', 'Exposure'].includes(key)) {
          const values = item[key].toString().split(',').map(v => v.trim().toLowerCase());
          values.forEach(v => {
            if (v) fields[key].add(v);
          });
        } else {
          fields[key].add(item[key].toString().trim());
        }
      }
    });
  });
  
  // Convert sets to sorted arrays and display
  console.log('=== DATA ANALYSIS FOR FILTER CREATION ===\n');
  
  Object.keys(fields).forEach(field => {
    const values = Array.from(fields[field]).sort();
    console.log(`${field.toUpperCase()}:`);
    console.log(`  Count: ${values.length}`);
    console.log(`  Values: ${values.slice(0, 15).join(', ')}${values.length > 15 ? '...' : ''}`);
    console.log('');
  });
}
