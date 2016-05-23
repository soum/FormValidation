'use strict'

//global variables


//class form
var Form = function(){}; 

Form.prototype.validateForm = function($form, options){
//accepts a form at a time
	$('input', $form).each(function(e){
  	this.validateItem($(this));
  })
}

Form.prototype.validateItem = function(obj){

	return obj
}

var form = new Form();
form.validateForm($('#profile'))