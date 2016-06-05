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

        self.errorMessage($(this), options);

      } else {
        self.removeErrorMessage($(this));
      }
    })
    
  }

  Form.prototype.errorMessage = function(obj, options) {

    var $display = $(obj).parent().find('p'),
        diff = options.message[0].missingError;
    
    if(!$display.length){
      $('<p>' + diff + '</p>').insertAfter($(obj));
      this.removeErrorMessage(obj);
    }

  }

  Form.prototype.removeErrorMessage = function(obj){

    if($(obj).val() !== ''){
      $(obj).removeClass('red');
    }else{
      $(obj).addClass('red');
    }
    
    $(obj).on('keyup', function(){
      if($(obj).val() !== ''){
        $(obj).parent().find('p').remove();
        $(obj).removeClass('red');
      }
    })
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