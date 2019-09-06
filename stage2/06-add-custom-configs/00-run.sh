#!/bin/bash
cp -R files/pi/lib/ ${ROOTFS_DIR}/
cp -R files/pi/opt/ ${ROOTFS_DIR}/
cp files/wifi-connect.service ${ROOTFS_DIR}/lib/systemd/system/
cp files/robot.service ${ROOTFS_DIR}/lib/systemd/system/
cp files/check_internet.service ${ROOTFS_DIR}/lib/systemd/system/
cp files/avahi-pibot.service ${ROOTFS_DIR}/lib/systemd/system/
sh -c "echo "bcm2835-v4l2" >> ${ROOTFS_DIR}/etc/modules"
sed -i "19a\rm -R /etc/NetworkManager/system-connections/MyAccessPoint*" ${ROOTFS_DIR}/etc/rc.local
sed -i "19a\amixer -c 1 cset name='Input Mux', 'Mic'" ${ROOTFS_DIR}/etc/rc.local
sed -i "19a\amixer -c 1 sset Mic Capture cap" ${ROOTFS_DIR}/etc/rc.local
sed -i '$ai2c-dev' ${ROOTFS_DIR}/etc/modules
on_chroot <<EOF
ln -sv -f /lib/systemd/system/janus.service /etc/systemd/system/multi-user.target.wants/janus.service
ln -sv -f /lib/systemd/system/wifi-connect.service /etc/systemd/system/multi-user.target.wants/wifi-connect.service
ln -sv -f /lib/systemd/system/robot.service /etc/systemd/system/multi-user.target.wants/robot.service
ln -sv -f /lib/systemd/system/check_internet.service /etc/systemd/system/multi-user.target.wants/check_internet.service
ln -sv -f /lib/systemd/system/avahi_pibot.service /etc/systemd/system/multi-user.target.wants/avahi-pibot.service
EOF