let navbar = document.querySelector('#js-nav');

document.querySelector('.js-bars').onclick = function(){
    navbar.classList.toggle('open');
}

window.onscroll = () =>{
    navbar.classList.remove('open');
}

// var myIndex = 0;  /**Đây là code chạy slider không vuốt được */
// carousel();
// function carousel() {
//     const x = document.getElementsByClassName("js-slider");
//     for (let i = 0; i < x.length; i++) {
//         x[i].style.display = "none";  
//     }
//     myIndex++;
//     if (myIndex > x.length) {myIndex = 1}    
//     x[myIndex-1].style.display = "block";  
//     setTimeout(carousel, 4000); 
// }

$('.slider-contain').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

