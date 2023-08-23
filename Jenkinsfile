pipeline {
    agent any

    triggers {
        pollSCM('* * * * *') // Poll the SCM (source code repository) every minute
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from your Git repository
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Example: Build your Java project
                echo "hello this is my first build"
            }
        }
        
        stage('Test') {
            steps {
                // Example: Run tests
                echo "this is my first test"
            }
        }
        
        stage('Deploy') {
            steps {
                // Example: Deploy your application
                echo "this is my first deploy"
            }
        }
    }
    
    post {
        success {
            // Send notifications or perform actions upon successful deployment
            echo 'Deployment successful!'
        }
        failure {
            // Send notifications or perform actions upon deployment failure
            echo 'Deployment failed!'
        }
    }
}
