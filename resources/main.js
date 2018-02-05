$(document).ready (function() {
    $('.one').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#extPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span>' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.two').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#wardenPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span>' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.three').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#staffPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span>' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });
    $('.four').on('click',function() {
        var currentTot = +$('#totPrice').text();
        var addedItem = +$('#evacPrice').text();
        var $newTotal = ((addedItem + currentTot));
    var $newPrice = $('<span>' + $newTotal + '</span>');
    $('#totPrice').replaceWith($newPrice);
    });

});

