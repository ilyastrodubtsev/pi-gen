#!/bin/bash -e
cp -R files/PiBot/Software/pi/lib/ ${ROOTFS_DIR}/
cp -R files/PiBot/Software/pi/opt/ ${ROOTFS_DIR}/
cp files/wifi-connect.service ${ROOTFS_DIR}/lib/systemd/system/
cp files/robot.service ${ROOTFS_DIR}/lib/systemd/system/
sh -c "echo "bcm2835-v4l2" >> ${ROOTFS_DIR}/etc/modules"
on_chroot <<EOF
ln -sv /lib/systemd/system/janus.service /etc/systemd/system/multi-user.target.wants/janus.service
ln -sv /lib/systemd/system/wifi-connect.service /etc/systemd/system/multi-user.target.wants/wifi-connect.service
ln -sv /lib/systemd/system/robot.service /etc/systemd/system/multi-user.target.wants/robot.service
EOF