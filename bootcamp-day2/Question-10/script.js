var button = document.getElementById("add");
var studentTable = [];

var table = document.getElementById("table-content");
var cells = table.rows[0].cells;
  
var body = document.getElementById("table-data");


window.addEventListener("load", function () {
  var data = localStorage.getItem("studentdata");
  if (data) {
    studentTable = JSON.parse(data);
    studentTable.forEach(setStudentRecord);
  }
});



button.addEventListener("click" , function(){

 
      var student = {}; 
    
      
  
  

 for(var i=0;i<cells.length-2;i++){
     
    if(i==0) {
     var name =  prompt("Enter Student Name");
     if(name){
           student[cells[i].innerText] = name;
     }else{
          alert("Name cannot be Empty");
          return;
     }
    }

    else{
      var value = prompt("Enter marks for " + cells[i].innerText);

      if(Validate(value)){
         student[cells[i].innerText] = Number(value);
      }
      else{
         alert("Invalid input, Type Marks within range 0 to 100");
         return;
      }}
 }


 var total = Number(getTotalMarks(student));

 
student[cells[6].innerText] = total;
student[cells[7].innerText] = getAverageMarks(total , 5);





studentTable.push(student);

localStorage.setItem("studentdata", JSON.stringify(studentTable));


setStudentRecord(student);
}
)













function Validate(value) {
  var num = Number(value);
  if (!isNaN(num) && num >= 0 && num <= 100) {
    return true;
  } else {
    return false;
  }
}



function getTotalMarks(student){
     var sum = 0 ;

for(var key in student){
    if(key == "Student Name") continue;

    sum += student[key];

   
}

return sum;
  
}


function getAverageMarks(sum, n){
      
   var result = sum/n;

   return result.toFixed(2);
   
}


function setStudentRecord(student){

 
var row = document.createElement("tr");
body.appendChild(row);



for(var key in student){

   var newCell = document.createElement("td")
    newCell.innerHTML = student[key];

    row.appendChild(newCell);

}
}