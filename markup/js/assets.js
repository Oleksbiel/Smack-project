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

////// Counter up 


var options = {  
    useEasing: true,
      useGrouping: false,
      separator: '',
      decimal: '.',
      prefix: '',
      suffix: ''
};
var demo = new CountUp("counterBox1", 0, 1600, 0, 4, options);
var demo2 = new CountUp("counterBox2", 0, 3200, 0, 4, options);
var demo3 = new CountUp("counterBox3", 0, 40, 0, 4, options);
var demo4 = new CountUp("counterBox4", 0, 20000, 0, 4, options);
demo.start();
demo2.start();
demo3.start();
demo4.start();

////// mg-space  (google photo)


$(function() {
    $('.mg-space-init').mgSpace();
});
