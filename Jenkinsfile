pipeline {
	agent {
		docker {
			image 'ruby:2.4.1'
		}
	}
	stages {
		stage('Install Requirements') {
			steps {
				sh 'gem install bundler -v 1.17.3'
				sh 'bundle install'
			}
		}
		stage('Build') {
			steps {
				sh 'bundle exec jekyll build'
			}
		}
		stage('Versioning') {
			steps {
				sh "mkdir -p _site/version"
				sh "echo $GIT_COMMIT > _site/version/index.html"
			}
		}
		stage('Upload') {
			steps {
				withAWS(credentials: 'bryanchug-aws-jenkins-deployer') {
					s3Upload(
							bucket: 'www.fscosmetics.com',
							includePathPattern: '**/*',
							workingDir: '_site'
					)
				}
			}
		}
	}
}
