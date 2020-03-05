var BukchonHanokVillage = '#BukchonHanokVillage .card-body a:nth-child(4)';

$(BukchonHanokVillage).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseInt($(BukchonHanokVillage).attr('product-price')) + parseInt($('#total-price').attr('value'));
        $('#total-price').attr('value', price);
    }
)

var HaeundaeBeach = '#HaeundaeBeach .card-body a:nth-child(4)';

$(HaeundaeBeach).click(
    function(){
        if($('#total-price').attr('value') == undefined) $('#total-price').attr('value', 0);
        var price = parseInt($(HaeundaeBeach).attr('product-price')) + parseInt($('#total-price').attr('value')); 
        $('#total-price').attr('value', price);
    }
)
