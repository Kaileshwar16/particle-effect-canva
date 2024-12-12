const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
// console.log(canvas);
// console.log(ctx)
let hue = 0;
const array = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
     

})
const mouse = {
    x:null,
    y:null,
}
canvas.addEventListener('click',(event)=>
{
    mouse.x=event.x;
    mouse.y=event.y;
    for(let i =0 ; i <10 ;i++){
        array.push(new Particle());}
})
canvas.addEventListener("mousemove",(event)=>
{
    mouse.x=event.x;
    mouse.y=event.y;
    for(let i =0 ; i <25 ;i++){
    array.push(new Particle());}
})

class Particle{
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        // this.x = Math.random()*canvas.width;
        // this.y = Math.random()*canvas.height;
        this.size =Math.random()*10+1;
        this.speedX=Math.random()*3-1.5;
        this.speedY=Math.random()*3-1.5;
        this.color= 'hsl('+hue+',100% ,'+'50%)';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}
const init = () =>
{
    for (let i = 0;i<10;i++){
        array.push(new Particle());
    }
}
init();
function handleparticle(){
    for (let i =0;i<array.length;i++){
        array[i].update();
        array[i].draw();
        if(array[i].size <= 0.3 ) {
            array.splice(i,1);
            i--;
        }
    }
}
const animate = ()=>
{
//   ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle='rgba(0,0,0,0.2)'
    ctx.fillRect(0,0,canvas.width,canvas.height);
    handleparticle();
    hue++
  requestAnimationFrame(animate);  
}
animate();