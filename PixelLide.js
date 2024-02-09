DefaultCode=function(){
console.info("This project is owned by Lide studios."+
"\nPlease do not try accessing this project's code or use/"+
" remix it without giving credit to Lide studios (owned by Hamzah Alani)"+
"\n\nThis project was also created with Wick Editor 1.19\n\n"+
"(Credits are in the \"about\" section)");
project.Issue+='/1.24/';
if(window.localStorage.getItem("save")!==null&&window.localStorage.getItem("save")!=="")
blob.gotoAndStop(6);
project.placePixels=false;
var PF=window.platform+"...";
project.Issue=PF+'/12/';
OSM_=null;
project.OSM=null;
project.OSF=null;
project.QEL=true;
project.QFL=true;
stop();
this.project.renderBlackBars=false;
this.num=1;
project.CloneArray=[];
project.LastFrame=null;
pixel.activeFrame._children[0].opacity=1;
pixel.activeFrame._children[0].fillColor='black';
project.Seconds=0;
project.loading_progress=0;
FileName=null;
File1=null;
}

// At the moment, this function is USELESS
SweetAlert=function(){
//     window.swal(Code,{
//     content: {
//     element: "input",
//     attributes: {
//         placeholder: Code,
//         value: Code,
//     },
//   },
//   closeOnClickOutside: false,
// });
}

Unite=function(P1,P2){
    var Color=[P1.red,P1.green,P1.blue];
    var A=["CompoundPath",{
        "applyMatrix": true,
        "children": [["Path",P1.json[1]],["Path",P2.json[1]]],
        "fillColor": Color,
        "strokeColor": [0,0,0],
        "strokeCap": "round"
    }];
    P1.json=A;
    P2.remove();
};

LoadSave=function(){
    if(window.localStorage.getItem("save")!==null&&window.localStorage.getItem("save")!==""){
    var TxtCode=window.localStorage.getItem("save");
    if(TxtCode.split('')[TxtCode.split('').indexOf("/")+1]==='/'){
        project.runCode(TxtCode);
    }else{
        alert("Process has been disabled due to an error in the code... \n\nCode:\n"+TxtCode);
        Note('Error!','red');
        project.placePixels=true;
    }
    }else{
        Note("Can't load Project!",'red');
        project.placePixels=true;
    }
    File1=null;
};

OS=function(frame){
    if(project.OSF!==frame){
        line(project.Get_Onionskin_Info(project.currentFrameNumber),'',1);
        project.OSF=frame;
    }
};

About=function(){
window.swal({
    title: "Pixel Lide",
    text:"- Owned by Lide Studios -",
    icon: "https://pixel.lide.repl.co/blob.png",
    
  buttons:{
    FIRST:{
      text: "Credits",
      value: "FIRST",
    },
    NEXT:{
        text: "Other",
        value: "NEXT"
    },
  },
}).then((value) => {
  switch (value) {
    case "FIRST":
      swal({
          title: "Pixel Lide",
      text: "Pixel Lide is owned by Lide Studios\n\n"+
      "Created by: \nHamzah Alani\n\nCreated with:\nWick Editor 1.19 "+
      "& Repl.it\n\nGREAT thanks to the people of the Wick Forums!\n\n"+
      "Other Sources:\nsweetalert.js\n\nThanks for reading :)"});
      break;
 
    case "NEXT":
      swal({
          title: "Pixel Lide",
          text: "By visiting Pixel Lide, you agree that Pixel Lide is "+
          "not responsible for any actions you make on this software. "+
          "\n\nAbout Privacy? \nPlease read the following information "+
          "fully in order to have a better understanding of how your "+
          "information is processed. \n\nPixel Lide doesn't have access to"+
          " any of your files, but this software is yet capable of reaching"+
          "certain information such as:\n\n"+
          " - Any JS errors that occured during a session\n"+
          " - You're timezone and amount of time spent here\n"+
          " - Your platform (Ex: Chromebook, windows, ect.)\n"+
          " - Other (reach out to get more info about this)\n\n"+
          "These information are used in order to help update this software, fix issues,"+
          " and provide the best expierence for users. \n\n"+
          
          "Lide Studios would like to also assure you that "+
          "Pixel Lide isn't capable of accessing any form or type of "+
          "information that it doesn't have access to.\n\n"+
          
          "If you're worried about privacy, you can always contact us for more information, "+
          "try enabling npm, or use Pixel Lide offline."+
          
          "\n\nFor more information, feel free to reach out to Pixel Lide through this email:\n"+
          " hanzohAlani@gmail.com\n\n"+
          "Thanks for reading!"
      });
      break;
    default:
      swal("Ok");
  }
});
};

ErrorReport=function(){
    var C=project.Issue;
    window.swal({
    title: "Bug Report?",
    text:"You're issue has been identified with the following code: \n\n"+C+"\n\nShare this code with us in a bug report in order to help us fix issues! Thanks :)",
    icon: "warning",
    });
};

Note=function(txt,clr){
    project.note.text.setText(txt);
    project.note.gotoAndPlay(1);
    project.note.object.activeFrame._children[0].fillColor=clr;
};

GiveCode=function(txt){
    var name;
    if(window.FileName===null)
    name=prompt("Enter file name...",'Pixel_Lide_')+".blob";
    else
    name=prompt("Enter file name...",window.FileName.split('.')[0])+".blob";
    if(name==='null.blob')
    name='Pixel.blob';
    var blob = new Blob([project.CleanCode()], {type: "text/plain;charset=utf-8"});
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.download = name;
    link.href = url;
    link.click();
};

EnterCode=function(UsedTextCode){
    const el = document.createElement('input');
    el.id='EL';
    el.style.display = 'none';
    el.setAttribute('type', 'file');
    el.click();
    el.onchange = function() {
        // https://stackoverflow.com/questions/33923985/parameter-is-not-of-type-blob/33925167#33925167
        window.FileName = el.files[0].name;
        
        var reader = new FileReader();
        var fileToRead = el.files[0];
        reader.addEventListener("loadend", function() {
            var A=reader.result;
            window.File1=A;
        });
        reader.readAsText(fileToRead);
    };
    project.Issue+='/1.14/';
};

RunLinkCode=function(){
    var WindowLocation=" "+window.location+" ";
    var LinkCode=WindowLocation.split("?")[1];
    if(LinkCode.split('')[LinkCode.split('').indexOf("/")+1]==='/'){
        if(LinkCode.indexOf("V2url")===-1)
        window.localStorage.setItem("save",LinkCode);
        else
        window.localStorage.setItem("save",ReExpandLink(LinkCode.replace("V2url",""))+" ");
        project.LoadSave();
    }else{
        alert("Link can't be processed...");
        Note("Error with Link",'red');
        project.Issue+='/1.15.6/';
    }
};

CleanCode=function(){
    var C=-1;
    var txt="";
    while(C<project.CloneArray.length){
        C+=1;
        if(project.CloneArray[C]!==undefined)
        txt+=project.CloneArray[C]+";";
    }
    return project.TL.parentFrame.end+"//"+txt.replaceAll(" ","").replaceAll("red:","").replaceAll("green:","").replaceAll("blue:","")+"//"+project.bg.activeFrame._children[0].fillColor;
};

restartProject=function(){
    project.bg.activeFrame._children[0].fillColor='white';
    project.gotoAndStop(1);
    project.blob.gotoAndStop(6);
    project.TL.parentFrame.end=1;
    project.TL.number=1;
    project.TL.scrollX=-180;
    project.LastFrame=null;
    project.pixel.activeFrame._children[0].opacity=1;
    project.pixel.activeFrame._children[0].fillColor='black';
    project.CloneArray=[];
    while(project.activeLayer.frames[0]._children.length!==0){
        project.activeLayer.frames[0]._children[project.activeLayer.frames[0]._children.length-1].remove();
    }
    console.info("Project restarted - H.A.");
    project.Issue+='/1.16/';
};

runCode=function(textCode){
    var text;
try{
    text=textCode.replaceAll("red:","").replaceAll("green:","").replaceAll("blue:","").replaceAll("{","").replaceAll("}","").replaceAll(" ","");
}catch(err){
    try{
        text=textCode.replaceAll(" ","").replaceAll("{","").replaceAll("}","");
    }catch(err){
        text=textCode;
        Note("Error with code",'red');
    }
}
    var Sets=text.split("//");
    var code=Sets[1].split(';');
    var number=-1;
    var LoadedColor;
    if(Sets.length>=3){
        try{
        var BG_Clr=textCode.split('//')[2];
        var BG_Cl2=BG_Clr.replaceAll(" ","").replace("{","").replace("}","");
        var BG_Arr=BG_Cl2.split(',');
        var BG_Red=BG_Arr[0].split(':')[1];
        var BG_Grn=BG_Arr[1].split(':')[1];
        var BG_Blu=BG_Arr[2].split(':')[1];
        project.bg.activeFrame._children[0].fillColor=[BG_Red*1,BG_Grn*1,BG_Blu*1]
        }catch(err){
            project.bg.activeFrame._children[0].fillColor=[1,1,1];
            project.Issue+='/1.21.2/';
        }
    }
    project.CloneArray=code;
    while(project.activeLayer.frames.length<Sets[0]*1){
        project.activeLayer.addFrame(new Wick.Frame({start: project.activeLayer.frames.length+1}));
    }
    project.TL.parentFrame.end=Sets[0]*1;
    while(number<code.length){
        number+=1;
        try{
            if(code[number]!==""
             &&code[number]!==null
             &&code[number]!==undefined){
                var Part=code[number].split(',');
                project.gotoAndStop(Part[5]*1);
                project.activeFrame.end=project.activeFrame.start;
                LoadedColor={ red: Part[2], green: Part[3], blue: Part[4] };
                project.timeline.getChildren('Layer')[0].frames[0]._children[0].activeFrame._children[0].fillColor=LoadedColor;
                project.timeline.getChildren('Layer')[0].frames[0]._children[0].activeFrame._children[0].opacity=Part[6]*1;
                let Pxl=project.timeline.getChildren('Layer')[0].frames[0]._children[0].clone();
                Pxl.x=Part[0]*1;
                Pxl.y=Part[1]*1;
                Pxl.activeFrame._children[0].fillColor=LoadedColor;
                Pxl.breakApart();
            }
        }catch(err){ 
            alert("There was an error while trying to load project... \n\nTry again later...");
            Note("Error loading project",'red'); project.Issue+='/1.24/'
        } 
        // if(project.QFL){
            try{
                var P1=project.activeFrame._children[project.activeFrame._children.length-1];
                var P2=project.activeFrame._children[project.activeFrame._children.length-2];
                    if(P1.fillColor===P2.fillColor&&
                    P1.opacity===P2.opacity){
                    var A=P1.opacity;
                    window.Unite(P1,P2);
                    project.activeFrame._children[project.activeFrame._children.length-1].opacity=A;
                    project.activeFrame._children[project.activeFrame._children.length-1].strokeWidth=0;
                }
            }catch(err){
                console.warn("Error with finding correct paths to adjust while running code - H.A.")
                project.Issue+='/1.22/';
            }
        // }
    }
    project.loaded_fully=true;
};

obj=function(colorObj){
    colorObj.cursor='pointer';
    project.ClrNum=null;
    colorObj.num=colorObj.uuid;
    colorObj.addScript('update',
    "if(project.ClrNum===this.num){\n"+
    "this.opacity=1;\n}else\nthis.opacity=0.5;\n"+
    "if(this._mouseState==='down'"+"||isKeyJustPressed('"+colorObj.ShortcutKey+"')||isKeyJustPressed(this.ShortcutKey2)){\n"+
    "project.pixel.activeFrame._children[0].fillColor=this.activeFrame._children[1].fillColor;\n"+
    "project.ClrNum=this.num;\n}");
};

Get_Onionskin_Info=function(frame){
    var number=-1;
    var Results=[];
    var Frames;
    if(project.OSM===1)
    Frames=[frame-1];
    else if(project.OSM===2)
    Frames=[frame+1];
    else Frames=[frame-1,frame+1];
    while(number<project.CloneArray.length){
        number+=1;
        try{
            if(project.CloneArray[number]!==""
             &&project.CloneArray[number]!==null
             &&project.CloneArray[number]!==undefined){
                var Part=project.CloneArray[number].split(',');
                var X=Part[0]*1;
                var Y=Part[1]*1;
                var W=12.782/2;
                if((Frames.indexOf(Part[Part.length-2]*1)!==-1||Part[Part.length-2]*1===frame+1)&&X!==undefined&&X!==''&&X!==null&&Y!==undefined&&Y!==''&&Y!==null&&!isNaN(X)&&!isNaN(Y)){
                    Results=Results.concat([[X-W,Y-W],[X+W,Y-W],[X+W,Y+W],[X-W,Y+W],[X-W,Y-W]]);
                }
            }
        }catch(err){ 
            Note("Error with onion skinning...",'red'); project.Issue+='/25/';
        }
    }
    return Results;
};

Tag_To_ClipBoard=function(TXT){
    textToCopy = document.createElement("textarea");
    document.body.appendChild(textToCopy);
    textToCopy.value = TXT;
    textToCopy.select();
    document.execCommand("copy");
    document.body.removeChild(textToCopy);
};