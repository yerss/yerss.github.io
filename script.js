$(".phone_mask").mask("8(999)999-99-99");

$('#priceListBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#priceElement").offset().top
    }, 1000);
});

$('#contactBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$('#serviceBtn').click(function(){
     $('html, body').animate({
        scrollTop: $("#service").offset().top
    }, 1000);
});

const swiper1 = new Swiper('.swiper-container1', {
  loop: true,
  spaceBetween: 240,
  slidesPerView: 1,
  pagination: {
       el: '.swiper-pagination',
      bulletActiveClass: "dots--active",
      bulletClass: "dots__dot",
      clickable: true
  }
});

const swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  spaceBetween: 240,
  slidesPerView: 1,
     pagination: {
       el: '.swiper-pagination',
      bulletActiveClass: "dots--active",
      bulletClass: "dots__dot",
      clickable: true
  }
});

const rangeInput1 = document.getElementById("range1");
const rangeInput2 = document.getElementById("range2");
const sum = document.getElementById("sum");

rangeInput1.addEventListener('mousemove', () => {
    let value = 0;
    const x = parseInt(rangeInput1.value);
    const range1Color = `linear-gradient(90deg,#025EC5 ${x}%, rgba(111, 111, 111, 0.25) ${x}%)`;
    rangeInput1.style.background = range1Color;
    
    if(x < 3){
        setRange('0', '0');
    }
    
    if(x >= 3 && x< 10){
        setRange('8', '8');
        value = "3 120 000,00";
    }
    
    if(x >= 10 && x< 17){
        value = "4 560 000,00";
    }
    
    if(x >= 17 && x< 24){
        value = "5 520 000,00";
    }
    
    if(x >= 24 && x < 31){
        setRange('18.5', '18');
        value = "6 600 000,00";
    }
    
    if(x >= 31 && x < 38){
        setRange('28.5', '28');
        value = "8 160 000,00";
    }
    
    if(x >= 38 && x < 45){
         value = "8 880 000,00";
    }
    
    if(x >= 45 && x < 52){
         value = "13 800 000,00";
    }
    
    if(x >= 53 && x < 60){
        setRange('38.5', '38');
         value = "16 170 000,00";
    }
    
     if(x >= 60 && x < 67){
        setRange('47.5', '47');
          value = "22 000 000,00";
    }
    
    if(x >= 67 && x < 74){
        setRange('57.5', '57');
         value = "24 200 000,00";
    }
    
    if(x >= 74 && x < 81){
        setRange('67.5', '67');
        value = "30 250 000,00";
    }
    
    if(x >= 81 && x < 88){
        setRange('77.5', '77');
        value = "44 000 000,00";
    }
    
    if(x >= 88 && x < 95){
        setRange('85.5', '86');
        value = "88 000 000,00";
    }
    
    if(x >= 95 && x < 102){
        setRange('95.5', '96');
        value = "184 250 000,00";
    }
    
    sum.innerHTML = value + 'т';
});

function setRange(percent, value){
    const color = `linear-gradient(90deg,#FFB62A ${percent}%, rgba(111, 111, 111, 0.25) ${percent}%)`;
    rangeInput2.style.background = color;
    rangeInput2.value = value;
}

