var Florence = '#Florence .card-body a:nth-child(4)';

$(Florence).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseInt($(Florence).attr('product-price')) + parseInt($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)

var PonteVecchio = '#PonteVecchio .card-body a:nth-child(4)';

$(PonteVecchio).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseInt($(PonteVecchio).attr('product-price')) + parseInt($('#total-price').attr('value')); 
        $('#total-price').attr('value', price);
    }
)
