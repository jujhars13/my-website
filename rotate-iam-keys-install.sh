#!/bin/bash
# to run
# curl -fsSL https://jujhar.com/rotate-iam-keys-install.sh -o rotate-install.sh && sudo bash rotate-install.sh

export download="aws-rotate-key-1.0.6-linux_amd64.zip"
if [[ "$OSTYPE" == "darwin"* ]]; then
    download="aws-rotate-key-1.0.6-darwin_amd64.zip"
fi

# download and install aws-rotate-key
curl -fsSL https://github.com/Fullscreen/aws-rotate-key/releases/download/v1.0.6/${download} -o "${download}"
unzip "${download}"
chmod +x aws-rotate-key
mv aws-rotate-key /usr/local/bin/aws-rotate-key

# download and install our rotate script
curl -fsSL https://jujhar.com/rotate-iam-keys.sh -o rotate-iam-keys.sh
chmod +x rotate-iam-keys.sh
mv /tmp/rotate-iam-keys.sh "${HOME}"

# install into personal crontab
touch /var/log/rotate-iam-keys.log && sudo chmod 666 /var/log/rotate-iam-keys.log
echo "01 12 * * * AWS_SHARED_CREDENTIALS_FILE=${HOME}/.aws/credentials ${HOME}/rotate-iam-keys.sh &>/var/log/rotate-iam-keys.log" | crontab -
echo "Check /var/log/rotate-iam-keys.log occasionally"