#!/bin/bash

export download="aws-rotate-key-1.0.6-linux_amd64.zip"
if [[ "$OSTYPE" == "darwin"* ]]; then
    download="aws-rotate-key-1.0.6-darwin_amd64.zip"
fi

# download and install aws-rotate-key
wget https://github.com/Fullscreen/aws-rotate-key/releases/download/v1.0.6/${download}
unzip "${download}"
chmod +x aws-rotate-key
mv aws-rotate-key /usr/local/bin/aws-rotate-key

# download and install our rotate script
chmod +x rotate-iam-keys.sh
wget https://jujhar.com/rotate-iam-keys.sh
mv rotate-iam-keys.sh "${HOME}"

# install crontab
touch /var/log/rotate-iam-keys.log && sudo chmod 666 /var/log/rotate-iam-keys.log
echo "01 12 * * * AWS_SHARED_CREDENTIALS_FILE=${HOME}/.aws/credentials ${HOME}/rotate-iam-keys.sh &>/var/log/rotate-iam-keys.log" | crontab -
echo "Check /var/log/rotate-iam-keys.log occasionally"
