pipeline {
    agent any
    triggers{
      pollSCM("*/10 * * * *")
    }
    tools {
    nodejs 'Node 14'
    }
    stages {
        
        stage("Build") {
            when {
              anyOf {
                changeset "src/**"
              }
            }
            steps {
              discordSend description: "Build Stage", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              
              sh 'npm install'
              
              withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh "docker build . -t frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
              } 
            }
            post{
              failure{
                discordSend description: "Build Stage FAILED", footer: "Please correct errors", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              }
            }
        }
        stage("Testing") { 
            when {
              anyOf {
                changeset "src/**"
              }
            }
            steps {
                script {
                  //sh "npm install testcafe"
                  //sh 'Testcafe chrome:headless ./src/tests/'
                }
            }
            post{
              failure{
                discordSend description: "Test Stage FAILED", footer: "Please correct errors", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              }
            }
        }
        stage("Deliver") {
            when {
              anyOf {
                changeset "src/**"
              }
            }
            steps {
                discordSend description: "Delivery stage", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
                withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                  sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                  sh "docker push frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
                }
            }
        }
        stage("Deployment to Test environment") {
            steps {
                
              sh "docker run -d --rm -p 3000:80 --name riv4lz-frontend frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
              discordSend description: "JProduction stage", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
            }
        }
    }
}