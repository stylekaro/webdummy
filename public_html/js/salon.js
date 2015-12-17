/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function initialize() {
    var mapCanvas = document.getElementById('salonMap');
    var salonLatLng = {lat: 22.5667, lng: 88.3667};
    var mapOptions = {
        center: salonLatLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    var marker = new google.maps.Marker({
        position: salonLatLng,
        map: map,
        title: 'Salon1'
    });
    var map = new google.maps.Map(mapCanvas, mapOptions);
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

//$("#seemore").each(function() {
//    var $link = $(this);
//    var $content = $link.parent().prev(".timingInfo");
//
//    console.log($link);
//
//    var visibleHeight = $content[0].clientHeight;
//    var actualHide = $content[0].scrollHeight - 1;
//
//    console.log(actualHide);
//    console.log(visibleHeight);
//
//    if (actualHide > visibleHeight) {
//        $link.show();
//    } else {
//        $link.hide();
//    }
//});

$("#seemore").on("click", function () {
    var $link = $(this);
    var $content = $link.parent().parent();
    var linkText = $link.text();

    $content.toggleClass("short-text", 3000, "full-text");

    $link.text(getShowLinkText(linkText));

    return false;
});

function getShowLinkText(currentText) {
    var newText = '';

    if (currentText.toUpperCase() === "SEE MORE") {
        newText = "See less";
    } else {
        newText = "See more";
    }
    return newText;
}

function swapDivsWithClick(div1, div2)
{
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
    if (d2.style.display === "none")
    {
        d1.style.display = "none";
        d2.style.display = "block";
    }
    else
    {
        d1.style.display = "block";
        d2.style.display = "none";
    }
}

$(function() {
   $("#inputRatingImage").rating({'showClear':false});
});




