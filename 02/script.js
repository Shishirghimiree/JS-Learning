document.addEventListener("mousemove",function(details){
    var circle = document.querySelector("#circle");
    var xval =gsap.utils.mapRange(0,window.innerWidth, 100+circle.getBoundingClientRect().width/2, window.innerWidth-(100+circle.getBoundingClientRect().width/2), details.clientX);
    gsap.to('#circle',{
        left:xval,
        ease:Power3
    })
})