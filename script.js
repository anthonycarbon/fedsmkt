jQuery(document).ready(function ($) {
  $('.event-gallery').owlCarousel({
    loop: false,
    margin: 30,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
          items: 2,
          dots: false
        },
        767: {
          items: 4,
          dots: false
        },
        1024: {
          items: 5,
          dots: false
        }
    }
  });
   
  let item = '';
  function myFunction(item) {
      if(item.percent_change_24h >= 0 ){
        document.getElementById('trade').innerHTML += '<div class="item item-'+item.id+'"> <div class="g "> <div class="g-logo"><img width="33" src="images/'+item.id+'.png" alt="" /></div> <div class="g-symbol">'+item.symbol+'</div> <div class="g-name"><span>'+item.name.toUpperCase()+'</span></div> </div> <hr /> <div class="price">'+Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format( item.price_usd, )+'</div> <div class="percentchange up"><i class="fas fa-chevron-circle-up"></i><span>'+item.percent_change_24h+'%</span></div></div> </div>';
      }else{
        document.getElementById('trade').innerHTML += '<div class="item item-'+item.id+'"> <div class="g "> <div class="g-logo"><img width="33" src="images/'+item.id+'.png" alt="" /></div> <div class="g-symbol">'+item.symbol+'</div> <div class="g-name"><span>'+item.name.toUpperCase()+'</span></div> </div> <hr /> <div class="price">'+Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' }).format( item.price_usd, )+'</div> <div class="percentchange down"><i class="fas fa-chevron-circle-down"></i><span>'+item.percent_change_24h+'%</span></div> </div>';
      }
  }
  fetch("https://api.coinlore.net/api/ticker/?id=90,80,58,1,2321")
    .then(res => res.json())
    .then(data => {
      data.forEach(myFunction);
  });
});