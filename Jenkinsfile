pipeline {
    agent any

    stages {
        stage('first') {
            steps {
                // bat 'docker-compose build '
                sh 'docker-compose build '
                
            }
        }

        stage('second') {
            steps {
                // bat 'docker-compose up -d mongodb  '
                sh 'docker-compose up -d mongodb  '
            }
        }

        stage('third') {
            steps {
                // bat 'docker-compose up -d backend '
                sh 'docker-compose up -d backend '
            }
        }

        stage('fouth') {
            steps {
                // bat ' docker-compose up -d frontend  '
                sh ' docker-compose up -d frontend  '
            }
        }


    }
}
