var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 250 + "px";
  blur.style.top = dets.y - 250 + "px";
});



let all=document.querySelectorAll('#nav h4');

all.forEach(function (elem){

  elem.addEventListener("mouseenter", ()=>{

    crsr.style.scale=2;
    crsr.style.border="1px solid #fff";
    crsr.style.backgroundColor="transparent"
    crsr.style.transition="h4 ease 0.2s";

  });

  elem.addEventListener("mouseleave", ()=>{

    crsr.style.scale=1;
    crsr.style.backgroundColor="#95C11E";
    crsr.style.border = "0px solid #95C11E";

  });



});
  

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "rgba(0,0,0,0.8)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  }
});

gsap.to("#about-us img , #about-us-in",{

  y:40,
  opacity:0,
  duration:2,

  scrollTrigger:{

    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 15%",
    end:"top 30%",
    scrub:2
  }

});

gsap.to(".colon1" , {

  // scale:0.8,
  // opacity:0,
  y:-45,
  x:-45,
  scrollTrigger:{

    trigger:".colon1",
    scroller:"body",
    markers:false,
    start:"top 70%",
    end:"top 63%",
    scrub:4
  }

});

gsap.to(".colon2" , {

 
  y:45,
  x:45,
  scrollTrigger:{

    trigger:".colon1",
    scroller:"body",
    markers:false,
    start:"top 65%",
    end:"top 55%",
    scrub:4
  }

});

gsap.to(".last_first h1" , {

 
  y:45,
  scrollTrigger:{

    trigger:".last_first",
    scroller:"body",
    markers:false,
    start:"top 40%",
    end:"top 35%",
    scrub:4
  }

});


