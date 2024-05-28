pipeline {
    agent any

    stages {
        stage('first') {
            steps {
                 'docker-compose build '
            }
        }

        stage('second') {
            steps {
                 'docker-compose up -d mongodb  '
            }
        }

        stage('third') {
            steps {
                 'docker-compose up -d backend '
            }
        }

        stage('fouth') {
            steps {
                 ' docker-compose up -d frontend  '
            }
        }


    }
}
