#!/bin/bash -e

on_chroot <<EOF
python3 -m pip install pip --upgrade
python3 -m pip install python-networkmanager
python3 -m pip install aiohttp
EOF
#${ROOTFS_DIR}/usr/bin/python3.5 -m pip install pip --upgrade
#${ROOTFS_DIR}/usr/bin/python3.5 -m pip install python-networkmanager
#${ROOTFS_DIR}/usr/bin/python3.5 -m pip install aiohttp