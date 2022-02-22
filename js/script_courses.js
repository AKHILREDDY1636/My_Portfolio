certifications = [
  {
    cname: "MICROSOFT ASSOCIATION TECHNOLOGY",
    desc: "Completed Cloud Computing course at VNRVJIET under Microsoft Association Technology",
    learning_aspect:
      "Improved my technical skills. Gained the knowledge on creation and accessing the Azure account along with the saving and accessing of files.",
  },
  {
    cname: "INFOSYS CERTIFICATION",
    desc: "This certificate awarded for declaring as an Infosys Certified Software Programmer.",
    learning_aspect: "",
  },
  {
    cname: "PYTHON CERTIFICATE",
    desc: "Completed Programming for Everybody by University of Michigan.",
    learning_aspect: " Learnt Python as Programming Language",
  },
  {
    cname: "MACHINE LEARNING AND ARTIFICIAL INTELLIGENCE",
    desc: "Completed Machine Learning and Artificial Intelligence course",
    learning_aspect:
      "Acquired the basic skills on R, Python and machine learning algorithms",
  },
  {
    cname: "HONOR CODE CERTIFICATE",
    desc: "Achieved HONOR CODE Certificate by winning Coding challenge by AB apps and Games.",
    learning_aspect: "",
  },
];
res = "<div>";
for (let i of certifications) {
  temp =
    '<div class="card" style="background-color:rgb(244, 247, 247)">' +
    '<div class="card-header"><b>' +
    i.cname +
    '</b></div><div class="card-body">' +
    '<blockquote class="blockquote mb-1">' +
    "<p style='font-size:18px'>" +
    i.desc +
    "</p>";
  if (i.learning_aspect.length > 0) {
    temp +=
      '<footer class="blockquote-footer " style="font-size:16px"> ' +
      i.learning_aspect +
      "</footer>";
  }
  temp += "</blockquote></div></div><br/>";
  res += temp;
}
res += "</div>";
check_certification_courses = false;
function expand() {
  check_certification_courses = !check_certification_courses;
  if (check_certification_courses) {
    document.getElementById("c_courses").innerHTML = res;
  } else {
    document.getElementById("c_courses").innerHTML =
      "Please click on Certification Courses name";
  }
}
