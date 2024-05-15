document.getElementById('opret-chauffør-knap').addEventListener('click', function() {
  var chaufførInputs = document.querySelector('.chauffør-inputs');
  chaufførInputs.style.display = 'block';
});

document.getElementById('chauffør-annuler').addEventListener('click', function() {
  var chaufførInputs = document.querySelector('.chauffør-inputs');
  chaufførInputs.style.display = 'none';
});