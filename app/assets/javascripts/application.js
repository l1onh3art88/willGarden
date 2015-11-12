// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery-ui
//= require bootstrap

var ready;
ready = function(){
  
      var clicks = true;

  $("#hamburger").click(function(){   
    if(clicks){
      $(".navmenu").slideDown("slow", function(){
//         $(".photo-grid").animate({right: "15%"}, "slow");
      });   
      clicks= false;
    }
    else{
       $(".navmenu").slideUp("slow", function(){                 
//          $(".photo-grid").animate({right: "0%"}, "slow"); 
         clicks=true;  
       });
    }                        
  });
  //Lightbox Stuff--------------------------------------------------
  
  var $image = $("<img>");
  var $overlay = $("<div class='overlay'></div>")
  $overlay.append($image);
  $("body").append($overlay);
  $('.photocell img').click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("src");
    //Update overlay with the image linked in the link
    $image.attr("src",imageLocation);
    
    $overlay.show();
  })
  $overlay.click(function(){
    $overlay.hide();
    
  })
//Writing Page
 //Appends Writing to Container
  var $writingTitle=$("<h3></h3>")
  var $writing = $("<p></p>")
  $(".writing").append($writing);
  $(".writing").append($writingTitle);
  $(".writingThumb").click(function(event){
    event.preventDefault();
    var writingLocation=$(this).html();
    //Updates paragraph per thumbnail selected
    $($writing).html(writingLocation);
    
  });
 $(".carouselLogo").click(function(){
   $(".photo-grid").toggle(2);
   $(".carouselPhoto").toggle(2);
 })
  
};
$(document).ready(ready);
$(document).on('page:load', ready);