

module.exports = {
  apps: [{
    name: 'codeDeploy',
    script: 'index.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-13-127-17-170.ap-south-1.compute.amazonaws.com',
      key: 'codeDeployTest.pem',
      ref: 'origin/master',
      //repo: 'git@github.com:Manishjha1991/AutoCodeDeploy',
      repo: 'https://github.com/Manishjha1991/AutoCodeDeploy.git',
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      path: '/home/ec2-user/AutoCodeDeploy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}