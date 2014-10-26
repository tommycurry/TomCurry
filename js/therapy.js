jQuery(document).ready(function($) {

// fades in icons
  $("#page_bg").animate({
    opacity:1,
  },2000, function(){
  $("#therapy_landing").animate({
      opacity:1,
    }, 1000);
  });

$(".therapy_menu_item").click(function(){
  $(".therapy_section").hide();
});

// next 3 move header text to top left
$(".therapy_menu_item").click(function(){
  $(".titles").addClass("small_titles", "1000");
});


$(".therapy_menu_item").click(function(){
  $("#therapy_title").addClass("small_menu_titles", "1000");
});

$(".therapy_menu_item").click(function(){
  $("#therapy-menu").addClass("therapy-menu-small", "1000");
});

$(".therapy_menu_item").click(function(){
  $("#therapy-menu").removeClass("therapy-menu-big");
});


// loads the content
$("#menu_tom").click(function(){
  $("#page_bg").animate({
    opacity:"0.5",
  },300, function(){
      $("body").animate({
        backgroundColor:"#2d0e1d",
        backgroundSize:"cover",
      },300, function(){
        $(".titles").animate({
          color:"#b4ad51",
        },300, function(){
      $("#about_tom").show().animate({
        opacity:1,
      },2000);
    });
  });
});
});

$("#menu_therapy").click(function(){
  $("#page_bg").animate({
    opacity:"0.5",
  },300, function(){
      $("body").animate({
        backgroundColor:"#d08c61",
        backgroundSize:"cover",
      },300, function(){
        $(".titles").animate({
          color:"#7b3a11",
        },300, function(){
      $("#music-therapy").show().animate({
        opacity:1,
      },2000);
    });
  });
});
});

$("#menu_more").click(function(){
  $("#page_bg").animate({
    opacity:"0.5",
  },300, function(){
      $("body").animate({
        backgroundColor:"#e9c75b",
        backgroundSize:"cover",
      },300, function(){
        $(".titles").animate({
          color:"#a7851a",
        },300, function(){
      $("#more_therapy").show().animate({
        opacity:1,
      },1000);
    });
  });
});
});

// closes menu on click
$(".therapy_menu_item").click(function(){
  $(".collapse").collapse('hide');
});


});
