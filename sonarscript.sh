#!/bin/bash

print() {
    echo $1
}

install_dependencies() {
    print '=============INSTALLING....=============='
    brew update
    print '============INSTALLING DOCKER================='
    brew cask install docker
    sudo launchctl start docker
    sudo launchctl enable docker
    print '============DOCKER VERSION================='
    docker --version
    sleep 2
    print '============RUNNING SONARQUBE INSIDE DOCKER================='
    sudo docker run -d --name SonarQube -p 9000:9000 sonarqube
    sleep 2
    print '===========INSTALLING NODE================'
    brew install nodejs
    brew install npm
    npm -v
    node -v
    sleep 2
    print '============INSTALLING SONAR SCANNER================='
    cd $1/
    sudo npm install sonarqube-scanner
    sleep 5
}

setup_sonar_properties() {
    install_dependencies $4
    project_key=$1
    project_name=$2
    project_src=$3
    project_dir=$4

    echo "const sonarqubeScanner = require('sonarqube-scanner');
	sonarqubeScanner(
  	{
    	serverUrl: 'http://localhost:9000',
       	options: {
		'sonar.projectKey':'"${project_key}"',
		'sonar.projectName':'"${project_name}"',
		'sonar.sourceEncoding':'UTF-8',
		'sonar.javascript.file.suffixes':'.js,.jsx',
             	'sonar.sources': '"${project_src}"',
             	'sonar.inclusions' : '**', 
       		},
   	},
   	() => {},
	);
	" > ${project_dir}/sonar-project.js
print '==============CREATED SONAR-PROJECT FILE==============='
}

usage() {
    cat << EOM
    sh script.sh

        -k Project key.
        -n Project name.
        -s Project src folder.
        -d project path.
        -h help
        
    example:
        sh install.sh -k reactapp -n reactapp -s src -d /home/Projects/reactapp
EOM
}

while getopts 'k:n:s:d:h' OPTION; do
    case $OPTION in
        k)
            project_key=$OPTARG
            ;;
        n)
            project_name=$OPTARG
            ;;
        s)
            src=$OPTARG
            ;;
        d)
            project_dir=$OPTARG
            ;;
        h)  usage && exit 0
            ;;
    esac
done
if [ -z $project_key ] || [ -z $project_name ] || [ -z $src ] || [ -z $project_dir ];
    then
        usage
        exit 127;
    else
        setup_sonar_properties $project_key $project_name $src $project_dir
fi
