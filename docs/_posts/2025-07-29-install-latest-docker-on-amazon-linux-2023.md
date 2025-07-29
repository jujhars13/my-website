---
layout: default
---

## Install the latest Docker version on Amazon Linux 2023

Why does AmazonLinux 2023 only ship with an ancient version of Docker in their Linux repos?  Wouldn't like half their workloads run on Docker?

Anyway thanks to [this dude](https://repost.aws/questions/QU1jeKaTRYQ7WeA7XobfP21g/how-do-i-install-docker-version-27-3-1-on-amazon-linux-2023) here's a quick fix:


```bash
sudo dnf update -y
# Remove old version if installed
sudo dnf remove -y docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine

# Install dnf plugin
sudo dnf -y install dnf-plugins-core

# Add CentOS repository
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

# Adjust release server version in the path as it will not match with Amazon Linux 2023
sudo sed -i 's/$releasever/9/g' /etc/yum.repos.d/docker-ce.repo

# Install as usual
sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Enable the docker service
sudo systemctl enable --now docker
```