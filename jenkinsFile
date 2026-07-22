pipeline {

    agent any

    tools {
        nodejs "NodeJS"
    }

    parameters {

        choice(
            name: 'ENV',
            choices: ['QA', 'UAT', 'STAGING'],
            description: 'Select Environment'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Browser'
        )

        choice(
            name: 'SUITE',
            choices: ['Smoke', 'Sanity', 'Regression'],
            description: 'Test Suite'
        )

        string(
            name: 'TAG',
            defaultValue: '@smoke',
            description: 'Playwright Tag'
        )

        booleanParam(
            name: 'HEADLESS',
            defaultValue: true,
            description: 'Run Headless'
        )

        choice(
            name: 'WORKERS',
            choices: ['1','2','4'],
            description: 'Parallel Workers'
        )

        choice(
            name: 'RETRY',
            choices: ['0','1','2'],
            description: 'Retries'
        )

        booleanParam(
            name: 'ALLURE_REPORT',
            defaultValue: true,
            description: 'Generate Allure Report'
        )
    }

    environment {

        QA_URL       = "https://qa.company.com"
        UAT_URL      = "https://uat.company.com"
        STAGING_URL  = "https://staging.company.com"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/company/playwright-framework.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }

        stage('Execute Tests') {

            steps {

                withCredentials([
                    usernamePassword(
                        credentialsId: 'qa-login',
                        usernameVariable: 'APP_USERNAME',
                        passwordVariable: 'APP_PASSWORD'
                    ),
                    string(
                        credentialsId: 'api-token',
                        variable: 'API_TOKEN'
                    )
                ]) {

                    script {

                        def baseUrl = ""

                        if(params.ENV == "QA"){
                            baseUrl = env.QA_URL
                        }
                        else if(params.ENV == "UAT"){
                            baseUrl = env.UAT_URL
                        }
                        else{
                            baseUrl = env.STAGING_URL
                        }

                        sh """
                        export BASE_URL=${baseUrl}
                        export USERNAME=${APP_USERNAME}
                        export PASSWORD=${APP_PASSWORD}
                        export API_TOKEN=${API_TOKEN}
                        export HEADLESS=${params.HEADLESS}

                        npx playwright test \
                        --project=${params.BROWSER} \
                        --grep=${params.TAG} \
                        --workers=${params.WORKERS}
                        """
                    }
                }
            }
        }

        stage('Generate Allure Report') {

            when {
                expression { params.ALLURE_REPORT }
            }

            steps {
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**'

            archiveArtifacts artifacts: 'allure-report/**'

            junit 'test-results/*.xml'

            cleanWs()
        }

        success {
            echo "Execution Completed Successfully"
        }

        failure {
            echo "Execution Failed"
        }
    }
}
