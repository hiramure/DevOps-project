// pipeline {
//     agent any
//     stages {
//         stage('Build Docker Images') {
//             steps {
//                 sh 'docker-compose build'
//             }
//         }
//         stage('Deploy with Ansible') {
//             steps {
                
                
//                 // Execute Ansible playbook with updated SSH key
//                 sh 'ansible-playbook deploy.yml -i hosts --private-key /var/lib/jenkins/workspace/01/id_rsa -u sayuri'
//             }
//         }
//     }
// }

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
