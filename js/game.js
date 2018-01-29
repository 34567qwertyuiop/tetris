var nextdata=[
[0,0,0,0],
[0,1,1,0],
[0,1,1,0],
[0,0,0,0]
]
var gamedata=[
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,0,0,0,0],
[0,0,0,0,1,1,0,0,0,0],
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
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
]
var nextdivs=[];
var gamedivs=[];
//渲染gamedata
var initGame=function(){
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
		gamedivs.push(gamediv);
	}
}
var initNext=function(){
    for(var i=0;i<nextdata.length;i++){
        var gamediv=[];
        for(var n=0;n<nextdata[0].length;n++){
            var newNone=document.createElement('div');
            newNone.className='none';
            newNone.style.top=(i*20)+'px';
            newNone.style.left=(n*20)+'px';
            document.getElementById('nextdata').appendChild(newNone);
            gamediv.push(newNone);
        }
        nextdivs.push(gamediv);
    }
}

var refreshGame=function(){
	for(var i=0;i<gamedata.length;i++) {
          for (var n = 0; n < gamedata[0].length; n++) {
              if (gamedata[i][n] == 0) {
                  gamedivs[i][n].className = 'none';
              } else if (gamedata[i][n] == 1) {
                  gamedivs[i][n].className = 'active';
              } else if (gamedata[i][n] == 2) {
                  gamedivs[i][n].className = 'done';
              }
          }
      }
}
var refreshNext=function(){
    for(var i=0;i<nextdata.length;i++) {
        for (var n = 0; n < nextdata[0].length; n++) {
            if (nextdata[i][n] == 0) {
                nextdivs[i][n].className = 'none';
            } else if (nextdata[i][n] == 1) {
                nextdivs[i][n].className = 'active';
            } else if (nextdata[i][n] == 2) {
                nextdivs[i][n].className = 'done';
            }
        }
    }
}
var startGame=function(){
    this.initGame=initGame();
    this.initNext=initNext();
    this.refreshGame=refreshGame();
    this.refreshNext=refreshNext();
}
startGame()

