  document.getElementById('main-wrapper')
	.style.display = '';
let postHeaderClass = document
	.getElementsByClassName(
		'post-header');
let ourpostHeaderElement =
	postHeaderClass[0];
let descOfProg =
	"<p style='color:white;text-align:center'> Keyword Counter is a Web Tool created by Yunus Emre Vurgun. This tool lets you count certain keywords within your text.</p><br/><br/>";
 
ourpostHeaderElement.innerHTML =
	'<div style="padding-top:1vw;color: white; text-align: center;  text-shadow: orange 1px 1px 1px, blue 0px 1px 1px, rgb(0, 0, 0) 2px 1px 1px;"> <h1 style="color:#fff; " class="post-title" id="titleBig">Keyword Counter</h1>' +
	
  
  
  descOfProg  +
  
  "<p>Your full text:</p>"+
  "<textarea id='txtarea1' style='resize:none;max-width:450px;max-height:500px;width:300px;height:300px;'></textarea><br><br>"+
  "<p>Your keyword:</p>"+
  "<textarea id='txtarea2' style='resize:none;max-width:250px;max-height:50px;width:250px;height:50px;'></textarea><br><br>"+
  "<br><br><button id='countButton'>Count</button><br><br><p id='resultP'>-111--</p>"
  
  
  
  
+	'</div>';
 
  
 
  
  
  let getCountButton = document.getElementById('countButton');
  let getParagraphBox =document.getElementById('txtarea1');
  let getKeywordBox= document.getElementById('txtarea2');
  let getResultDisplayBox=document.getElementById('resultP');
  let count1;
  
 
  
  function clickFunction(){
  
     getResultDisplayBox.innerText="";
    
    if(getParagraphBox.value.length<1||getKeywordBox.value.length<1){
      alert('both fields need to have a value');
    }else{
      
      
      let paragraph = getParagraphBox.value;
            let keyword = getKeywordBox.value;
     
      
      let a=0;
      
      let b=0;
       
   
      
      while(1){
        
        a = paragraph.indexOf(keyword,a);  //index of keyword occurance
        
        if(a >= 0){      //if occurance is present
          
          a++;            // a will get bigger than the last index so it doesn't count the same one again
          b++;            // b will hold the actual count, because a will drop to -1 when there are no more left -yunus
          
          
        }else{
         break; 
          
        }
        
        
      }
      
       getResultDisplayBox.innerText=b;
      
    }
  
    
  }
  
  
  getCountButton.addEventListener('click',clickFunction);
  
  




//////////////////////////////////////////// HTML VERSION BELOW ////////////////////////////////////


/*






<style>
  #titleBig{
    
    
    font-family:arial;
    
  }
  
  #countButton{
    font-size:20px;
    font-family:arial;
    background-color:#2560e4;
    color:white;
    border:0px solid white;
    border-radius:10px;
  }
  
  #txtarea1{   border:0px solid white;
    border-radius:10px;
     background-color:rgb(224,224,224);
    color:black;
    font-family:arial;
  }
  
  #txtarea2{   border:0px solid white;
    border-radius:10px;
     background-color:rgb(224,224,224);
    color:black;  font-family:arial;
  }
  
  #resultP{
    
    font-size:40px;
    color:blue;
    filter:drop-shadow(0 0 3px white);
  }
</style>


<script> 
  
  document.getElementById('main-wrapper')
	.style.display = '';
let postHeaderClass = document
	.getElementsByClassName(
		'post-header');
let ourpostHeaderElement =
	postHeaderClass[0];
let descOfProg =
	"<p style='color:white;text-align:center'> Keyword Counter is a Web Tool created by Yunus Emre Vurgun. This tool lets you count certain keywords within your text.</p><br/><br/>";
 
ourpostHeaderElement.innerHTML =
	'<div style="padding-top:1vw;color: white; text-align: center;  text-shadow: orange 1px 1px 1px, blue 0px 1px 1px, rgb(0, 0, 0) 2px 1px 1px;"> <h1 style="color:#fff; " class="post-title" id="titleBig">Keyword Counter</h1>' +
	
  
  
  descOfProg  +
  
  "<p>Your full text:</p>"+
  "<textarea id='txtarea1' style='resize:none;max-width:450px;max-height:500px;width:300px;height:300px;'></textarea><br><br>"+
  "<p>Your keyword:</p>"+
  "<textarea id='txtarea2' style='resize:none;max-width:250px;max-height:50px;width:250px;height:50px;'></textarea><br><br>"+
  "<br><br><button id='countButton'>Count</button><br><br><p id='resultP'>-111--</p>"
  
  
  
  
+	'</div>';
 
  
 
 
</script>
<script>
  
  
  
  let getCountButton = document.getElementById('countButton');
  let getParagraphBox =document.getElementById('txtarea1');
  let getKeywordBox= document.getElementById('txtarea2');
  let getResultDisplayBox=document.getElementById('resultP');
  let count1;
  
 
  
  function clickFunction(){
  
     getResultDisplayBox.innerText="";
    
    if(getParagraphBox.value.length<1||getKeywordBox.value.length<1){
      alert('both fields need to have a value');
    }else{
      
      
      let paragraph = getParagraphBox.value;
            let keyword = getKeywordBox.value;
     
      
      let a=0;
      
      let b=0;
       
   
      
      while(1){
        
        a = paragraph.indexOf(keyword,a);  //index of keyword occurance
        
        if(a >= 0){      //if occurance is present
          
          a++;            // a will get bigger than the last index so it doesn't count the same one again
          b++;            // b will hold the actual count, because a will drop to -1 when there are no more left -yunus
          
          
        }else{
         break; 
          
        }
        
        
      }
      
       getResultDisplayBox.innerText=b;
      
    }
  
    
  }
  
  
  getCountButton.addEventListener('click',clickFunction);
  
  
  
</script>
 
<br/>

<center><a style='color:white;background-color:black;border:1px solid black;border-radius:10px;' href='#'> &nbsp;&nbsp;&nbsp;View code on my GitHub&nbsp;&nbsp;&nbsp;</a></center>
<br/>
<noscript>Your browser does not support JavaScript!</noscript>





*/
