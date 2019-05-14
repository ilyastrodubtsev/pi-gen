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
    
## What has been added
---
All changes affected the stage2, the following folders were added:
* 04-add-custom-package-with-apt:
    All dependencies of the PiBot that can be installed from repositories
* 05-add-custom-package-with-build:
    Contains all the packages that need to be assembled before installation.
    * PiBot folder - Main project
    * python folder - Assembled library PiBot
    * root folder - Assembled Janus
* 06-add-custom-configs:
    Contains all autoload configs and modified Janus configs
* 07-add-web-module:
    Contains the collected site, and nginx configs