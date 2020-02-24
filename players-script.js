document.body.style.backgroundColor = '#49516F';
document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const url = "https://www.balldontlie.io/api/v1/players";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < json.data.length; i++) {
        results += '<div id="playerData"><h5>' + json.data[i].first_name + "</h5><br><hr>";
        results += "Player ID: " + json.data[i].id + "<br>";
        results += "Team: " + json.data[i].team.name + '</div>'
      }
      document.getElementById("playerResults").innerHTML = results;
      document.getElementById('footer').innerHTML = "<a href='https://github.com/jschol3s/CreativeProject2'>GitHub Repository Link</a>";
    });
});
