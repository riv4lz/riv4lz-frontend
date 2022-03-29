pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        script {
          sh 'npm install'
        }

      }
    }

    stage('Run') {
      steps {
        script {
          sh 'npm start'
        }

      }
    }

  }
}