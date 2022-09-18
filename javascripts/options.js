const input = document.getElementById("input");
const dropdown = document.getElementById("myDropdown");

function filterFunction() {
  let filter = input.value.toUpperCase();
  let a = dropdown.getElementsByTagName("a");

  for (const item of a) {
    let txtValue = item.innerHTML;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}

async function getCountries() {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  const countries = data.Countries;

  for (const country of countries) {
    let item = document.createElement("a");
    item.innerHTML = country.Country;
    item.addEventListener("click", () => {
      chrome.storage.sync.set({ country: `${item.innerHTML}` });
      console.log(`Current country set to ${item.innerHTML}`);
      window.close();
    });
    dropdown.appendChild(item);
  }
}

input.addEventListener("keyup", filterFunction);
getCountries();
