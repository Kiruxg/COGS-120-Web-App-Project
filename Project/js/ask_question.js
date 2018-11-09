function ask() {
  var btn = document.getElementById("submit");
  btn.addEventListener("click", () => {
    var list = document.getElementById("classes");
    var course = list.options[list.selectedIndex].value;
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    
    if (list.selectedIndex == 0)
      alert("Please select a course");
    else {
      console.log(course);
      var ref = firebase.firestore().collection("Courses");
      ref.doc(course).collection("Questions").doc(title).set({question: desc}).then(() => {
        window.location.href = "Project/../cse170/cse170.html"
      });
    }
  });
}

ask();