const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [swiper, time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
})
let count = new Date("may 15, 2023 12:00:00").getTime(); 
let counnter = setInterval(()=>{

    



let datanow = new Date().getTime();
let datediff = count - datanow;
let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )) ;
let min =Math.floor((datediff % (1000 * 60 * 60 )) / (1000 * 60 )) ;
let sec = Math.floor((datediff % (1000 * 60 )) / 1000 ) ;

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".min").innerHTML = min;
document.querySelector(".sec").innerHTML = sec;
if (datediff <0 )
{
    clearInterval(counnter);
}
console.log(days)

},1000);

let bb = document.getElementById("bb")
window.onscroll = function()
{
    if (scrollY >= 400)
    {
        bb.style.display="block";
    }
    else
    {
        bb.style.display="none" ; 
    }
}

bb.onclick = function(){
   scroll(
    {
        left:0,
        top:0,
        behavior:"smooth"
    }
   )
 
 
}