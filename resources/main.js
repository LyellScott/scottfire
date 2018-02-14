$(document).ready (function() {
    $('.training-modules').on('click',function() {
        $('form').removeClass("dimmerSwitch");
    });
    $('.dim').on('click',function() {
        $('#extPrice h5').append('<h1>'+'This course has already been selected'+'</h1>');
    });
    $('.one').on('click',function() {
            var currentTot = +$('#totPrice').text();
            if(currentTot < 120){
            var addedItem = +$('#extPrice').text();
            var $newTotal = ((addedItem + currentTot));
            var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($newPrice);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field8" value="Fire Extinguisher Training">'+'Fire Extinguisher Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        }else{
            var currentTot = +$('#totPrice').text();
            var addedItem = +$('#extPrice').text();
            var $newTotal = ((addedItem + currentTot) - 100);
            var $disPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($disPrice);

            var newSaving = +$('#discount').text();
            var totSaving = (newSaving + 100);
            var $disSaving = $('<span id="discount">'+ totSaving +'</span>');
            var $youSaveOn = $('<span id="youSave">'+ 'You Save $' +'</span>');
            $('#youSave').replaceWith($youSaveOn);
            $('#discount').replaceWith($disSaving);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field8" value="Fire Extinguisher Training">'+'Fire Extinguisher Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        }
    });


    $('.two').on('click',function() {
            var currentTot = +$('#totPrice').text();
            if(currentTot < 120){
            var addedItem = +$('#wardenPrice').text();
            var $newTotal = ((addedItem + currentTot));
            var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($newPrice);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field9" value="Warden Training">'+'Warden Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        } else {
            var currentTot = +$('#totPrice').text();
            var addedItem = +$('#wardenPrice').text();
            var $newTotal = ((addedItem + currentTot)-100);
            var $disPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($disPrice);

            var newSaving = +$('#discount').text();
            var totSaving = (newSaving + 100);
            var $disSaving = $('<span id="discount">'+ totSaving +'</span>');
            var $youSaveOn = $('<span id="youSave">'+ 'You Save $' +'</span>');
            $('#youSave').replaceWith($youSaveOn);
            $('#discount').replaceWith($disSaving);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field9" value="Warden Training">'+'Warden Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        }
    });


    $('.three').on('click',function() {
            var currentTot = +$('#totPrice').text();
            if(currentTot < 120 ) {
            var addedItem = +$('#staffPrice').text();
            var $newTotal = ((addedItem + currentTot));
            var $newPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($newPrice);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field10" value="General Staff Fire Training">'+'General Staff Fire Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        } else {
            var currentTot = +$('#totPrice').text();    
            var addedItem = +$('#staffPrice').text();
            var $newTotal = ((addedItem + currentTot) - 100);
            var $disPrice = $('<span id="totPrice">' + $newTotal + '</span>');
            $('#totPrice').replaceWith($disPrice);
            
            var newSaving = +$('#discount').text();
            var totSaving = (newSaving + 100);
            var $disSaving = $('<span id="discount">'+ totSaving +'</span>');
            var $youSaveOn = $('<span id="youSave">'+ 'You Save $' +'</span>');
            $('#youSave').replaceWith($youSaveOn);
            $('#discount').replaceWith($disSaving);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field10" value="General Staff Fire Training">'+'General Staff Fire Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        }
    });
    
    
    
    
    $('.four').on('click',function() {
            var currentTot = +$('#totPrice').text();
            if(currentTot < 120 ) {
            var addedItem = +$('#evacPrice').text();
            var $newTotal = ((addedItem + currentTot));
            var $newPrice = $('<span id="totPrice">' + $newTotal +'</span>');
            $('#totPrice').replaceWith($newPrice);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field11" value="Evacation Training">'+'Evacation Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        } else {
            var currentTot = +$('#totPrice').text();
            var addedItem = +$('#evacPrice').text();
            var $newTotal = ((addedItem + currentTot) - 60);
            var $disPrice = $('<span id="totPrice">' + $newTotal +'</span>');
            $('#totPrice').replaceWith($disPrice);

            var newSaving = +$('#discount').text();
            var totSaving = (newSaving + 100);
            var $disSaving = $('<span id="discount">'+ totSaving +'</span>');
            var $youSaveOn = $('<span id="youSave">'+ 'You Save $' +'</span>');
            $('#youSave').replaceWith($youSaveOn);
            $('#discount').replaceWith($disSaving);
            $('.selectCourses').append('<p>'+ '<input type="checkbox" checked="checked" name="field11" value="Evacation Training">'+'Evacation Training'+'</p>');
            $('html, body').animate({ scrollTop: 0 }, 'fast', function () {});
            $(this).removeClass("one").addClass("dim");
        }
    });
});

