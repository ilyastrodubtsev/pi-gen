#!/bin/bash -e
cp -R files/web ${ROOTFS_DIR}/home/pi/web
cp files/web/etc/nginx/sites-available/robot ${ROOTFS_DIR}/etc/nginx/sites-available/robot
ln -s /home/pi/web/etc/nginx/sites-available/robot ${ROOTFS_DIR}/etc/nginx/sites-enabled/robot
rm ${ROOTFS_DIR}/etc/nginx/sites-enabled/default