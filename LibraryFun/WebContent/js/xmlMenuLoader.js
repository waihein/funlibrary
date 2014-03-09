if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","js/xml/menu.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

x=xmlDoc.getElementsByTagName("TOPMENUBAR");
i=0;

function displayMenu()
{
	var myMenus=new Array(); 
	myMenus[0]="menu1";       
	myMenus[1]="menu2";
	myMenus[2]="menu3";
	myMenus[3]="menu4";
	myMenus[4]="menu5";
	myMenus[5]="menu6"
	while (x[i])
	{
		artist=(x[i].childNodes[0].nodeValue);
		document.getElementById(myMenus[i]).innerHTML=artist;
		i++;
	}
}