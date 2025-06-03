import { countriesUrl } from "./constants";

var allCountries = [];
export default async function getQuestions() {
  var response = await fetch(countriesUrl);
  var countriesJson = await response.json();
  allCountries = countriesJson
    .sort(() => Math.random() - 0.5)
    .map((country) => {
      const currencyKeys = country.currencies
        ? Object.keys(country.currencies)
        : [];
      const currencies = [];
      for (let key of currencyKeys) {
        currencies.push(country.currencies[key]?.name);
      }
      const languageKeys = country.languages
        ? Object.keys(country.languages)
        : [];
      const languages = [];
      for (let key of languageKeys) {
        languages.push(country.languages[key]);
      }
      return { ...country, currencies: currencies, languages: languages };
    });
  return prepareQuestions();
}

function prepareQuestions() {
  return [
    prepareCapitalQ(),
    prepareCurrencyQ(),
    prepareLeastPopulatedQ(),
    prepareMostPopulatedQ(),
    prepareContinentQ(),
    prepareBorderQ(),
    prepareLanguageQ(),
    prepareLargestAreaQ(),
    prepareSmallestAreaQ(),
    prepareIsUnMemberQ(),
  ];
}

function prepareCapitalQ() {
  var countriesWithCapital = allCountries.filter(
    (country) => country.capital && country.capital.length > 0
  );
  return {
    id: "CapitalQ",
    question: `What is the capital of the ${countriesWithCapital[0].name.common}?`,
    options: [
      countriesWithCapital[0].capital[0],
      ...countriesWithCapital
        .filter(
          (country) =>
            country.capital.indexOf(countriesWithCapital[0].capital[0]) == -1
        )
        .splice(0, 3)
        .map((country) => country.capital[0]),
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: countriesWithCapital[0].capital[0],
    selectedAnswer: null,
  };
}
function prepareCurrencyQ() {
  var countriesWithCurrency = allCountries.filter(
    (country) => country.currencies && country.currencies.length > 0
  );
  return {
    id: "CurrencyQ",
    question: `What is the currency of the ${countriesWithCurrency[1].name.common}?`,
    options: [
      countriesWithCurrency[1].currencies[0],
      ...countriesWithCurrency
        .filter(
          (country) =>
            country.currencies.indexOf(
              countriesWithCurrency[1].currencies[0]
            ) == -1
        )
        .splice(0, 3)
        .map((country) => country.currencies[0]),
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: countriesWithCurrency[1].currencies[0],
    selectedAnswer: null,
  };
}
function prepareLeastPopulatedQ() {
  return {
    id: "LeastPopulatedQ",
    question: `Which of the below country is least populated?`,
    options: [
      allCountries[2].name.common,
      allCountries[3].name.common,
      allCountries[4].name.common,
      allCountries[5].name.common,
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: [
      allCountries[2],
      allCountries[3],
      allCountries[4],
      allCountries[5],
    ].sort((a, b) => a.population - b.population)[0].name.common,
    selectedAnswer: null,
  };
}
function prepareMostPopulatedQ() {
  return {
    id: "MostPopulatedQ",
    question: `Which of the below country is most populated?`,
    options: [
      allCountries[6].name.common,
      allCountries[7].name.common,
      allCountries[8].name.common,
      allCountries[9].name.common,
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: [
      allCountries[6],
      allCountries[7],
      allCountries[8],
      allCountries[9],
    ].sort((a, b) => b.population - a.population)[0].name.common,
    selectedAnswer: null,
  };
}
function prepareContinentQ() {
  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America",
  ];
  return {
    id: "ContinentsQ",
    question: `Which continent does the country ${allCountries[10]} belongs to?`,
    options: [
      allCountries[10].continents[0],
      ...continents.filter(
        (continent) => allCountries[10].continents.indexOf(continent) == -1
      ),
    ]
      .splice(0, 4)
      .sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: allCountries[10].continents[0],
    selectedAnswer: null,
  };
}
function prepareBorderQ() {
  const countriesWithBorders = allCountries.filter(
    (country) => country.borders && country.borders.length > 0
  );
  const borderCountry = countriesWithBorders.find(
    (country) => country.cca3 === countriesWithBorders[11].borders[0]
  );
  return {
    id: "BorderQ",
    question: `Which country shares border with ${countriesWithBorders[11].name.common}?`,
    options: [
      borderCountry.name.common,
      ...countriesWithBorders
        .filter((country) => country.name.common !== borderCountry.name.common)
        .splice(0, 3)
        .map((country) => country.name.common),
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: borderCountry.name.common,
    selectedAnswer: null,
  };
}
function prepareLanguageQ() {
  var countriesWithLanguage = allCountries.filter(
    (country) => country.languages && country.languages.length > 0
  );
  return {
    id: "LanguageQ",
    question: `What is the majority spoken language of the ${countriesWithLanguage[12].name.common}?`,
    options: [
      countriesWithLanguage[12].languages[0],
      ...countriesWithLanguage
        .filter(
          (country) =>
            country.languages.indexOf(countriesWithLanguage[12].languages[0]) ==
            -1
        )
        .splice(0, 3)
        .map((country) => country.languages[0]),
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: countriesWithLanguage[12].languages[0],
    selectedAnswer: null,
  };
}
function prepareLargestAreaQ() {
  return {
    id: "LargestAreaQ",
    question: `Which of the below country is largest by area?`,
    options: [
      allCountries[13].name.common,
      allCountries[14].name.common,
      allCountries[15].name.common,
      allCountries[16].name.common,
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: [
      allCountries[13],
      allCountries[14],
      allCountries[15],
      allCountries[16],
    ].sort((a, b) => b.area - a.area)[0].name.common,
    selectedAnswer: null,
  };
}
function prepareSmallestAreaQ() {
  return {
    id: "SmallestAreaQ",
    question: `Which of the below country is smallest by area?`,
    options: [
      allCountries[17].name.common,
      allCountries[18].name.common,
      allCountries[19].name.common,
      allCountries[20].name.common,
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: [
      allCountries[17],
      allCountries[18],
      allCountries[19],
      allCountries[20],
    ].sort((a, b) => a.area - b.area)[0].name.common,
    selectedAnswer: null,
  };
}
function prepareIsUnMemberQ() {
  var unCountry = allCountries.find((country) => country.unMember);
  return {
    id: "IsUnMemberQ",
    question: "Which of the following country is not a member of UNO?",
    options: [
      unCountry.name.common,
      ...allCountries
        .filter((country) => !country.unMember)
        .splice(0, 3)
        .map((country) => country.name.common),
    ].sort(() => Math.random() - 0.5),
    isAnswered: false,
    correctAnswer: unCountry.name.common,
    selectedAnswer: null,
  };
}
