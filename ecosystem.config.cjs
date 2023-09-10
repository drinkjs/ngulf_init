module.exports = {
  apps: [
    {
      name: "ngule_init",
      script: "./src/main.ts",
      interpreter: 'node',
      interpreterArgs: '--loader tsx',
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
