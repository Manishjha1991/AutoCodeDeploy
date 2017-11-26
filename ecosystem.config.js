

module.exports = {
  apps: [{
    name: 'codeDeploy',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'node',
      host: 'http://ec2-13-127-17-170.ap-south-1.compute.amazonaws.com',
      key: 'codeDeployTest.pem',
      ref: 'origin/master',
      repo: 'git@github.com:Manishjha1991/AutoCodeDeploy',
      path: './Users/manish/Desktop/AutoCodeDeploy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}