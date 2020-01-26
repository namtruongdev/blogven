
$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('rotateInDownRight animated fast');
      }
    });

        $('.scroll-animations-2').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('lightSpeedIn animated fast');
        $(this).removeClass('hide');
      }
    });

  });
});


  // Activate hinge effect when h4 is click in last section
$(document).ready(function() {
  $('.slogan-container').hover(function() {
    $(".funky-animations").addClass('animated hinge slow').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(".funky-animations").removeClass('animated hinge slow');
      });
  });
});

// Sroll cho website
$(document).ready(function(){

  $('.subitem-toc a, .to-top a').click(function(){
    var targetElement = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
  });
});

// Toggle navigation for Mobile
// 
$(document).ready(function(){
  $(".bar-button").click(function(){
    $(".bar").toggleClass("hidden");
    $(".exit").toggleClass("hidden");
    $(".bar-button").toggleClass("effect-nav");
    $(".navigation-container").slideToggle("slow");
    $(".navigation-container ul li:nth-child(6)").css("display", "none");
    $(".navigation-container").css("display", "flex");
    $(".blure").fadeToggle("fast");
  });
});

$(document).ready(function() {

  $.ajaxSetup({ cache: false });

  $("#search").keyup(function() {
    $("#result").html('');
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");

    $.getJSON("https://laptrinhbanthan.com/api/search.json", function(data) {
      $.each(data, function(key, value) {

        if (searchField.length == 0) {
          $("#result").append('');
        }

        else if (value.title.search(expression) != -1 || value.image.search(
          expression) != -1 || value.author.search(expression) != -1 || value.date.search(expression) != -1 || value.excerpt.search(expression) != -1) {
          $("#result").append('<li class="list-group-item"><img src="https://laptrinhbanthan.com/assets/img/'+ value.image+'" style="width: 100%; max-width: 60px;" /> <h2><a href='+ value.url +' title="'+ value.title +'">'+ value.title +'</a></h2></li><hr class="squiggle">');
        }

      });
    });
  });
});

// Live box cho mobile
// 
$(document).ready(function() {

  $.ajaxSetup({ cache: false });

  $("#search-mb").keyup(function() {
    $("#result-mb").html('');
    var searchField = $("#search-mb").val();
    var expression = new RegExp(searchField, "i");

    $.getJSON("https://laptrinhbanthan.com/api/search.json", function(data) {
      $.each(data, function(key, value) {

        if (searchField.length == 0) {
          $("#result-mb").append('');
        }

        else if (value.title.search(expression) != -1 || value.image.search(
          expression) != -1 || value.author.search(expression) != -1 || value.date.search(expression) != -1 || value.excerpt.search(expression) != -1) {
          $("#result-mb").append('<li class="list-group-item"><img src="https://laptrinhbanthan.com/assets/img/'+value.image+'" style="width: 100%; min-width: 125px;max-width: 125px;" /> <h2><a href='+ value.url +' title="'+ value.title +'">'+ value.title +'</a></h2></li>');
        }

      });
    });
  });
});


$(document).ready(function() {
  $(".search-button").click(function() {
    $(".sear").toggleClass("hidden");
    $(".exit-2").toggleClass("hidden");
    $(".live-search-mb").slideToggle("slow");

  });
});


// Viet chuc nang cho control panel
$(document).ready(function() {
  $(".button-control").click(function() {
    $(this).hide();
    $(".control-panel").css({"width": "100%", "overflow-y":"auto"});
    $(".blure-control").fadeIn("fast");
  });

  $(".exit-ctrl").click(function() {
    $(".control-panel").css({"width": "0","overflow-y":"hidden"});
    $(".button-control").show();
    $(".blure-control").fadeOut("slow");
  });

});

$(document).ready(function() {
  $("#ctrol-cl-1").click(function() {
    $("#caret-1").toggleClass("rotat");
    $(".content-des-1").slideToggle();
  });

    $("#ctrol-cl-2").click(function() {
    $("#caret-2").toggleClass("rotat");
    $(".content-des-2").slideToggle();
  });

    $(".on-off").click(function() {
      $(".toggle").toggleClass("left-0");
      $(this).toggleClass("backgrond-change");
      $(".toggle").toggleClass("on-off-pos");
      if ($(".toggle").hasClass("on-off-pos")) {
       setCookie("darkStatus", "yes", 30);
            $("body,.tb-post tr:nth-child(even)").css("background","var(--darkbg)");
     $(".main-wrap").css("background", "var(--darkbg-main)");
     $(".post-article, .archive-list a, .cate-seo-title").css("color", "var(--darkcl)");
     $("img").css("opacity", ".75");
     $(".tools-container div h2, .tools-list li a, .categories-container div h2, .archive-container div h2").css("color", "var(--darkcl)");
     $(".post-article p a, .tags, #relatedTitle").css({"color": "rgb(28, 86, 63, .87)", "background":"transparent"});
     $(".container-1140 ul li a, .cate a, .hero-title-wrap h1 a,.time-post, .read-time").css("color", "var(--darkcl)");
     $(".li-search input").css("background-color", "var(--darkcl)");
     $(".header-wrap").css({"background": "var(--darkbg-main)"});
     $(".nav-container").css({"background": "transparent"});
     $(".post-author-container span time").css("color", "var(--darkcl-3)");
     $(".danger").css({"background": "rgba(255, 221, 221,.87)", "color":"#121212"});
     $(".success").css({"background": "rgba(221, 255, 221,.87)", "color":"#121212"});
     $(".info").css({"background": "rgba(231, 243, 254,.87)", "color":"#121212"});
     $(".warning").css({"background": "rgba(255, 255, 204,.87)", "color":"#121212"});
     $(".tools-list li").css("background", "var(--darkbg-main-2)");
     $(".highlight").css("background", "var(--darkbg-main-2)");
     $(".hero-excerpt-container").css("background", "var(--darkbg-main)");
     $(".container-1140").css("border-bottom", "1px solid rgba(255,255,255,.1)");
     $(".hero-excerpt-container h1 a, .post-excerpt-container h2 a").css("color", "var(--darkcl)");
     $(".hero-excerpt-container p, .post-excerpt-container p").css("color", "var(--darkcl-2)");
     $(".hero-author-container span a, .hero-author-container span time, .post-author-container span a").css("color", "var(--darkcl-3)");
     $(":root").css({"--transparentcl":"rgb(28, 86, 63, .87)","--lightbg-main-3":"#262626","--beforebg-hero":"#1a1a1a","--beforebg": "#121212", "--beforebg-main": "#1a1a1a", "--lightbg-main-2":"#262626", "--lightcl":"rgba(255,255,255,.87)", "--lightbg-main":"#262626"});
     $(".categories-list li a").css({"background":"var(--darkbg-main-2)", "color":"var(--darkcl)"});
     $(".archive-list li a, .archive-list li,.slogan-container, th").css("color", "var(--darkcl)");
     $(".post-article h2,.post-article h3").css({"color":"var(--darkcl)", "border-bottom-color":"var(--darkcl-2)"});
     $(".fb-comments").attr("data-colorscheme", "dark");
     $(".tb-post th").css("background", "rgba(138, 33, 36, .87)");
     $(".tb-post td,.tb-post th").css("border", "1px solid var(--darkcl-2)");
      }
      else {
        setCookie("darkStatus", "no", 30);
     $("body").css("background","var(--lightbg)");
     $(".main-wrap").css("background", "#fff");
     $(".post-article, .archive-list a").css("color", "#222");
     $(".tb-post tr:nth-child(even)").css("background", "#f2f2f2");
     $("img").css("opacity", "1");
     $(".tb-post td, .tb-post th").css("border", "1px solid #ddd");
     $(".container-1140 ul li a, .cate a, .hero-title-wrap h1 a,.time-post, .read-time").css("color", "var(--lightcl)");
     $(".tools-container div h2, .tools-list li a, .categories-container div h2, .archive-container div h2").css("color", "#fff");
     $(".post-article p a, .tags, #relatedTitle").css({"color": "transparent", "background":"linear-gradient(to right,#240b36,#c31432)", "background-clip":"text","-webkit-background-clip":"text"});
     $(".li-search input").css("background-color", "#fff");
     $(".header-wrap").css({"background": "var(--bg)"});
     $(".nav-container").css({"background": "var(--primary-navigation-background-color)"});
     $(".danger").css({"background": "rgba(255, 221, 221,1)", "color":"#000"});
     $(".success").css({"background": "rgba(221, 255, 221,1)", "color":"#000"});
     $(".info").css({"background": "rgba(231, 243, 254,1)", "color":"#000"});
     $(".warning").css({"background": "rgba(255, 255, 204,1)", "color":"#000"});
     $(".tools-list li").css("background", "var(--lightbg-main-2)");
     $(".highlight").css("background", "#f0f0f0");
     $(".container-1140").css("border-bottom", "none)");
     $(".post-author-container span time").css("color", "#9b9b9b");
     $(":root").css({"--transparentcl":"transparent","--lightbg-main-3":"#240b36","--beforebg": "#fff3ba", "--beforebg-main": "#fff", "--lightbg-main-2":"#131e25", "--lightcl":"rgba(255,255,255,1)", "--lightbg-main":"#fff"});
     $(".categories-list li a").css({"background":"#131e25", "color":"#fff"});
     $(".hero-title-wrap h1 a, .cate a, .cate-seo-title").css("color", "#fff");
     $(".post-article h2,.post-article h3").css({"color":"#000", "border-bottom-color":"#444"});
     $(".fb-comments").attr("data-colorscheme", "light");
     $(".tb-post th").css("background", "rgba(138, 33, 36, 1)");
      }
    });
});



(function($) {
  
  function mediaSize() { 
    /* Set the matchMedia */
    if (window.matchMedia('(min-width: 1010px)').matches) {
    /* Changes when we reach the min-width  */
      $('.navigation-container').css('display', 'block');
      $(".li-search").css('display', 'flex');
      $(".live-search-mb").css('display', 'none');


    } else {
    /* Reset for CSS changes – Still need a better way to do this! */
    $(".li-search").css('display', 'none');
    $('.navigation-container').css('display', 'none');
    $(".live-search-mb").css('display', 'none');
    $(".bar").removeClass("hidden");
    $(".exit").addClass("hidden");
    $(".bar-button").removeClass("effect-nav");
    $(".blure").css("display", "none");
    $(".sear").removeClass("hidden");
    $(".exit-2").addClass("hidden");
    }
  };
  
  /* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
  window.addEventListener('resize', mediaSize, false);  
  
})(jQuery);

$(document).ready(function() {

  var lastScrollTop = 0;
$(window).scroll(function(){
  var st = $(this).scrollTop();
  var ctrl = $('.button-control');
  var toTop = $('.to-top');
  setTimeout(function(){
    if (st > lastScrollTop){
      ctrl.addClass('transform-control');
    } else {
      ctrl.removeClass('transform-control');
    }
    lastScrollTop = st;
  }, 100);
});
});

// Acitve lazy load imgae
document.addEventListener("DOMContentLoaded", function() {
  yall({
    observeChanges: true
  });
});

// $(window).on('load',function() {
//   $(".container-load").delay(2000).fadeOut("slow");
// });

$(document).ready(function() {
  $('.post-container').jscroll({
    contentSelector: ".post-container",
    nextSelector: '.next',
    loadingHtml: '<img class="load-post" src="assets/img/rubik.gif">'
});
});

// Seting va get cookie cho giao dien dark mode
// 
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var checkDark=getCookie("darkStatus");
  if (checkDark == "yes") {
     $("body,.tb-post tr:nth-child(even)").css("background","var(--darkbg)");
     $(".main-wrap").css("background", "var(--darkbg-main)");
     $(".post-article, .archive-list a, .cate-seo-title").css("color", "var(--darkcl)");
     $("img").css("opacity", ".75");
     $(".container-1140 ul li a, .cate a, .hero-title-wrap h1 a,.time-post, .read-time").css("color", "var(--darkcl)");
     $(".tools-container div h2, .tools-list li a, .categories-container div h2, .archive-container div h2").css("color", "var(--darkcl)");
     $(".post-article p a, .tags, #relatedTitle").css({"color": "rgb(28, 86, 63, .87)", "background":"transparent"});
     $(".li-search input").css("background-color", "var(--darkcl)");
     $(".header-wrap").css({"background": "var(--darkbg-main)"});
     $(".nav-container").css({"background": "transparent"});
     $(".post-author-container span time").css("color", "var(--darkcl-3)");
     $(".danger").css({"background": "rgba(255, 221, 221,.87)", "color":"#121212"});
     $(".success").css({"background": "rgba(221, 255, 221,.87)", "color":"#121212"});
     $(".info").css({"background": "rgba(231, 243, 254,.87)", "color":"#121212"});
     $(".warning").css({"background": "rgba(255, 255, 204,.87)", "color":"#121212"});
     $(".tools-list li, .highlight").css("background", "var(--darkbg-main-2)");
     $(".hero-excerpt-container").css("background", "var(--darkbg-main)");
     $(".container-1140").css("border-bottom", "1px solid rgba(255,255,255,.1)");
     $(".hero-excerpt-container h1 a, .post-excerpt-container h2 a").css("color", "var(--darkcl)");
     $(".hero-excerpt-container p, .post-excerpt-container p").css("color", "var(--darkcl-2)");
     $(".hero-author-container span a, .hero-author-container span time, .post-author-container span a").css("color", "var(--darkcl-3)");
     $(":root").css({"--transparentcl":"rgb(28, 86, 63, .87)","--lightbg-main-3":"#262626","--beforebg-hero":"#1a1a1a","--beforebg": "#121212", "--beforebg-main": "#1a1a1a", "--lightbg-main-2":"#262626", "--lightcl":"rgba(255,255,255,.87)", "--lightbg-main":"#262626"});
     $(".categories-list li a").css({"background":"var(--darkbg-main-2)", "color":"var(--darkcl)"});
     $(".archive-list li a, .archive-list li, .slogan-container, th").css("color", "var(--darkcl)");
     $(".post-article h2,.post-article h3").css({"color":"var(--darkcl)", "border-bottom-color":"var(--darkcl-2)"});
     $(".on-off").addClass("backgrond-change");
     $(".toggle").addClass("on-off-pos");
     $(".toggle").removeClass("left-0");
     $(".tb-post td, .tb-post th").css("border", "1px solid var(--darkcl-2)");
     $(".tb-post th").css("background", "rgba(138, 33, 36, .87)");
     $(".fb-comments").attr("data-colorscheme", "dark");

   } 
      else {
     console.log("Chế độ tối đã bị tắt!");
     }
}
