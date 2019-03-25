#!/bin/bash -e
cp -R files/web ${ROOTFS_DIR}/home/pi/web
cp files/web/etc/nginx/sites-available/robot ${ROOTFS_DIR}/etc/nginx/sites-available/robot
cp files/web/etc/nginx/sites-available/http-redirect ${ROOTFS_DIR}/etc/nginx/sites-available/http-redirect
ln -s /home/pi/web/etc/nginx/sites-available/robot ${ROOTFS_DIR}/etc/nginx/sites-enabled/robot
ln -s /home/pi/web/etc/nginx/sites-available/http-redirect ${ROOTFS_DIR}/etc/nginx/sites-enabled/http-redirect
rm ${ROOTFS_DIR}/etc/nginx/sites-enabled/default