
document.addEventListener("DOMContentLoaded", ready);

localStorage.setItem('noteStorage');



function ready(){

    var note = document.getElementById('noteText').value;
    
        if(localStorage.noteStorage == " "){
            document.getElementById('noteText').value = "I want to note...";

        }else{
            document.getElementById('noteText').value = localStorage.noteStorage;
  
        }
        
    
    
    document.getElementById('saveBtn').addEventListener("click", function(){
        note = document.getElementById('noteText').value;
    
        cutTegs(note);
    
        SaveNote(note);    
      
    });
    
    
    
  


}

function cutTegs(str) {
    var regex = /<\/?[^>]+(>|$)/gi,
        result = str.replace(regex, "");
   
       note = result;
   }


 
 

 function SaveNote(){

    localStorage.noteStorage = note;

    alert("Note saved!")
    document.getElementById('noteText').value = localStorage.noteStorage;
    return;
 }

