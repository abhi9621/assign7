// var f=document.getElementById("child")
// console.log(f)
const myNodelist = document.getElementsByClassName("child");
console.log(myNodelist)
  for (let i = 0; i < myNodelist.length; i++) {
    if((i+1)%2 == 0)
    {
        myNodelist[i].style.background = "rgb(1,255,0)";
    }
    myNodelist[0].style.background = "blue";
    myNodelist[myNodelist.length-1].style.background = "pink";
    myNodelist[8].style.background = "#008000";

  }