pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t getting-started .'
            }
        }
        stage('Deliver') {
            steps {
                sh 'docker run -dp 3000:3000 getting-started'
            }
        }
    }
}