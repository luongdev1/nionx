/*
     *animate showItemDownToUp down to up

*/
// animate showItemDownToUp down to up
function checkScrollPosition() {
     // Chieu cao cua cua so trinh duyet
     var windowHeight = $(window).height();
     // vi tri scroll hien tai cua cua so
     var scrollPosition = $(window).scrollTop();
     // animate cho blog item page blog
     $(".blog-item").each(function () {
          // vi tri hien tai cua element
          const elementTop = $(this).offset().top;
          if (scrollPosition + windowHeight > elementTop + 50) {
               $(this).addClass("showItemDownToUp").removeClass("hidden");
          }
     });

     // animate cho logo footer
     const logoFooter = $(".footer-heading .logo")
     const logoFooterElementTop = logoFooter.offset().top
     if (scrollPosition + windowHeight > logoFooterElementTop) {
          $(logoFooter).addClass("showItemDownToUp").removeClass("hidden")
     }
     // animate cho icon social
     $(".footer-social li").each(function () {
          const elementTop = $(this).offset().top;
          if (scrollPosition + windowHeight > elementTop) {
               $(this).addClass("showItemDownToUp").removeClass("hidden")
          }
     })
     // animate footer infor
     $(".footer-information ul").each(function () {
          const elementTop = $(this).offset().top;
          if (scrollPosition + windowHeight > elementTop) {
               $(this).addClass("showItemDownToUp").removeClass("hidden")
          }
     })
     // animate cho send mail footer
     const sendMail = $(".footer-sendMail")
     const sendMailElTop = logoFooter.offset().top
     if (scrollPosition + windowHeight > sendMailElTop) {
          $(sendMail).addClass("showItemDownToUp").removeClass("hidden")
     }
}

function animateBlogDetails() {
     // Chieu cao cua cua so trinh duyet
     var windowHeight = $(window).height();
     // vi tri scroll hien tai cua cua so
     var scrollPosition = $(window).scrollTop();
     // animate cho blog details img
     const imgBlogDetails = $(".blog-container .blog-content .warap-img")
     const imgBlogDetailEleTop = imgBlogDetails.offset().top
     if (scrollPosition + windowHeight > imgBlogDetailEleTop) {
          $(imgBlogDetails).addClass("showItemLeftToRight").removeClass("hidden")
     }
     // animate cho content blog details
     $(".animate-text-1").each(function () {
          const elementTop = $(this).offset().top;
          if (scrollPosition + windowHeight > elementTop) {
               $(this).addClass("showItemLeftToRight").removeClass("hidden")
          }
     })
     // animate cho right blog details
     $(".animate-item--right").each(function () {
          const elementTop = $(this).offset().top;
          var startDuration = 1000; // Thời gian bắt đầu (1s)
          var durationIncrement = 200; // Bước tăng (0.2s)
          var currentDuration = startDuration;
          if (scrollPosition + windowHeight > elementTop) {
               $(this).css({
                    'animation-duration': currentDuration / 1000 + 's'
               }).addClass("showItemRightToLeft").removeClass("hidden")
               currentDuration += durationIncrement;
          }
     })
}


// wait dome
$(document).ready(function () {
     // animate showItemDownToUp down to up
     var currentUrl = window.location.href;
     if (currentUrl.includes("blog_details.html")) {
          animateBlogDetails();
     }
     // home
     checkScrollPosition();

     $(window).scroll(function () {
          if (currentUrl.includes("blog_details.html")) {
               animateBlogDetails();
          }
          checkScrollPosition();
     });

});