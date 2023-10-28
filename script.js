var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.53,
    centeredSlides: true,
    spaceBetween: 5,
    keyboard: {
      enabled: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });


  var PauseButton = document.querySelector('.PlayButton');

  // adding event listner to it to handle play and pause button

  PauseButton.addEventListener("click",function(){
     if(swiper.autoplay.running) {
       swiper.autoplay.stop();
        PauseButton.innerHTML = '<i class="fa-sharp fa-regular fa-circle-play fa-xl"></i>';

      
     }
     else{
      swiper.autoplay.start();

      PauseButton.innerHTML = '<i class="fa-sharp fa-regular fa-circle-pause fa-xl"></i>';
      
     }
  });


  // handling navbar drop-down content

  const item1 = document.querySelector('.item-1');
  const item2 = document.querySelector('.item-2');
  const item3 = document.querySelector('.item-3');
  const item4 = document.querySelector('.item-4');
  const item5 = document.querySelector('.item-5');
  const item6 = document.querySelector('.item-6');
  const item7 = document.querySelector('.item-7');
  const item8 = document.querySelector('.item-8');
  const item9 = document.querySelector('.item-9');
  const item10 = document.querySelector('.item-10');
  



  const drop_cont1 = document.querySelector('.drop_cont1');
  const drop_cont2 = document.querySelector('.drop_cont2');
  const drop_cont3 = document.querySelector('.drop_cont3');
  const drop_cont4 = document.querySelector('.drop_cont4');
  const drop_cont5 = document.querySelector('.drop_cont5');
  const drop_cont6 = document.querySelector('.drop_cont6');
  const drop_cont7 = document.querySelector('.drop_cont7');
  const drop_cont8 = document.querySelector('.drop_cont8');
  const drop_cont9 = document.querySelector('.drop_cont9');
  const drop_cont10 = document.querySelector('.drop_cont10');


  item1.addEventListener("mouseover",()=>{
    drop_cont1.style.display = "block";
    
  
  })
  item1.addEventListener("mouseout",()=>{
    drop_cont1.style.display = "none";
    
  })
  item2.addEventListener("mouseover",()=>{
    drop_cont2.style.display = "block";
  })
  item2.addEventListener("mouseout",()=>{
    drop_cont2.style.display = "none";
  })

  item3.addEventListener("mouseover",()=>{
    drop_cont3.style.display = "block";
  })
  item3.addEventListener("mouseout",()=>{
    drop_cont3.style.display = "none";
  })

  item4.addEventListener("mouseover",()=>{
    drop_cont4.style.display = "block";
  })
  item4.addEventListener("mouseout",()=>{
    drop_cont4.style.display = "none";
  })

  item5.addEventListener("mouseover",()=>{
    drop_cont5.style.display = "block";
  })
  item5.addEventListener("mouseout",()=>{
    drop_cont5.style.display = "none";
  })


  item6.addEventListener("mouseover",()=>{
    drop_cont6.style.display = "block";
  })
  item6.addEventListener("mouseout",()=>{
    drop_cont6.style.display = "none";
  })


  item7.addEventListener("mouseover",()=>{
    drop_cont7.style.display = "block";
  })
  item7.addEventListener("mouseout",()=>{
    drop_cont7.style.display = "none";
  })


  item8.addEventListener("mouseover",()=>{
    drop_cont8.style.display = "block";
  })
  item8.addEventListener("mouseout",()=>{
    drop_cont8.style.display = "none";
  })


  item9.addEventListener("mouseover",()=>{
    drop_cont9.style.display = "block";
  })
  item9.addEventListener("mouseout",()=>{
    drop_cont9.style.display = "none";
  })


  item10.addEventListener("mouseover",()=>{
    drop_cont10.style.display = "block";
  })
  item10.addEventListener("mouseout",()=>{
    drop_cont10.style.display = "none";
  })

  
  var Swipp = new Swiper('.swiper-wrapper', {
    on: {
       Slidechange: function(){
        var currentSlide = Swipp.swiper-slide[Swipp.activeIndex];
        console.log(currentSlide);
        // var moviename = currentSlide.querySelector('.swip_text');
        // moviename.innerText = "ame is this"
      }
    }
  });
  
 