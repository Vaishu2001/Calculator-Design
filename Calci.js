function insert(num){
    document.form.display.value = document.form.display.value + num ;
}
function answer(){ 
    var exp = document.form.display.value;
        document.form.display.value = eval(exp);
}
function clean(){
    document.form.display.value = " ";
}
