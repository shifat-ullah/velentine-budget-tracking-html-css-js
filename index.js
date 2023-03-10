document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
   const kitket = document.getElementById('kitkat-quantity').value;
   const price = parseFloat(kitket * 200);
   add ('chocolate', price);
})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    const rose = document.getElementById('rose-quantity').value;
    const roseprice = parseFloat(rose * 100);
    add ('rose', roseprice);
   
 })

 document.getElementById('diary-buy-btn').addEventListener('click', function(){
    const diary = document.getElementById('diary-quantitydiary-quantity').value;
    const diaryprice = parseFloat(diary * 100);
    add ("diary", diaryprice);
 })


 function add (id ,value){
   document.getElementById(id, value).innerText = value;
 
 }


