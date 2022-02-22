projects = [
  {
    Title: "Hangman Game Project",
    "Technologies Used": "C++",
    Description:
      "Hangman is a popular word guessing game where the player attempts to build a missing word by guessing one letter at a time. After a certain number of incorrect guesses, the game ends and the player loses." +
      " The game also ends if the player correctly identifies all the letters of the missing word.",
    Output:
      "Generates the words based on the right guesses and terminates the game after specific number of wrong attempts.",
  },
  {
    Title: "Multiple Choice Quiz",
    "Technologies Used": "Java",
    Description:
      "This project helps us to create mock tests or any other competitive exams.",
    Output:
      "This code will generate multiple optional questions and we have to choose one and it should be the correct option.",
  },
  {
    Title: "Bingo Game Project",
    "Technologies Used": "Python",
    Description:
      "This project helps us to conduct a famous time pass game BINGO, But this is my current work to be completed.",
    Output:
      "This code will generate an number box from 1 to 25. By following some set of rules the elimination of lines horizontally or vertically can be done The person who eliminates 5 series of elements i.e lines will be the winner",
  },
  {
    Title: "Employee Background Verification",
    "Technologies Used": "HTML, CSS, JS, TypeScript, Angular, NodeJs, MongoDb",
    Description:
      "This project helps by saving time of every organization in verification of new hire ,who enters into that organization",
    Output:
      "It gives a id by which an organization can get all details instead of gathering.",
  },
];
projects_short_names = ["Hangman", "Quiz", "Bingo", "EBV"];
document.getElementById("temp").innerHTML = "hello";
function onProjectArea(choice) {
  if (choice == -1) {
    temp =
      '<p class="text-center">Click on above projects for detailed description</p>';
    for (var i in projects) {
      document.getElementById("area" + i).innerHTML =
        "<h6 class='nav-link  set-cursor' >" +
        projects_short_names[i] +
        "</h6>";
    }
  } else {
    project = projects[choice];
    temp = "<br/><h4 class='text-center'>" + project.Title + "</h4>";
    temp +=
      "<p class='text-center'>" + projects_short_names[choice] + "</p><br/>";
    temp +=
      "<hr/>" +
      '<div class="container"><div class="row"><div class="col-sm alert-link">Description: </div><div class="col-sm">' +
      project["Technologies Used"] +
      " </div></div></div>";
    temp +=
      "<hr/>" +
      '<div class="container"><div class="row"><div class="col-sm alert-link">Description: </div><div class="col-sm">' +
      project.Description +
      " </div></div></div>";
    temp +=
      "<hr/>" +
      '<div class="container"><div class="row"><div class="col-sm alert-link">Outcome: </div><div class="col-sm">' +
      project.Output +
      " </div></div></div>";

    document.getElementById("area" + choice).innerHTML =
      "<h6 class='nav-link set-cursor active' style='background-color: rgb(51, 40, 49);color: white;' >" +
      project.Title +
      "</h6>";
    for (var i in projects) {
      if (projects[i].Title != project.Title) {
        document.getElementById("area" + i).innerHTML =
          "<h6 class='nav-link  set-cursor' >" +
          projects_short_names[i] +
          "</h6>";
      }
    }
  }

  document.getElementById("project_area").innerHTML = temp;
}
