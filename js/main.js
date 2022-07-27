var product_amt = document.getElementById('product_amt');
var total_amount = document.getElementById('total_amount');
var delivery_chrg = document.getElementById('delivery_chrg');
var discountCode = document.getElementById('discount_code1');

const decrement = (incdec, itemprice) => {
    var itembal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itembal.value);
    if (itembal.value <= 0) {
        itembal.value = 0;
        alert('Negative Value Not Allowed')
    } else {
        itembal.value = parseInt(itembal.value) - 1;
        itembal.style.background = '#fff';
        itembal.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        product_amt.innerHTML = parseInt(product_amt.innerHTML) - 15;

        total_amount.innerHTML = parseInt(product_amt.innerHTML) + parseInt(delivery_chrg.innerHTML);
    }
}

const increment = (incdec, itemprice) => {
    var itembal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itembal.value);
    if (itembal.value >= 5) {
        itembal.value = 5;
        alert('Max 5 Allowed');
        itembal.style.background = 'red';
        itembal.style.color = '#fff';
    } else {
        itembal.value = parseInt(itembal.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        product_amt.innerHTML = parseInt(product_amt.innerHTML) + 15;

        total_amount.innerHTML = parseInt(product_amt.innerHTML) + parseInt(delivery_chrg.innerHTML);
    }
}

const discount_code = () => {
    let current_amt = parseInt(total_amount.innerHTML);
    let error = document.getElementById('error');

    if (discountCode.value === 'parnan') {
        let newTotalAmt = current_amt - 20;
        total_amount.innerHTML = newTotalAmt;
        error.innerHTML = 'Code is Match';
    } else {
        error.innerHTML = 'Code is Undefined';
    }
}