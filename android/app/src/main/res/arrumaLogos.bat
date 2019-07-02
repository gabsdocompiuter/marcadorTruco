DEL *round.png /s

COPY hdpi.png    mipmap-hdpi\ic_launcher.png    /y
COPY mdpi.png    mipmap-mdpi\ic_launcher.png    /y
COPY xhdpi.png   mipmap-xhdpi\ic_launcher.png   /y
COPY xxhdpi.png  mipmap-xxhdpi\ic_launcher.png  /y
COPY xxxhdpi.png mipmap-xxxhdpi\ic_launcher.png /y

COPY mipmap-hdpi\ic_launcher.png    mipmap-hdpi\ic_launcher_round.png
COPY mipmap-mdpi\ic_launcher.png    mipmap-mdpi\ic_launcher_round.png
COPY mipmap-xhdpi\ic_launcher.png   mipmap-xhdpi\ic_launcher_round.png
COPY mipmap-xxhdpi\ic_launcher.png  mipmap-xxhdpi\ic_launcher_round.png
COPY mipmap-xxxhdpi\ic_launcher.png mipmap-xxxhdpi\ic_launcher_round.png

DEL *.png