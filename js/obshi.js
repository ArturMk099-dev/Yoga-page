let bar = document.getElementsByClassName('bar')[0];
let navbar = document.getElementsByClassName('nav-bar')[0];
 bar.addEventListener('click',function(){
 if(navbar.style.display === 'block'){
    navbar.style.display = 'none';
 }
 else{
    navbar.style.display = 'block';
 }
 });

 setTimeout(function(){
 document.body.classList.add('show');
 },300);

 let links = document.querySelectorAll('.nav-bar a');
 for(let i = 0; i < links.length;i++){
  links[i].onclick = function (e) {
    e.preventDefault();
    let url = this.href;
    document.body.classList.add('hide');
    setTimeout(function(){
     location.href = url;
    },300);
  };
 }

 let header = document.querySelector('header');
 let lastScroll = 0;
 window.addEventListener('scroll',function(){
    let curScroll = window.scrollY;
    if(curScroll > lastScroll){
        header.classList.add('hide');
    }
    else{
        header.classList.remove('hide');
    }
    lastScroll = curScroll
 });