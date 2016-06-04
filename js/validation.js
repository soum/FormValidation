window.onload=function(){
var Form = function() {};

Form.prototype.formValidate = function($form, options) {

  var self = this;
  $form.on('submit', function(e) {
    e.preventDefault();
    self.isEmpty($form, options);
  })

}

Form.prototype.isEmpty = function($form, options) {

  var self = this;
  $form.find(':input').each(function() {
    if ($(this).hasClass('required') && $(this).val() === '') {
      $(this).addClass('red');
      self.errorMessage($(this), options);
    } else {
      self.removeErrorMessage($(this));
    }
  })
  
}

Form.prototype.errorMessage = function(obj, options) {
  var str = '';
      $display = $(obj).parent().find('p'),
      diff = options.message[0].missingError;
  
  if(!$display.length){
    str = $('<p>' + diff + '</p>').insertAfter($(obj));
  }
  return str;
}

Form.prototype.removeErrorMessage = function(obj){
  $(obj).removeClass('red');
}

var form = new Form();

var options = {
  inputType: [
    { 
      type: "password",
      maxlength: 8,
      
    }
  ],
  message: [{
    missingError: "value is missing",
    password: "invalid password"
  }]
}

form.formValidate($('#profile'), options)

}