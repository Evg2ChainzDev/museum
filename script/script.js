
//Testing for all possible combinations
//exam = 51, projects = 2: expected 50 to equal 75

const exam1 = 51;
const projects1 = 2;

function finalGrade (exam, projects) {
  if ((exam>90)||(projects>10)) {
    return 100
  } else if ((exam>75)&&(projects>=5)) {
    return 90
  } else if ((exam>50)&&(projects>=2)) {
    return 50
  } else return 0 // final grade
}



console.log(finalGrade(exam1,projects1));
