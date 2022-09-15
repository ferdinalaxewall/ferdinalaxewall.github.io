$(document).ready(function(){
    $(".skill-button").click(function(){
        let skillAttr = $(this).attr("skill-attribute");

        $(".skill-wrapper img").each(function(){
            if ($(this).attr("skill-attribute") == skillAttr) {
                $(this).fadeIn();
            }else{
                $(this).fadeOut();
            }
        })

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".skill-wrapper img").fadeIn();
        }else{
            $(".skill-button").removeClass("active")
            $(this).addClass("active")
        }
    })
});