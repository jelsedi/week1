function gradeGenerator(score) 
{
  if (score > 79) {
  grade = "A";
} 
else if (score >= 60 && score <= 79) {
  grade = "B";
}
 else if(score >=49 && score <= 59){
  grade = "C";
} 
else if(score >= 40 && score <= 59){
  grade = "D";
} 
else if(score < 40){
  grade = "E";
}
return grade;
}
  
