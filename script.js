function saveResume() {
  const content = document.getElementById('resume-content').innerHTML;
  localStorage.setItem('resume', content);
  alert("Resume saved!");
}

function loadResume() {
  const content = localStorage.getItem('resume');
  if (content) {
    document.getElementById('resume-content').innerHTML = content;
    alert("Resume loaded!");
  } else {
    alert("No saved data found.");
  }
}
