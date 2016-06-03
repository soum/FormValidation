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
      $(this).removeClass('red');
    }
  })
}

Form.prototype.errorMessage = function($obj, options) {
  var str = '',
  		$display = $obj.parent().find('p');
  
  if(!$display.length){
		str = $("<p>read from options object</p>").insertAfter($obj);
	}
	return str;
}

var form = new Form();
var options = {
  message: [{
  	"missingError" : "required field"
  }]
}
form.formValidate($('#profile'), options)
