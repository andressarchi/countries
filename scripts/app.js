import { countries } from "./countries.js";

const makeCountry = (country) => {
    const container = document.createElement("div");
    container.classList.add("card-country");
    container.addEventListener("mouseenter", showInfo);

    const imgContainer = document.createElement("img");
    imgContainer.src = country.flag;
    imgContainer.alt = country.name;

    const nameContainer = document.createElement("h2");
    nameContainer.textContent = country.name;

    container.appendChild(imgContainer);
    container.appendChild(nameContainer);

    document.getElementById("section-country").appendChild(container);
};

const renderCountries = (countryList) => {
    countryList.forEach(country => makeCountry(country));
};

const showInfo = (event) => {
    const currentCountry = event.target.children[1].textContent;
    const infoCountry = countries.find(country => country.name === currentCountry);

    const demographics = document.getElementById("demographics");
    demographics.children[0].textContent = infoCountry.name;
    demographics.children[1].textContent = infoCountry.capital;
    demographics.children[2].textContent = infoCountry.population;
};

const search = () => {
    const input = document.getElementById("input-filter").value.toLowerCase();
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(input) || 
        country.capital.toLowerCase().includes(input)
    );
    renderCountries(filteredCountries);
};

const sortCountries = () => {
    const orderBy = document.getElementById("select-orderBy").value;
    const sortedCountries = [...countries]; 

    if (orderBy === "A-Z") {
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
    } else if (orderBy === "Z-A") {
        sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderCountries(sortedCountries);
};


document.getElementById("input-filter").addEventListener("input", search);
document.getElementById("select-orderBy").addEventListener("change", sortCountries);
window.addEventListener("DOMContentLoaded", () => renderCountries(countries));


// function  displayCountries() {
//     const countriesContainer = document.getElementById(`section-countries`);
//     countriesContainer.innerHTML=``;
//     countries.forEach(countries => {
//         const countriesContainer= document.createElement
//     });
// }