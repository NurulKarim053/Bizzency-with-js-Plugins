$(function() {
  let searchBtn = $(`.searchBtn`)
  let searchBar = $(`.search`)
  let closeBtn = $(`.closeBtn`)
  
  
  searchBtn.click(function(){
      searchBar.fadeIn(300)
      $(this).hide()
      closeBtn.css({"opacity":1,
      "visibility":"visible"
  })
  
  })
  closeBtn.click(function(){
      searchBar.fadeOut()
      $(this).css({"opacity": 0,
      "visibility":"hidden",
      
  })
      searchBtn.fadeIn()
  })
  })
  // $(function () {
  
  //   let navbar = $(`.navbar`);
  //   let navbarTop = Math.ceil(navbar.offset().top);
  
  //   console.log(navbarTop);
  //   $(window).scroll(function () {
  //     let scrTop = Math.ceil($(window).scrollTop());
  
  //     if (scrTop > navbarTop) {
  //       navbar.css({
  //         position: "fixed",
  //         top: 0
  //       });
  //     } else {
  //       navbar.css({
  //         position: "static",
  //       });
  //     }
  //   });
  // });
  

 
 var clock = $('.clock').FlipClock({
    
        clockFace:'DailyCounter',
    
        autoStart:true,
    
        callbacks: {
    
          stop:function() {
    
            $('.message').html('The clock has stopped!')
    
          }
    
        }
    
    });
    AOS.init();
    var typed = new Typed('#typed', {
      strings: ['Services', 'Contact'],
     
      
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 50,
      loop: true,
    });
    var typed = new Typed('#typed2', {
 
      strings: ['Latest Blogs'],
      
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 150,
      loop: true,
    });
    // var typed = new Typed('#typed3', {
 
    //   strings: [`BIZZENCY`],
      
    //   typeSpeed: 50,
    //   smartBackspace: true,
    //   backSpeed: 150,
    //   loop: true,
    // });
    var typed = new Typed('#typed4', {
 
      strings: ['DESIGNER'],
      typeSpeed: 50,
      smartBackspace: true,
      backSpeed: 180,
      loop: true,
      
  startDelay: 300,
    });
  
    new VenoBox({
      selector: ".venobox",
      share:true,
      spinner:'pulse',
  });
    
  $("#container").Progress({
    percent: 90,// 20%
    width: 500,
    height: 15,
   backgroundColor:'#dddddd',
   barColor:'#2a4896',
   fontColor:'#fff',
   radius:10,
   fontSize: 12,
   increaseTime: 1000.00/60.00,
   increaseSpeed: 4,
   Animate: true

  });
    $("#container1").Progress({
      percent: 85,// 20%
      width: 500,
      height: 15,
     backgroundColor:'#dddddd',
     barColor:'#5d3b15',
     fontColor:'#fff',
     radius:10,
     fontSize: 12,
     increaseTime: 1000.00/60.00,
     increaseSpeed: 4,
     Animate: true
  
    });
    $("#container2").Progress({
      percent: 75,// 20%
      width: 500,
      height: 15,
     backgroundColor:'#dddddd',
     barColor:'#344a1f',
     fontColor:'#fff',
     radius:10,
     fontSize: 12,
     increaseTime: 1000.00/60.00,
     increaseSpeed: 4,
     Animate: true
  
    });
    $("#container3").Progress({
      percent: 80,// 20%
      width: 500,
      height: 15,
     backgroundColor:'#dddddd',
     barColor:'#392960',
     fontColor:'#fff',
     radius:10,
     fontSize: 12,
     increaseTime: 1000.00/60.00,
     increaseSpeed: 4,
     Animate: true
  
    });
  
      
    