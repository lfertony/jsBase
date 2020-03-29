function temHabilidade(skills) {  
     var x = skills.indexOf("Javascript")
     if(x != -1){
         console.log(true);
     }else{
         console.log(false);
     }
}


var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills);