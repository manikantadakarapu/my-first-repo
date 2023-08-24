pipeline {
    agent any
    triggers {
        pollSCM('* * * * *') // Poll the SCM (source code repository) every minute
    }
    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from the version control system (e.g., Git)
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Build the Docker image for the application
                sh 'docker build -t webapp-image .'
            }
        }
        
        stage('Test') {
            steps {
                // Run tests for your application (assuming you have test scripts)
                sh 'echo "Run tests here"'
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the Docker image to a Docker host or Kubernetes cluster
                sh 'docker run -d --name webapp-container2 -p 80:80 webapp-image'
            }
        }
    }
}
    
