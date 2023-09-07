module.exports = {
  apps: [{
      name: "helloheaven",
      script: "./helloheaven/app.js",
      env_production: {
          NODE_ENV: "production"
      },
      //   specify environment in your way
      env_development: {
          NODE_ENV: "development"
      }, env_sand: {
          NODE_ENV: "sandbox"
      }
  },
  {
      name: "hellohell",
      script: "./hellohell/app.js",
      env_production: {
          NODE_ENV: "production"
      },
      //   specify environment in your way
      env_development: {
          NODE_ENV: "development"
      }, env_sand: {
          // you can pass it like this through process.env.PORT
          PORT: 3003, //eg
          NODE_ENV: "sand"
      }
      ,
  },
  {
      name: "hellohworld",
      script: "./helloworld/app.js",
      env_production: {
          NODE_ENV: "production"
      },
      //   specify environment in your way
      env_development: {
          NODE_ENV: "development"
      }, env_sand: {
          NODE_ENV: "sandbox"
      }
  },
  ]
}