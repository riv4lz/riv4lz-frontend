pipeline {
    agent any
    tools {
    nodejs 'Node 14'
  }
    stages {
        stage("Build") {
            steps {
                discordSend description: "Jenkins Pipeline Build", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              sh "docker build . -t frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
            }
        }
        stage("Testing") {
            steps {
                script {
          sh 'npm run test'
        }
            }
        }
        stage("Deliver") {
            steps {
                discordSend description: "Jenkins Pipeline Build", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
                    withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                        sh "docker push frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
                        }
            }
        }
        stage("Production") {
            steps {
                discordSend description: "Jenkins Pipeline Build", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              sh "docker run -d --rm -p 3000:3000 --name riv4lz-frontend frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
            }
        }
    }
}