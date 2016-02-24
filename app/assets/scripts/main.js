// 'use strict';

// var config = require('./config');

// console.log.apply(console, config.consoleMessage);
// if (config.environment === 'staging') {
//   console.log('STAGING');
// }

//----------------------------//
//  Runs on Document Ready
//----------------------------//
$(document).ready(function(){
	var y = $(this).scrollTop();
	if (y > 500){
		$('header').fadeIn("duration:1").css('display', 'inline-block');
	};
});

//----------------------------//
//  Header scripts
//----------------------------//
$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 500){
		$('header').fadeIn().css('display', 'inline-block');
	} else {
		$('header').fadeOut();
	};
});