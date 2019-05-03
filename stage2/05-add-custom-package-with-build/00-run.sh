#!/bin/bash -e
cp -rp files/root/* ${ROOTFS_DIR}/
cp -R files/PiBot ${ROOTFS_DIR}/home/pi/
cp -rp files/python/* ${ROOTFS_DIR}/usr/local/lib/python3.5/dist-packages/