var ref = firebase.firestore().collection("Courses/CSE 170/Questions");

function getQuestion() {
  var id = 1;
  var section = document.getElementById("qa_section");
  ref.get().then((list) => {
    list.forEach((question) => {
      var post = document.createElement("BUTTON");
      post.setAttribute("style", "display:block;");
      post.setAttribute("id", "question #" + id);
      post.appendChild(document.createTextNode(question.id));
      section.appendChild(post);
      id++;
      
      post.addEventListener("click", (e) => {
        window.location.href = "Project/../question/question1.html";
      });
    });
  });
}

getQuestion();