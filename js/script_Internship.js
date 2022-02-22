var internships = [
  "Completed my internship in Cyber Security (CID office, Telangana State Government) for the duration of 45 days",
  "Completed internship in Amazon (Amazon Development Center, Hyderabad) for duration of 2 months",
];
opening_closing_tags = [false, false];
function onInternship(choice) {
  console.log(opening_closing_tags);
  if (opening_closing_tags[choice] == false) {
    opening_closing_tags[choice] = !opening_closing_tags[choice];
    var temp =
      '<div class="card alert-success"><div class="card-body">' +
      internships[choice] +
      "</div></div>";
    document.getElementById("intern" + choice).innerHTML = temp;
  } else {
    opening_closing_tags[choice] = !opening_closing_tags[choice];
    document.getElementById("intern" + choice).innerHTML = "";
  }
}
