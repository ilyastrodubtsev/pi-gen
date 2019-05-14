# Pi-gen for PiBot

## How to run build process
---
Recommend to build an image on the debian system
1. Install the necessary dependencies for pi-gen
    ```bash
    # apt-get install coreutils quilt parted qemu-user-static debootstrap zerofree zip dosfstools bsdtar libcap2-bin grep rsync xz-utils file git curl
    ```
1. Then just run the script build.sh
    ```bash
    # ./build.sh
    ```
    After executing the script, the assembled image will be located in the deploy folder.