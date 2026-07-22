
pipeline {
    agent any
            parameters {
            choice(
            name: 'SUITE',
            choices: ['Smoke', 'Sanity', 'Regression'],
            description: 'Select Test Suite'
        )
            }
    stages {

        stage('Install Node Modules') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Publish HTML Report') {
            steps {
                publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report',
                    keepAll: true,
                    alwaysLinkToLastBuild: true,
                    allowMissing: false
                ])
            }
        }
    }

    post {

        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }

        success {
            echo 'Playwright tests executed successfully.'
        }

        failure {
            echo 'Playwright test execution failed.'
        }
    }
}