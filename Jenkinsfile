pipeline {
    agent any

    //   environment {
    //     CHROME_BIN = '/bin/google-chrome'  // Only if needed
    // }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ronkhaldankar/cypress_testing.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }
}
