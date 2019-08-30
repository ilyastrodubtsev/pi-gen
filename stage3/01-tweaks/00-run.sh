#!/bin/bash -e

rm -f "${ROOTFS_DIR}/etc/systemd/system/dhcpcd.service.d/wait.conf"
sed -i "19a\amixer -c 1 cset name='Input Mux', 'Mic'" ${ROOTFS_DIR}/etc/rc.local
