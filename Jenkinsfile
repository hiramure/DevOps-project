pipeline {
    agent any

    stages {
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Deploy with Ansible') {
            steps {
                ansiblePlaybook credentialsId: 'Ansible', inventory: 'hosts', playbook: 'deploy.yml'
            }
        }
    }
}
