var Kinkakkuji = '#Kinkakkuji .card-body a:nth-child(4)';

$(Kinkakkuji).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseFloat($(Kinkakkuji).attr('product-price')) + parseFloat($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)

var Kiyomizudera = '#Kiyomizudera .card-body a:nth-child(4)';

$(Kiyomizudera).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseFloat($(Kiyomizudera).attr('product-price')) + parseFloat($('#total-price').attr('value')); 
        $('#total-price').attr('value', price);
    }
)
