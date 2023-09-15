const pkg = require("./package.json");

module.exports = {
	apps: [
		{
			name: pkg.name,
			script: "./src/main.ts",
			interpreter: "node",
			interpreterArgs: "--loader ./es-loader.js",
			exec_mode: "cluster",
			watch: false,
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
