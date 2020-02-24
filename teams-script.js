document.body.style.backgroundColor = '#49516F';
document.getElementById("getTeams").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://www.balldontlie.io/api/v1/teams"
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < json.data.length; i++) {
        results += "<div id='teamData'><p>";
        results += "<h5>" + json.data[i].full_name + "</h5><br><hr>";
        results += "Conference: " + json.data[i].conference + "<br>";
        results += "Division: " + json.data[i].division + "<br>";
        results += "Team ID: " + json.data[i].id;
        results += "</p></div>";
      }
      document.getElementById("teamResults").innerHTML = results;
    });
});
