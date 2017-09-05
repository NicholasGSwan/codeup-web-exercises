(function(){
    $(document).ready(function() {
        $("dd").addClass("invisible");
        // $(".invisible").css("display", "none");
        $(".showInfo").click(function () {
            event.preventDefault();
            $("dd").toggleClass("invisible");
        });
        $("dt").click(function(){
            if ($(this).hasClass("highlighted") != true) {
                $("dt").removeClass("highlighted");
            }
            $(this).toggleClass("highlighted");
        });
        $("#ulHighlight").click(function(){
            $(".National-Parks").each(function(){
                $(this).children().last().toggleClass("highlighted");
            })
        });
        $("h3").click(function(){
            $(this).parent().children("li").toggleClass("bolded")

        });
        $("li").click(function(){
            $(this).parent().children("li").first().toggleClass("blueFont")
        })

    })
})();