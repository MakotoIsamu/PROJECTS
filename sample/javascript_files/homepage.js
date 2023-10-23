let main = document.querySelector('.main')
let crsr = document.querySelector('.cursor')
let menuBtn = document.querySelector('.ri-menu-line')
let sidebar = document.querySelector('.sidebar')
let tap = 0;


main.addEventListener('mousemove' , function (e){
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px";
    crsr.style.opacity = 1
})

main.addEventListener('mouseleave' , function (e){
    crsr.style.opacity = 0
})


menuBtn.addEventListener('click', function(){
    
    if(tap === 0){
        sidebar.style.width = "50%";
        tap = 1;
    } else {
        sidebar.style.width = "0";
        tap = 0;
    }
    
})