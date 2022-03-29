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
          set -x
          npm start &
          sleep 1
          echo $! > .pidfile
          set +x
        }

      }
    }

  }
}