check_show_details = false;
details_text =
  '<br/> <div class="card" style="width: 15rem;"><div class="card-header"><b>Profile</b></div>' +
  '<ul class="list-group list-group-flush">' +
  '<li class="list-group-item">9100718922</li>' +
  '<li class="list-group-item" style="font-size: 13px;">akhilreddy.donakonda@gmail.com</li>' +
  '<li class="list-group-item "><button class="btn btn-dark" onClick="onOtherDetails()" id="other_details">Show other Details</button></li>' +
  "</ul></div> <br/>";

check = false;
arr = [
  "Father’s Name : DONAKONDA RAMREDDY",
  "Date of Birth :27-07-1999",
  "Gender : MALE",
  "Languages Known : English, Telugu, Hindi",
  "Personal Interests : Basketball, Ball Badminton, Cricket, Dance",
];

function onShowDetails() {
  check_show_details = !check_show_details;
  console.log(check_show_details);
  if (check_show_details === true) {
    document.getElementById("area_details").innerHTML = details_text;
    document.getElementById("details").innerHTML = "Close Details";
  } else {
    document.getElementById("area_details").innerHTML = "<br/>";
    document.getElementById("details").innerHTML = "Show Details";
    check = false;
    document.getElementById("area_other_details").innerHTML = "";
    document.getElementById("other_details").innerHTML = "Show other Details";
  }
}

function onOtherDetails() {
  check = !check;
  if (check === true) {
    text =
      '<div class="card" style="width: 15rem;background-color:white"><div class="card-header"><b>Details</b></div>' +
      '<ul class="list-group list-group-flush">';
    for (var i of arr) {
      var temp = i.split(":");
      text +=
        '<li class="list-group-item">' +
        "<b>" +
        temp[0] +
        ":&nbsp;</b>" +
        "<i>" +
        temp[1] +
        "</i>" +
        "</li>";
    }
    text += "</ul></div> <br/>";
    document.getElementById("area_other_details").innerHTML = text;
    document.getElementById("other_details").innerHTML = "Close other Details";
  } else {
    document.getElementById("area_other_details").innerHTML = "<br/>";
    document.getElementById("other_details").innerHTML = "Show other Details";
  }
}
