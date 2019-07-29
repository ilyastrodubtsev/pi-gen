#!/bin/bash -e

if [ ! -d "${ROOTFS_DIR}" ]; then
	copy_previous
fi

on_chroot <<EOF
apt-get clean
apt-get update 
apt-get upgrade
EOF