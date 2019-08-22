#!/bin/bash -e
cp -rp files/root/* ${ROOTFS_DIR}/
cp -R files/PiBot ${ROOTFS_DIR}/home/pi/
cp -rp files/python/* ${ROOTFS_DIR}/usr/local/lib/python3.7/dist-packages/
openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout ${ROOTFS_DIR}/opt/janus/share/janus/certs/device.key -out ${ROOTFS_DIR}/opt/janus/share/janus/certs/device.crt -subj /C=UN/ST=unknown/L=unknown/O=unknown/CN=unknown
mkdir -p ${ROOTFS_DIR}/home/pi/PiBot/Software/pi/ssl
openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout ${ROOTFS_DIR}/home/pi/PiBot/Software/pi/ssl/ssl.key -out ${ROOTFS_DIR}/home/pi/PiBot/Software/pi/ssl/ssl.crt -subj /C=UN/ST=unknown/L=unknown/O=unknown/CN=unknown
on_chroot <<EOF
sudo mv /usr/lib/arm-linux-gnueabihf/libboost_python27.so.1.67.0 /usr/lib/arm-linux-gnueabihf/libboost_python27.so.1.67.0copy
sudo ln -svf /usr/lib/arm-linux-gnueabihf/libboost_python3-py37.so /usr/lib/arm-linux-gnueabihf/libboost_python27.so.1.67.0
EOF

rm ${ROOTFS_DIR}/lib/arm-linux-gnueabihf/libboost_python27.so.1.67.0
cp ${ROOTFS_DIR}/lib/arm-linux-gnueabihf/libboost_python3-py37.so ${ROOTFS_DIR}/lib/arm-linux-gnueabihf/libboost_python27.so.1.67.0
