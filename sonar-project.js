const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectKey': 'QEWD',
      'sonar.projectName': 'QEWD',
      'sonar.sourceEncoding': 'UTF-8',
      //   'sonar.javascript.file.suffixes': '.js,.jsx',
      'sonar.language': 'ts',
      'sonar.sources': 'src',
      'sonar.inclusions': '**',
      ' sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
    },
  },
  () => {}
);
