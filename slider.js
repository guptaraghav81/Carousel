let flag = 0; //for images index we use flag to index and access them.
function Controller(item){
    flag  =  flag + item; 
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let slides  = document.getElementsByClassName('slide');
    if(num==slides.length){
        flag=0;
        num=0;
    }
    else if(num<0){
        flag=slides.length-1;
        num=slides.length-1;
    }
    
    for( let  y of slides){
        y.style.cssText="display:none";
    }
    slides[num].style.cssText="display:block";
}