function insert(value){
    document.getElementById('input').value+=value;
}

function clearResult(){
    document.getElementById('input').value='';
}

function calculate(){
    let expression = document.getElementById('input').value;
    let answer = scientificToDecimal(eval(expression));
    document.getElementById('input').value=answer;
}

function clearLastChar(){
    let expression = document.getElementById('input').value;
    let new_expression = expression.slice(0,expression.length-1);
    document.getElementById('input').value=new_expression;
}



function scientificToDecimal(num) {
    const sign = Math.sign(num);

    if(/\d+\.?\d*e[\+\-]*\d+/i.test(num)) {
        const zero = '0';
        const parts = String(num).toLowerCase().split('e'); 
        const e = parts.pop(); 
        let l = Math.abs(e); 
        const direction = e/l; 
        const coeff_array = parts[0].split('.');
        
        if (direction === -1) {
            coeff_array[0] = Math.abs(coeff_array[0]);
            num = zero + '.' + new Array(l).join(zero) + coeff_array.join('');
        }
        else {
            const dec = coeff_array[1];
            if (dec) l = l - dec.length;
            num = coeff_array.join('') + new Array(l+1).join(zero);
        }
    }
    
    if (sign < 0) {
        num = -num;
    }

    return num;
}
