
function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
  }


  Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

  $(document).ready(function(){
      $("form#new-cont").submit(function(event){
        event.preventDefault();

          var inputFirstName = $("input#firstName").val();
          var inputLastName = $("input#lastName").val();
          
          var newContact =new Contact(inputFirstName,inputLastName);

          $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span><?li>");


          $("input#firstName").val();
          $("input#lastName") .val();

          $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
          }); 
      });
      
      
  });


  
  // business logic
