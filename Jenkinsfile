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
                  echo "Simulating test stage"
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
        
        stage("Clean Containers"){
          when {
              anyOf {
                changeset "src/**"
              }
          }
          steps{
            sh "docker rm -f riv4lz-frontend"
          }
        }
        stage("Deploy to Test Environment") {
            when {
              anyOf {
                changeset "src/**"
              }
            }
            steps {    
              sh "docker run -d --rm -p 3000:3000 --name riv4lz-frontend frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
            }
            post{
              success{
                discordSend description: "Deployment stage SUCCESS", footer: "Good job!", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              }
              failure{
                discordSend description: "Build Stage FAILED", footer: "Please correct errors", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              }
            }
        }
        stage("Push to Docker Hub") {
            when {
              anyOf {
                changeset "src/**"
              }
            }
            steps {
                
              withCredentials([usernamePassword(credentialsId: 'DockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh 'docker login -u ${USERNAME} -p ${PASSWORD}'
                sh "docker push frederikotto/riv4lz-frontend:${BUILD_NUMBER}"
              }
            }
            post{
              failure{
                discordSend description: "Delivery Stage FAILED", footer: "Please correct errors", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/958687917100892181/Ywqi7Cv9vZ9UTFwvP9vezRxnBgWo_iXHhzFqNWqG8pv0i1gRyT3kiCihM09JOn4KB0le"
              }
            }
        }
    }
}