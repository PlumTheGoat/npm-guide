// lib/index.js

function helloWorld() {
    console.log("Hello, world! This is a guide on how to create an npm package.");
}

function guide() {
    console.log(`
    ## How to Create an npm Package

    1. **Set Up Your Project**: Use \`npm init\` to create your \`package.json\`.
    2. **Create Your Code Structure**: Organize your code into directories like \`lib\` and \`tests\`.
    3. **Write Your Code**: Implement your functionality in the \`lib\` directory.
    4. **Add Tests**: Write tests in the \`tests\` directory.
    5. **Publish Your Package**: Log in to npm and publish your package using \`npm publish\`.
    `);
}

// Export the functions
module.exports = {
    helloWorld,
    guide
};
 
