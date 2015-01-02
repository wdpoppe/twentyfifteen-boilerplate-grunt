##Boilerplate for using Grunt in  Wordpress Twentyfifteen theme
===================

This  boilerplate theme for Wordpress is inspired by the great article [grunt-is-not-weird-and-hard](http://24ways.org/2013/grunt-is-not-weird-and-hard) from Chris Coyier, published on 24ways website in 2013. 



Based on this great article I've made a simple 3 step Grunt based Child theme boilerplate for Wordpress. Hopefully this wil improve your development in Wordpress.

In this example I considering that you've allready installed NodeJS, Grunt, Ruby and SASS and use the latest stable Wordpress(including Twentyfifteen). If not? No worrie. 

[Install Grunt](http://gruntjs.com/installing-grunt)  and [install nodejs](http://nodejs.org/)

###Installation in 3 simple steps

1. Download the source from Git in the themes directory located in the wp-content of your prefered webdev environment on your local machine.

2. Activate the Twentyfifteen theme and Twentyfifteen Child theme in the Wordpress backendinterface.

3. Open the terminal and type `grunt`. From now on you can edit and add styles instantly in the Child-theme of your Wordpress site.

###Some specs about the Child-theme
* style.scss: Basefile for making modifications to the theme. Write your syntax in SASS. 
* package.json/node_modules: grunt task runner consists of  `grunt-contrib-concat`, `grunt-contrib-uglify`, `grunt-contrib-imagemin`, `grunt-contrib-sass`, `grunt-contrib-watch`. 
* Gruntfiles.js; JS and Sass files will change automatically using `grunt-contrib-watch`.
