 let menu = document.querySelector(".menu")
 let cancle = document . querySelector(".cancle")
 let narv_icone = document.querySelector(".narv_icone")

 menu.addEventListener("click", () => {
  narv_icone.classList.add("show");

 });

 cancle.addEventListener("click", () =>  {
  narv_icone.classList.remove("show")

 });











window.addEventListener('scroll',()=>{
    var container= document.querySelector('.container');
    if(window.scrollY > 100 ){
     container.classList.add('scrolled');
    
    }else{
     container.classList.remove('scrolled');

    }


    
})


 

  // window.addEventListener('scroll', () => {
  //     var container = document.querySelector('.container');
  //    var menu = document.querySelector('.menu');
  //     if (window.scrollY > 100) {
  //       container.classList.add('scrolled');
  //        menu.style.border = "none"; // Remove border
  //         menu.style.boxShadow = "none"; // Remove box-shadow when scrolling
    
  //     } else {
  //         container.classList.remove('scrolled');
  //          menu.style.border = "2px solid blueviolet"; // Restore border
  //         menu.style.boxShadow = "2px 2px 5px blueviolet"; // Restore box-shadow
  //     }
  // });
 




  // Select all nav links
 const navLinks = document.querySelectorAll('.narv li a');

   navLinks.forEach(link => {
   link.addEventListener('click', (e) => {
      // Remove 'active' class from all links
    navLinks.forEach(l => l.classList.remove('active'));

    // Add 'active' class to the clicked link
    e.target.classList.add('active');
      });
     });



     const narvLinks = document.querySelectorAll('.narv_icone li a');

     narvLinks.forEach(link => {
       link.addEventListener('click', (e) => {
         // Remove the custom active class from all links
         narvLinks.forEach(l => l.classList.remove('active'));
         // Add it to the clicked link
         e.target.classList.add('active');
       });
     });
     

    


