var student = document.getElementById("student-names");
var grade = document.getElementById("grades");
var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");

saveButton.addEventListener("click", function(event) {
event.preventDefault();

  var studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim()
  };
var stringified
  console.log('type of student grade: ', typeof studentGrade);
  localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
  renderMessage();

});

function renderMessage() {
  var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
  console.log('localStorageGrade: ', typeof localStorageGrade, localStorageGrade)
  var lasGrade = JSON.parse(localStorageGrade);
  console.log('typeof lastGrade: ', typeof lastGrade);
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}