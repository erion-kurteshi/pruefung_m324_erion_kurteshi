export default [
    {
        files: ["**/*.js"], // Apply the config to JavaScript files
        languageOptions: {
            ecmaVersion: 2021, // Equivalent to ES2021
            sourceType: "module", // Support ES modules
            globals: {
                window: "readonly", // Browser environment
                document: "readonly",
                console: "readonly",
                process: "readonly", // Node.js environment
                module: "readonly",
                require: "readonly",
            },
        },
        rules: {
            "no-unused-vars": "error", // Flag unused variables
            "prefer-const": "error",  // Enforce const for variables that aren't reassigned
            "eqeqeq": "error",        // Enforce strict equality
            "no-console": "off",      // Allow console statements
        },
    },
];
