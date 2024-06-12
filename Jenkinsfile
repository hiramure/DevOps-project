pipeline {
    agent any
    stages {
        stage('Build Docker Images') {
            steps {
                // Your Docker build steps here
            }
        }
        stage('Deploy with Ansible') {
            steps {
                // Change ownership of SSH key
                sh 'sudo chown jenkins:jenkins /var/lib/jenkins/.ssh/id_rsa'
                
                // Set correct permissions on SSH key
                sh 'sudo chmod 600 /var/lib/jenkins/.ssh/id_rsa'
                
                // Execute Ansible playbook with updated SSH key
                sh 'ansible-playbook deploy.yml -i hosts --private-key /var/lib/jenkins/workspace/01/id_rsa -u sayuri'
            }
        }
    }
}
