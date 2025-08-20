// This function is for decoding Pixel Lide share links

// Set Al to window's location
var Al=location.href

// Function for re-Expanding link
window.ReExpandLink=function(Code){
var i=Code; 
i=i.replaceAll('=',',0,0,0,1,1;');
i=i.replaceAll('_',',0,0,0,').replaceAll(']',',*');
i=i.replaceAll('[','1,1,0,').replaceAll('+','%%');
i=i.replaceAll('-','@%').replaceAll(')',',1');
i=i.replaceAll('(',',!').replaceAll('*','0,0,0,1,1;');
i=i.replaceAll('&','0,0,0,').replaceAll('^','1;');
i=i.replaceAll('%','1,').replaceAll('$','0,');
i=i.replaceAll('#',',{').replaceAll('@','},');
i=i.replaceAll('!','0.'); return i;
return Code; 
};

// Check if it's a V2url (version 2 url) - we don't wanna assume that all urls are the new version so older url's still work!
if(Al.indexOf("V2url")!==-1){
var RedirectLink=ReExpandLink(Al.replace("V2url",""))
alert(RedirectLink);
window.location=RedirectLink;
}
window.addEventListener("keypress",function(event){
	if(event.key==='`'){
		window.swal(prompt("Testing info - H.A.\n\n - Insert note below:","- Insert note over here - ")); 
	}
})
document.bgColor='black'; // Dark background color for document 
Update24 = function(){

}
window.setInterval(Update24,1000);
