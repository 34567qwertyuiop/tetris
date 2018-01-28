var nextdata=[
[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]
]
var gamedata=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]
var nextdivs=[];
var gamedivs=[];
//渲染gamedata
var init=function(){
	for(var i=0;i<gamedata.length;i++){
		var gamediv=[];
		for(var n=0;n<gamedata[0].length;n++){
			var newNone=document.createElement('div');
			newNone.className='none';
			newNone.style.top=(i*20)+'px';
			newNone.style.left=(n*20)+'px';
			document.getElementById('game').appendChild(newNone);
			gamediv.push(newNone);
		}
		gamedivs.push(gamediv)
	}
}
init()
