function displayChampion() {
  var championInfo = document.getElementById('championInfo');
  var championName = document.getElementById('championName');

  championInfo.innerHTML = 'The Champion is ' + championName.value;
}
