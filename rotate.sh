#!/bin/bash
# install https://github.com/Fullscreen/aws-rotate-key/
# AWS IAM key rotator and set it up in your personal crontab 
# to run every day at midday
#
# jujhars13 2019-05-28
# 
# to run:
# curl -sL https://jujhar.com/rotate.sh | sudo bash -
# 
# deps: bash, curl, shasum and unzip

set -euo pipefail

export download="aws-rotate-key-1.0.6-linux_amd64.zip"
shaSum="bf2271a370477f48240f7fcf0cdb27fdd962eba0  aws-rotate-key" # 2019-05-28
if [[ "$OSTYPE" == "darwin"* ]]; then
    download="aws-rotate-key-1.0.6-darwin_amd64.zip"
    shaSum="d5441e8ad0ff43b9f04e37e2023112155418e68c  aws-rotate-key" # 2019-05-28
fi

echo "Download and install ${download} binary from github" 
curl -fsSL https://github.com/Fullscreen/aws-rotate-key/releases/download/v1.0.6/${download} -o "${download}"
unzip -u "${download}"
echo "Check file checksums to ensure it not been modified"
if ! echo "${shaSum}" | shasum --check -; then 
    >&2 echo "File hashes do not match, call security!"
    exit 99
fi
chmod +x aws-rotate-key
mv aws-rotate-key /usr/local/bin/aws-rotate-key

echo "Download and install our rotate script"
curl -fsSL https://jujhar.com/rotate-iam-keys.sh -o rotate-iam-keys.sh
chmod +x rotate-iam-keys.sh
mv rotate-iam-keys.sh "${HOME}" || true

# get the username of the person calling sudo, otherwise you end up with root
local_user=$(logname)
echo "Append into ${local_user} personal crontab"
# As we're running as sudo we have to take extra steps to install into the calling user's
# crontab and not root's crontab 
# @see https://stackoverflow.com/questions/1629605/getting-user-inside-shell-script-when-running-with-sudo
# NB if you get a "crontab: tmp/tmp.12216: Operation not permitted" type error on your mac it's because you don't have enough permissions
touch /var/log/rotate-iam-keys.log && chmod 666 /var/log/rotate-iam-keys.log
(crontab -u "$local_user" -l || true; echo "01 12 * * * AWS_SHARED_CREDENTIALS_FILE=${HOME}/.aws/credentials ${HOME}/rotate-iam-keys.sh > /var/log/rotate-iam-keys.log 2>&1") | \
crontab -u "$local_user" -

echo "" && echo "Installed, remember to check /var/log/rotate-iam-keys.log occasionally"