let arr = [
    {
    name:'Emma',
    text:'" The Pilates classes have <br> been instrumental in <br> alleviating my back pain and <br> improving my flexibility." ',
    },
    {
    name:'Liam',
    text:'" I highly recommend this <br> studio to anyone looking to <br> enhance their fitness journey <br> and well-being. "',
    },
    {
    name:'Sophia',
    text:'" The instructors here are not <br> only knowledgeable but also <br> incredibly supportive. "',
    }
]
const box = document.querySelector('.testimonials');
const text = document.querySelector('.testimonials .text'); 
const nameel = document.querySelector('.testimonials .name');
const leftarrow = document.querySelector('.l-arrow');
const rightarrow = document.querySelector('.r-arrow');

let i = 0;
let timer;

function cuyc(i){
 box.classList.add('fade');
 setTimeout(function(){
  text.innerHTML = arr[i].text;
  nameel.textContent = arr[i].name;
  box.classList.remove('fade');
 },500)
}

cuyc(i);

function next(){
    i++;
   if(i >= arr.length)i = 0;
   cuyc(i);
}
function prev(){
    i--;
    if(i < 0)i = arr.length-1;
    cuyc(i);
}

function auto(){
    timer = setInterval(function(){
     next();
    },4000);
}

function stopauto(){
    clearInterval(timer);
}

rightarrow.addEventListener('click',function(){
  stopauto();
  next();
  auto();
});
leftarrow.addEventListener('click',function(){
    stopauto();
    prev();
    auto();
});

auto();


