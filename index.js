document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
   const kitkat =element('kitkat-quantity');
   const sumkitkat = kitkat * 200;
   add('chocolate', sumkitkat);
   total()
})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
   const rose = element('rose-quantity');
   const sumrose = rose * 100;
   add('rose', sumrose);
   total()
})

document.getElementById('diary-buy-btn').addEventListener('click', function(){
   const diary = element('diary-quantitydiary-quantity');
   const sumdiary = diary * 100;
   add('diary',sumdiary );
   total()
})



function add(id, value){
   document.getElementById(id).innerText = value;
}

function element(id){
  const value = document.getElementById(id).value;
  return parseInt(value);
}


function total(){
   const kitkat = totaladd('chocolate');
   const rose = totaladd('rose');
   const diary = totaladd('diary');

   const totalsum = parseInt(kitkat) + parseInt (rose)+ parseInt(diary);
   add('total', totalsum)
}


function totaladd(id){
 const innerText=   document.getElementById(id).innerText;
 return innerText;
}

document.getElementById('apply-btn').addEventListener('click', function(){
   const promo= document.getElementById('promo-code').value;
   if(promo == 101){
      const totalpromo = document.getElementById('total').innerText;
      const cost =totalpromo - parseInt (totalpromo) * 0.1;
      add('all-total', cost)
      
   }else{
      alert('please enter your valid number')
   }
})

document.getElementById('apply-btn').addEventListener('click', function(){
   const valentine = document.getElementById('Valentine').innerText;
  
})