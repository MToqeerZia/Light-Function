let img=document.querySelector("img");
let btn=document.querySelector("button");
let check=1;
btn.addEventListener("click",()=>{
    if(check==1){
        img.src="on_blub.webp";
        btn.innerText="OFF BLUB";
        btn.style.backgroundColor="red";
        check=0;
    }
    else{
        img.src="blub.jpg";
        btn.innerText="ON BLUB";
        btn.style.backgroundColor="yellow";
        check=1;

    }
    
})