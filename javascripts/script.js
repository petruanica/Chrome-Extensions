async function fetchData() {
  const res = await fetch("https://api.covid19api.com/summary");
  const data = await res.json();
  const countries = data.Countries;

  chrome.storage.sync.get("country", ({ country }) => {
    const selectedCountry = countries.find((item) => item.Country == country);

    document.getElementById("date").innerHTML = data.Date.slice(0, 10);
    document.getElementById("areaName").innerHTML = selectedCountry.Country;
    document.getElementById("latestBy").innerHTML = selectedCountry.NewConfirmed;
    document.getElementById("deathNew").innerHTML = selectedCountry.NewDeaths;
  });
}
fetchData();
