/**||**************************************************
 **||2018.06.11
 **||Samuel Antonio Farach Rojas
 **||[farachsamuel@gmail.com]
 **||
 **||*************************************************/

/****************************************************************************************************/
function setup()
{
}
/****************************************************************************************************/
function draw()
{
  var val = document.getElementById("myRange").value
	
	var xx = map(val, 0, 100, 0, 1.0);
	var element = document.getElementById('img2');
	element.style.opacity = xx;
	element.style.filter  = 'alpha(opacity=90)'; // IE fallback

}
