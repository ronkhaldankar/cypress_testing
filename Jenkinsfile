pipeline {                                                                                                        mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm  
  agent any

  environment {
    CI = "true"
  }

  stages {
    stage('Clone Repo') {
      steps {
        // If Jenkins is pulling from SCM, this is auto-handled
        echo 'Repo checked out'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Start App in Background') {
      steps {
        sh 'npm run dev &'
      }
    }

    stage('Wait for App') {
      steps {
        sh 'npx wait-on http://localhost:3000'
      }
    }

    stage('Run E2E Tests') {
      steps {
        sh 'npx cypress run --e2e'
      }
    }

    stage('Run Component Tests') {
      steps {
        sh 'npx cypress run --component'
      }
    }

    stage('Build Project') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        sh 'pm2 restart app || pm2 start npm --name app -- run start'
      }
    }
  }
}
