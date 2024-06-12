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
                // Create .ssh directory if it doesn't exist
                sh 'mkdir -p ~/.ssh'
                // Add host key verification
                sh 'ssh-keyscan -H 192.168.100.4 >> ~/.ssh/known_hosts'
                // Display known_hosts for debugging
                sh 'cat ~/.ssh/known_hosts'
                ansiblePlaybook credentialsId: 'ansible-ssh-key', inventory: 'hosts', playbook: 'deploy.yml'
            }
        }
    }
}

