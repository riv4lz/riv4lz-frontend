pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
              sh "docker build . -t frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
            }
        }
        stage("Deliver") {
            steps {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                        sh "docker push frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
                        }
            }
        }
        stage("Production") {
            steps {
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                        sh "docker run -p 3000:80 frederikotto/riv4lz-frontend:${BUILD_NUMBER}"

                        }
            }
        }
    }
}