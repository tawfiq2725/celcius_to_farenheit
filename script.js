function convert(){
let cel = Number(document.getElementById('cel').value);
let calc = cel*9/5+32;
let  ans =  document.getElementById('ans');
ans.innerHTML = calc ; 
}