var internships = [
  "Completed my internship in Cyber Security (CID office, Telangana State Government) for the duration of 45 days<ul><li>Took training on different tools like WireShark</li><li>Played an important role in solving two cyber cases</li></ul>",
  "Completed internship in Amazon (Amazon Development Center, Hyderabad) for durationof 3months. During this internship, I contributed my work for FINTECH team,one of most efficient" +
    "and crucial team in Developing Teams. <ul><li> Developed internal site using ReactJS.</li><li> Developed an automatic tool in which all the business reports will be directly connected to WorkDocs.</li></ul> ",
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
