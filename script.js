function displayChampion() {
  var championInfo = document.getElementById('championInfo');
  var championName = document.getElementById('championName').value;

  championInfo.innerHTML = 'The Champion is ' + championName;
}
