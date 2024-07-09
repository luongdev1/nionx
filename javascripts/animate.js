/*
     *handle add animate
     *page blog 1
     *page blog details
     *wait dom
*/

//function Add animate
function handleAddAnimate(queryItem, classAnimate) {
     // Chieu cao cua cua so trinh duyet
     const windowHeight = $(window).height();
     // vi tri scroll hien tai cua cua so
     const scrollPosition = $(window).scrollTop();
     // gia tri ban dau
     const startDuration = 1000; // Thời gian bắt đầu (1s)
     const durationIncrement = 200; // Bước tăng (0.2s)
     let currentDuration = startDuration; //thoi gian hien tai
     // vong lap
     $(queryItem).each(function () {
          const elementTop = $(this).offset().top; //vi tri cua element tu cua so trinh duyet toi vi tri hien tai
          if (scrollPosition + windowHeight > elementTop) { //kiem tra phan tu vua di qua cua so duoi cua man hinh
               $(this).css({
                    'animation-duration': currentDuration / 1000 + 's',
               }).removeClass("hidden").addClass(classAnimate)
               currentDuration += durationIncrement;
          } else {
               $(this).addClass("hidden").removeClass(classAnimate)
          }
     })
}

// page blog 1
function animatePageBlog1() {
     // animate cho blog item page blog
     handleAddAnimate(".blog-item", "showItemDownToUp")
     // animate cho logo footer
     handleAddAnimate(".footer-heading .logo", "showItemDownToUp")
     // animate cho icon social
     handleAddAnimate(".footer-social li", "showItemDownToUp")
     // animate footer infor
     handleAddAnimate(".footer-information ul", "showItemDownToUp")
     // animate cho send mail footer
     handleAddAnimate(".footer-sendMail", "showItemDownToUp")
}

// page details
function animatePageBlogDetails() {
     // left
     handleAddAnimate(".animate-leftToRight", "showItemLeftToRight")
     handleAddAnimate(".animate-item--right", "showItemRightToLeft")

     // footer
     // animate cho logo footer
     handleAddAnimate(".footer-heading .logo", "showItemDownToUp")
     // animate cho icon social
     handleAddAnimate(".footer-social li", "showItemDownToUp")
     // animate footer infor
     handleAddAnimate(".footer-information ul", "showItemDownToUp")
     // animate cho send mail footer
     handleAddAnimate(".footer-sendMail", "showItemDownToUp")
}
// page blog sidebar

function animatePageBlogSidebar() {
     handleAddAnimate(".animate-leftToRight", "showItemLeftToRight")
     handleAddAnimate(".animate-item--right", "showItemRightToLeft")
}

// wait dom
$(document).ready(function () {
     // get current url
     var currentUrl = window.location.href;
     // run animate
     function runAnimate() {
          // dung trang moi show aniamte
          switch (true) {
               case currentUrl.includes("blog_details.html"): //page details
                    animatePageBlogDetails();
                    break;
               case currentUrl.includes("blog_sidebar.html"): //page details
                    animatePageBlogDetails();
                    break;
               default: //page home
                    animatePageBlog1()
                    break;
          }
     }
     // reload page add animate
     runAnimate()
     // scroll add animate
     $(window).scroll(function () {
          runAnimate()
     });

});