var box = document.getElementById("box");
var viewHeight=window.innerHeight;
var viewWidth=window.innerWidth;

box.addEventListener("mouseover",function(){
	var boxAttr=box.getBoundingClientRect();
	var pos=getNew(boxAttr.height,boxAttr.width);
	box.style.top = pos.y+'px';
	box.style.left=pos.x+'px';

});
 function getNew(boxheight,boxwidth){
 	var newX=Math.floor((Math.random()*viewWidth)+1-boxwidth);
 	var newY=Math.floor((Math.random()*viewHeight)+1-boxheight);
 	  if(newX < 0) {
        newX = 5;
    }
    if(newY < 0) {
        newY = 3;
    }
    return {x:newX,y:newY};
 }

