#!/bin/bash
# install Fullscreen's Go based AWS IAM key rotator and set it up in your personal crontab 
# to run every day at midday
#
# to run:
# curl -sL https://jujhar.com/rotate.sh | sudo bash -
# 
# deps: bash, curl and unzip

set -euo pipefail

export download="aws-rotate-key-1.0.6-linux_amd64.zip"
if [[ "$OSTYPE" == "darwin"* ]]; then
    download="aws-rotate-key-1.0.6-darwin_amd64.zip"
fi

echo "Download and install ${download} binary from github" 
curl -fsSL https://github.com/Fullscreen/aws-rotate-key/releases/download/v1.0.6/${download} -o "${download}"
unzip "${download}"
chmod +x aws-rotate-key
mv aws-rotate-key /usr/local/bin/aws-rotate-key

echo "Download and install our rotate script"
curl -fsSL https://jujhar.com/rotate-iam-keys.sh -o rotate-iam-keys.sh
chmod +x rotate-iam-keys.sh
mv rotate-iam-keys.sh "${HOME}" || true 

echo "Append into personal crontab"
touch /var/log/rotate-iam-keys.log && sudo chmod 666 /var/log/rotate-iam-keys.log
(crontab -l ; echo "01 12 * * * AWS_SHARED_CREDENTIALS_FILE=${HOME}/.aws/credentials ${HOME}/rotate-iam-keys.sh &>/var/log/rotate-iam-keys.log") | \
crontab -u "${USER}" -

echo "" && echo "Installed, remember to check /var/log/rotate-iam-keys.log occasionally"