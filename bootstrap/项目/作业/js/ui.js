$(document).ready(function () {
    var headerLi= $("header   .navbar-left>ul>li");
    console.log(headerLi);
    
    headerLi.each(function (index) {
        $(this).click(function () {
            headerLi.removeClass("active");
            headerLi.eq(index).addClass("active");
        });
    });
});