$(document).ready (function() {
    $('.training-modules').on('click',function() {
        $('form').removeClass("dimmerSwitch");
    });
    $('.one').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#extPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.two').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#wardenPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.three').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#staffPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.four').on('click',function() {
            var currentTot = +$('#totPrice').text();
            if(currentTot < 120 ) {
            var addedItem = +$('#evacPrice').text();
            var $newTotal = ((addedItem + currentTot));
            var $newPrice = $('<span id="totPrice">' + $newTotal +'</span>');
            $('#totPrice').replaceWith($newPrice);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="firstCourse" value="firstCourse">'+'Evacation Training'+'</p>');
        } else {
            var currentTot = +$('#totPrice').text();
            var addedItem = +$('#evacPrice').text();
            var $newTotal = ((addedItem + currentTot) - 60);
            var $disPrice = $('<span id="totPrice">' + $newTotal +'</span>');
            var $saving = $('<h5>'+' You save $60 '+'</h5>');
            $('#totPrice').replaceWith($disPrice);
            $('#totPrice').append($saving);
        }
    });
});

