phonegap-splashscreen-example
=============================

##### An example of generating app splash screens at various aspec-ratio for various devices with grunt

When building an application with phonegap splashscreens need to be generated with aspec-ratios to match each supported device. This repo is an example implementation using [grunt phonegapsplash](https://www.npmjs.org/package/grunt-phonegapsplash) to generate the set of splashscreens.

Installation
============

To install this example you need to ensure you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed. I have a quick [introduction to node and npm](http://crowdhailer.tumblr.com/post/84311910118/starting-with-node-js-and-npm) if you have not yet started with these.

This grunt plugin requires [GraphicsMagick](http://www.graphicsmagick.org/).

To install on OSX, use HomeBrew:

```
brew install graphicsmagick
```

If you are on Ubuntu or Linux Mint:

```
sudo apt-get install graphicsmagick
```

Clone this repo and change directory into it

```
git clone 

cd phonegap-icon-set
```

Make sure that you have the grunt command line tool installed, skip this step if you have it already

```
npm install -g grunt-cli
```

Install dependencies from npm

```
npm install
```

Usage
=====

- Make changes within canevas.svg, I recommend using inkscape. The canevas template includes outlines of all the screensizes. 
- After making changes hide the device outline layers. Access layer management with **SHIFT+CTRL+L**
- Export you SVG and a PNG using **SHIFT+CTRL+E**
- The generation of splashscreens is done by running the phonegapsplash task within grunt. Here it is also the default grunt task

```
grunt
//or
grunt phonegapsplash:all
```

Debug
=====

If GraphicsMagick is not installed the grunt task will throw the error. `>> spawn ENOENT`. check installation with `which gm`

Contributions
=============

Here are some additions I would like to add to grunt-phonegapsplash when I have the opportunity

1. Take svg file as source to skip export step. Use 'grunt-rasterize' as example 
