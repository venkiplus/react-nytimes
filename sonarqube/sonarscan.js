import scanner from 'sonarqube-scanner'
scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_614f482c669114d5b65eb43a0f8ae8e709a7eb2b",
        options: {
            'sonar.projectName': 'sonar-react-nytimes',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'react-nytimes',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login': 'sqp_614f482c669114d5b65eb43a0f8ae8e709a7eb2b'
        }
    },
    () => process.exit());
