check_show_arr = [false, false];
index =
  "<br/> " +
  '<div class="card" style="width: 12rem;"><div class="card-header">INDEX</div>' +
  '<ul class="list-group list-group-flush">' +
  '<li class="list-group-item" ><a href="#academic_details">Academic Details</a></li>' +
  '<li class="list-group-item"><a href="#technical_skills">Technical Skills</a></li>' +
  '<li class="list-group-item"><a href="#certificate_courses">Certificate Courses</a></li>' +
  '<li class="list-group-item"><a href="#industrial_visits">Industrial Visits</a></li>' +
  '<li class="list-group-item"><a href="#working_experience">Working Experience</a></li>' +
  '<li class="list-group-item"><a href="#personal_projects">Personal Projects</a></li>' +
  '<li class="list-group-item"><a href="#internships">Internships</a></li>' +
  '<li class="list-group-item"><a href="#other_activities">Other Activities</a></li>' +
  "</ul></div>";
arr_position = ["area_index_side"];

btn_open_close = ["btn-index-0"];

function OnShowIndex(choice) {
  check_show_arr[choice] = !check_show_arr[choice];
  if (check_show_arr[choice] === true) {
    document.getElementById(arr_position[choice]).innerHTML = index;
    document.getElementById("btn-index-" + choice).innerHTML = "Close Index";
  } else {
    document.getElementById(arr_position[choice]).innerHTML = "";
    document.getElementById("btn-index-" + choice).innerHTML = "Show Index";
  }
}
