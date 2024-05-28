pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh 'docker-compose build '
            }
        }

        stage('Hello') {
            steps {
                sh 'docker-compose up -d mongodb  '
            }
        }

        stage('Hello') {
            steps {
                sh 'docker-compose up -d backend '
            }
        }

        stage('Hello') {
            steps {
                sh ' docker-compose up -d frontend  '
            }
        }


    }
}
