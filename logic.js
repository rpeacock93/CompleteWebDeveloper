
$("#headshot").hover(function() {
    if($(this).css("border-radius") == "50%") {
        $(this).animate({borderRadius: "0%",
        }, 200)
    } else {
        $(this).animate({borderRadius: "50%",
        }, 200)
    }

})

$("#refresh").click(function() {
    location.reload();
})

$("#title").hover(function() {
    if($(this).hasClass("drop-shadow")) {
        $(this).removeClass("drop-shadow")
        $(this).addClass("outline")
        $(this).animate({fontWeight: "bolder",
            fontSize: "60px",
            paddingLeft: "20px"}, 500)
    } else {
        $(this).animate({fontWeight: "bold",
            fontSize: "50px",
            paddingLeft: "45px"}, 500)
            $(this).removeClass("outline")
            $(this).addClass("drop-shadow")
    }
    
})

$("#git-logo").hover(function() {
    if($(this).css("width") == "100px") {
        $(this).animate({width: "120px",
                         marginTop: "-25px"}, 200)
    } else {
        $(this).animate({width: "100px",
                         marginTop: "-8px"}, 200)
    }
    
    
})


$("#code-title").click(function() {
    if($(this).css("font-size") == "40px") {
        $(this).animate({fontSize: "50px"}, 200)
    } else {
        $(this).animate({fontSize: "40px"}, 200)
    }
    
    
})




