$(document).ready(function(){
  $(".navBtn").hover(function(e){
    $(this).find("h5").css("color", "blue");
  },function(e){
    $(this).find("h5").css("color", "black");
  });

  $("#toTop").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });

  $("#toContact").click(function(){
    console.log($("#bg4").position().top);

    $("html, body").animate({ scrollTop: $("#bg4").position().top }, "slow");
    return false;
  });


  //FORM SUBMISSION
  webshim.activeLang('en');
  webshims.polyfill('forms');
  webshims.cfg.no$Switch = true;

  $('#theForm').on('submit', function(e) {
       e.preventDefault();

       var name = $('#name').val();

       var email = $('#email').val();

       var comments = $('#contactMessage').val();

       if(form[0].checkValidity()){
         $.ajax({
             url:'https://formspree.io/n.a.snyder@comcast.net',
             method:'POST',
             data:{
                 name:name,
                 _replyto:email,
                  email:email,
                 comments:comments,
                 _subject:'Website form submission',
             },
             dataType:"json",
             success:function() {
                 console.log('success');
                 $('#formThankYou').show();
                 $('#name').val('');
                 $('#email').val('');
                 $('#contactMessage').val('');
             }

         });
       } else{
         console.log("not valid");
         form.find(':submit').click();
       }
   });
});
