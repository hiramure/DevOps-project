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
                
                
                // Execute Ansible playbook with updated SSH key
                sh 'ansible-playbook deploy.yml -i hosts --private-key /var/lib/jenkins/workspace/01/id_rsa -u sayuri'
            }
        }
    }
}
