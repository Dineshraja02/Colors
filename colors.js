const colors=["red","blue","green","violet","skyblue"];
let index=0;
const cycleColors=()=>{
  if(index===colors.length){
    index++;
  }
  document.body.style.backgroundColor=colors[index];
  index++;
}
let colorInterval;
function clicked() {
colorInterval=setInterval(cycleColors,1000);
}
function againclicked() {
colorInterval=clearInterval(colorInterval);
}
//clearInterval(colorInterval, 1000*10);
// setTimeout(()=> clearInterval(colorInterval),1000*10);
// function clicked() {
//   console.log("this is clicked");
// }