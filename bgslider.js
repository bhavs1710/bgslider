
//images=[0],[1],[2]=3 images

let flag = 2;//flag showing which image is visible right now. 

function control(x) {
    flag += x;
    slides(flag);
    //flag=2+(-1)//if left pressed
    //flag=2+(1)//if right pressed
}

function slides(num) {
    let slide = document.getElementsByClassName("one");
    if(num==slide.length){
        flag=0;
        num=0;
    }
    for (let y of slide) {
        y.style.display = "none";
    }
    slide[num].style.display = "block";
}
slides(flag)