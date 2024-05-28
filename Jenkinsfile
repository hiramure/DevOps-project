pipeline {
    agent any

    stages {
        stage('first') {
            steps {
                sh 'docker-compose build '
            }
        }

        stage('second') {
            steps {
                sh 'docker-compose up -d mongodb  '
            }
        }

        stage('third') {
            steps {
                sh 'docker-compose up -d backend '
            }
        }

        stage('fouth') {
            steps {
                sh ' docker-compose up -d frontend  '
            }
        }


    }
}
