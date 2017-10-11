$(document).ready(function(){
  $(".navBtn").hover(function(e){
    $(this).find("h5").css("color", "blue");
  },function(e){
    $(this).find("h5").css("color", "black");
  });


  //Animate home/contact scrolling
  $("#toTop").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });

  $("#toContact").click(function(){
    $("html, body").animate({ scrollTop: $("#bg4").position().top }, "slow");
    return false;
  });


  //Setup image modal
  $('#imgModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var imgFolderURL = button.data('imgfolderurl');
    var title = $(button).text();
    var modal = $(this);

    modal.find('#galleryTitle').text(title);
    modal.find('#carouselImg1').attr("src", imgFolderURL + "img1.jpg");
    modal.find('#carouselImg2').attr("src", imgFolderURL + "img2.jpg");
    modal.find('#carouselImg3').attr("src", imgFolderURL + "img3.jpg");
    modal.find('#carouselImg4').attr("src", imgFolderURL + "img4.jpg");
  });


  //FORM SUBMISSION
  $('#theForm').on('submit', function(e) {
       e.preventDefault();

       var form = $("#theForm");

       var name = $('#name').val();

       var email = $('#email').val();

       var comments = $('#contactMessage').val();

       if(form[0].checkValidity()){
         $.ajax({
             url:'https://formspree.io/stevestroetzel@yahoo.com',
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
