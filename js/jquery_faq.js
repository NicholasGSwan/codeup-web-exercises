(function(){
    $(document).ready(function() {
        var delay = 8000;
        //makes the dd's invisible
        $("dd").addClass("invisible");
        $("ul").hide();
        $(".register").hide();
        // $(".invisible").css("display", "none");
        // toggles the class invisible on the dd's
        $(".showInfo").click(function () {
            event.preventDefault();
            $("dd").toggleClass("invisible");
        });
        //highlights or un-highlights the dt's
        $("dt").click(function(){
            if ($(this).hasClass("highlighted") != true) {
                $("dt").removeClass("highlighted");
            }
            $(this).toggleClass("highlighted");
        });
        //highlights the last item in the unordered list
        $("#ulHighlight").click(function(){
            $(".National-Parks").each(function(){
                $(this).children().last().toggleClass("highlighted");
            })
        });
        //bolds the list items underneath the h3 clicked
        $("h3").click(function(){
            $(this).next().slideToggle();
            $(this).next().children("li").toggleClass("bolded")

        });
        //makes the first list item blue if any of the list items are clicked in a particular list.
        $("li").click(function(){
            $(this).parent().children("li").first().toggleClass("blueFont")
        });
        //click x to close the dialog box
        $(".close-dialog").click(function(){
            $(this).parent().hide()
            });
        var registerPopupDelay = setTimeout(function(){
            $(".register").fadeIn();
        }, delay);

    })
})();