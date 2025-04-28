GTK_BRANCH="gtk-4.0"
REPOSITORY="https://gitlab.gnome.org/GNOME/gtk.git"
TARGET_DIRECTORY="static/theme"

rm -rf $TARGET_DIRECTORY
mkdir -p $TARGET_DIRECTORY/tmp

git clone -b $GTK_BRANCH  $REPOSITORY $TARGET_DIRECTORY/tmp

cp -r $TARGET_DIRECTORY/tmp/gtk/theme/Adwaita/* $TARGET_DIRECTORY

rm -rf $TARGET_DIRECTORY/tmp
