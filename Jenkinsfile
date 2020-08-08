pipeline {
    agent any
    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "dockerhub") {
                        def image = docker.build("sethuram975351/frontend:latest")
                        image.push()
                    }
                }
            }
        }
        stage('Build Kubernetes Deployment') {
            steps {
                dir("/Users/sethuram/Desktop/terraform/k8s") {
                    sh 'kubectl apply -f frontend-deployment.yaml'
                }

            }
        }
    }
}
