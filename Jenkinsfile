node {

    stage 'smartshare-frontend-checkout'
    checkout scm
    //git 'https://github.com/sethuram975351/SmartShareFrontEnd.git'

    stage 'build image'
    sh 'docker image build -t frontend:latest .'

    stage 'Run container'
    sh 'docker run --env GATEWAY_URL="http://localhost:8081" -e FRONTEND_PORT="4200" -p 4200:80 frontend:latest'
}
