# Image resizing

This Gulp file will resize and optimize all images that you run through it.

## How to install

1. [Install Node.js](http://nodejs.org "Node.js"). You only ever have to do this once.

2. Open the Terminal app. (You should check out [iTerm 2](http://www.iterm2.com/#/section/home "iTerm 2") for Mac. PC users should try [Console 2](http://sourceforge.net/projects/console/ "Console 2")

3. Now we change directory to this folder Type `cd ` (with a space) the drag this 'resize-test' folder next to it. Hit return.

4. Type `npm install` and Node will magically install everything you need. Well, almost.

5. Install *Homebrew* so that you can get the image resizing app. 
- Paste this into the terminal:
```
ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Now paste this to install *Image Magick*:

`brew install -g imagemagick`

Gulp will use Image Magick to quickly convert all your images.

## How to use