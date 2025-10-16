function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/*Math Part*/
const cell_count = document.getElementById('cell_count');
const cell_density = document.getElementById('cell_density');
const amount_to_add = document.getElementById('amount_to_add');

function update_density() {
            const cell_count = document.getElementById('cell_count');
            val = (cell_count.value/2)*10000
            cell_density.value = val.toExponential(2);
            const standard_count = document.getElementById('standard_count');
            val2 = (standard_count.value/cell_density.value)*1000;
            amount_to_add.value = val2.toFixed(0);

        }
setInterval(update_density, 100);