var cardA = '#card-A .card-body a:nth-child(4)';

$(cardA).click(
    function() {
        if ($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseFloat($(cardA).attr('product-price')) + parseFloat($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)

var cardB = '#card-B .card-body a:nth-child(4)';

$(cardB).click(
    function() {
        if ($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseFloat($(cardB).attr('product-price')) + parseFloat($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)

var cardC = '#card-C .card-body a:nth-child(4)';

$(cardC).click(
    function() {
        if ($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseFloat($(cardC).attr('product-price')) + parseFloat($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)


$('#myModal').on('shown.bs.modal', function() {
    $('#myInput').trigger('focus')
})