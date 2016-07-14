$('.owl-carousel').owlCarousel({
    autoPlay: 5000,
    items: 6,
    navigation: true
})
$('.owl-carousel2').owlCarousel({
    autoPlay: 4000,
    items: 1
})

// progress bar


$(document).ready(function() {
    $('#myStat').circliful({
        percent: 90,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5,
    });
    $('#myStat2').circliful({
        percent: 96,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5
    });
    $('#myStat3').circliful({
        percent: 85,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5
    });
    $('#myStat4').circliful({
        percent: 94,
        foregroundBorderWidth: 5,
        backgroundBorderWidth: 5
    })
});

function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if (currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}



$(document).ready(function() {
    setEqualHeight($(".item"));
});


$(window).resize(function() {
    setEqualHeight($(".item"));
});
