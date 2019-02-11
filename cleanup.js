// Clean up names
function cleanBuildMonitorNames(){
  document.querySelectorAll('#widgets h2 a').forEach(function(a){
  
  Console.log(a.innerHTML);
     // remove org name
      a.innerHTML = a.innerHTML.replace('dev-ci-cd Â» ', '');
     // Remove branch name
     // a.innerHTML = a.innerHTML.replace(/Â».+/, '');
  })
}

document.addEventListener('DOMContentLoaded', function () {
  if(document.body.classList.contains('build-monitor')) {
    setTimeout(cleanBuildMonitorNames, 100)
    setTimeout(cleanBuildMonitorNames, 500)
  }
});
