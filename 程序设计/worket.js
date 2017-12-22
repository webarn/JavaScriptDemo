
var i = 0;
function timed(){
	i += 1;
	postMessage(i);
	setTimeout('timed()',1000);
}