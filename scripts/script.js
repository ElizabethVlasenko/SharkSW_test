$("a.services-btn").hover(function() {
    $(this).parent(".services").children(".services-bg").addClass("services-bg-hover");
    $(this).parent(".services").children(".services-bg").children(".services-icon").addClass("services-icon-hover");
}, function() {
    $(this).parent(".services").children(".services-bg").removeClass("services-bg-hover");
    $(this).parent(".services").children(".services-bg").children(".services-icon").removeClass("services-icon-hover");
});