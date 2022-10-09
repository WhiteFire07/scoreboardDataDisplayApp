#!/bin/bash

# Replace this with host url
PANEL_DISPLAY_URL=http://192.168.1.174:3000

apt update
apt-get install -y chromium-browser unclutter

cat <<EOF >/etc/xdg/lxsession/LXDE-pi/autostart
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@xscreensaver -no-splash
@xset s off
@xset -dpms
@xset s noblank
@unclutter -root
@chromium-browser --noerrdialogs --disable-infobars --kiosk ${PANEL_DISPLAY_URL}
EOF
