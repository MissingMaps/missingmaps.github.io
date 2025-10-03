const fs = require('fs');

/**
 * Wipes all dependency versions in package.json and sets them to '*'
 * This utility is used to update all dependencies to their latest versions
 */
const wipeDependencies = () => {
  try {
    const file = fs.readFileSync('package.json', 'utf8');
    const content = JSON.parse(file);

    // Update devDependencies to latest versions
    if (content.devDependencies) {
      for (const devDep in content.devDependencies) {
        content.devDependencies[devDep] = '*';
      }
    }

    // Update dependencies to latest versions
    if (content.dependencies) {
      for (const dep in content.dependencies) {
        content.dependencies[dep] = '*';
      }
    }

    fs.writeFileSync('package.json', JSON.stringify(content, null, 2));
    console.log('Successfully updated package.json dependencies to latest versions');
  } catch (error) {
    console.error('Error updating dependencies:', error.message);
    process.exit(1);
  }
};

// Run if this file is executed directly
if (require.main === module) {
  wipeDependencies();
} else {
  module.exports = wipeDependencies;
}
