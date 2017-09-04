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
        })
    })
})();