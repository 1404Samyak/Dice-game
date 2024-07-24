const images=[];
for(let i=1;i<=6;i++){
    str="/images/dice"+`${i}`+".png"
    images.push(str);
}
console.log(images)
//now whenever we refresh the page the images should appear on the web first and then  display the winner in the h1 
window.addEventListener("load",()=>{
    let i1=Math.floor(Math.random()*images.length);
    let i2=Math.floor(Math.random()*images.length);
    document.querySelector(".img1").setAttribute("src",images[i1]);
    document.querySelector(".img2").setAttribute("src",images[i2]);
    if(i1>i2){
        document.querySelector("h1").innerHTML="Player 1 wins"
    }
    else if(i1<i2){
        document.querySelector("h1").innerHTML="Player 2 wins"
    }
    else{
        document.querySelector("h1").innerHTML="Oops!!There is a draw"
    }
})


