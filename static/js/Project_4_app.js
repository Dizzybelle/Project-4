// Creating the lists to populate the dropdown menus
const partyIDs = ["<select party>", "Democrat", "Republican", "Independent", "Other Party", "No Party Preference", 
                "Don't Know", "No Response"];
const ages = ["<select age>", 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 
              67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, "80+", "Don't Know", "No Response"];
const thermoBiden = ["<select Biden rating>", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 
                    62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
                    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, "Don't Know", 
                    "No Response"];
const thermoTrump = ["<select Trump rating>", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 
                    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 
                    62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
                    84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, "Don't Know", 
                    "No Response"];
const raceEthnicity = ["<select race/ethnicity>", "White, non-Hispanic", "Black, non-Hispanic",
                        "Hispanic", "Asian or Native Hawaiian/other Pacific Islander, non-Hispanic alone",
                        "Native American/Alaska Native or other race, non-Hispanic alone", 
                        "Multiple races, non-Hispanic", "Don't Know", "No Response"];
const income = ["<select income>", "Under $9,999", "$10,000-14,999", "$15,000-19,999", "$20,000-24,999",
                "$25,000-29,999", "$30,000-34,999", "$35,000-39,999", "$40,000-44,999", "$45,000-49,999",
                "$50,000-59,999", "$60,000-64,999", "$65,000-69,999", "$70,000-74,999", "$75,000-79,999",
                "$80,000-89,999", "$90,000-99,999", "$100,000-109,999", "$110,000-124,999", "$125,000-149,999",
                "$150,000-174,999", "$175,000-249,999", "$250,000 or more", "Don't Know", "No Response"];
const ideology = ["<select ideology>", "Liberal", "Moderate", "Conservative"];

// Populating the dropdown menu with options
function populateDropdowns() {
    const partyIDSelect = document.getElementById("PartyID_Options");
    const ageSelect = document.getElementById("Age_Options");
    const thermoBidenSelect = document.getElementById("Thermo_Biden_Options");
    const thermoTrumpSelect = document.getElementById("Thermo_Trump_Options");
    const raceEthnicitySelect = document.getElementById("Race_Ethnicity_Options");
    const incomeSelect = document.getElementById("Income_Options");
    const ideologySelect = document.getElementById("Ideology_Options");

    // partyID dropdown
    partyIDs.forEach(id => {
        const option = document.createElement("option");
        option.text = id;
        option.value = id;
        partyIDSelect.appendChild(option);
    });
    // age dropdown
    ages.forEach(age => {
        const option = document.createElement("option");
        option.text = age;
        option.value = age;
        ageSelect.appendChild(option);
    });   
    // thermoBiden dropdown
    thermoBiden.forEach(biden => {
        const option = document.createElement("option");
        option.text = biden;
        option.value = biden;
        thermoBidenSelect.appendChild(option);
    });        
    // thermoTrump dropdown
    thermoTrump.forEach(trump => {
        const option = document.createElement("option");
        option.text = trump;
        option.value = trump;
        thermoTrumpSelect.appendChild(option);
    });        
    // raceEthnicity dropdown
    raceEthnicity.forEach(race => {
        const option = document.createElement("option");
        option.text = race;
        option.value = race;
        raceEthnicitySelect.appendChild(option);
    });            
    // income dropdown      
    income.forEach(incomes => {
        const option = document.createElement("option");
        option.text = incomes;
        option.value = incomes;
        incomeSelect.appendChild(option);
    });
    // ideology dropdown
    ideology.forEach(id => {
        const option = document.createElement("option");
        option.text = id;
        option.value = id;
        ideologySelect.appendChild(option);
    });           
}

//Section on predicting how likely someone is to vote for Biden or Trump//
let selectedPartyID;
let partyNumber;
// Function to change partyID values
function optionChangedParty(value) {
    selectedPartyID = value;
    optionPartyNumber();
}
//Function to convert Party to coefficient values from each dummy variable
function optionPartyNumber() {
    if (selectedPartyID === "Democrat") {
        partyNumber = -1.17835265;
    } else if (selectedPartyID === "Republican") {
        partyNumber = 0.08216467;
    } else if (selectedPartyID === "Independent") {
        partyNumber = -0.62182148;
    } else {
        partyNumber = 0.35773164;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedAge;
let ageNumber;
// Function to change age dropdown values
function optionChangedAge(value) {
    selectedAge = value;
    //Update presidentVoteProb
    optionAgeNumber();
}
function optionAgeNumber() {
    if (!isNaN(selectedAge)) {
        ageNumber = selectedAge;
    } else {
        ageNumber = 0;
    }
    presidentVoteProb();
}

let selectedThermoBiden;
// Function to change ThermoBiden dropdown values
function optionChangedThermoBiden(value) {
    selectedThermoBiden = value;
    //Update presidentVoteProb
    optionThermoBidenNumber();
}
function optionThermoBidenNumber() {
    if (!isNaN(selectedThermoBiden)) {
        thermoBidenNumber = selectedThermoBiden;
    } else {
        thermoBidenNumber = 0;
    }
    presidentVoteProb();
}

let selectedThermoTrump;
// Function to change ThermoBiden dropdown values
function optionChangedThermoTrump(value) {
    selectedThermoTrump = value;
    //Update presidentVoteProb
    optionThermoTrumpNumber();
}
function optionThermoTrumpNumber() {
    if (!isNaN(selectedThermoTrump)) {
        thermoTrumpNumber = selectedThermoTrump;
    } else {
        thermoTrumpNumber = 0;
    }
    presidentVoteProb();
}

let selectedRaceEthnicity;
let raceEthnicityNumber
// Function to change right track dropdown values
function optionChangedRaceEthnicity(value) {
    selectedRaceEthnicity = value;
    //Update presidentVoteProb
    optionRaceEthnicityNumber();
}
//Function to convert RaceEthnicity to coefficient values from each dummy variable
function optionRaceEthnicityNumber() {
    if (selectedRaceEthnicity === "White, non-Hispanic") {
        raceEthnicityNumber = 0.24347618;
    } else if (selectedRaceEthnicity === "Black, non-Hispanic") {
        raceEthnicityNumber = -1.02958335;
    } else if (selectedRaceEthnicity === "Hispanic") {
        raceEthnicityNumber = -0.22075941;
    } else if (selectedRaceEthnicity === "Asian or Native Hawaiian/other Pacific Islander, non-Hispanic alone") {
        raceEthnicityNumber = -0.16054681;
    } else if (selectedRaceEthnicity === "Native American/Alaska Native or other race, non-Hispanic alone") {
        raceEthnicityNumber = -0.08241232;
    } else if (selectedRaceEthnicity === "Multiple races, non-Hispanic") {
        raceEthnicityNumber = -0.11045211;
    } else {
        raceEthnicityNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedIncome;
let incomeNumber
// Function to change RaceEthnicity dropdown values
function optionChangedIncome(value) {
    selectedIncome = value;
    //Update presidentVoteProb
    optionIncomeNumber();
}
//Function to convert RaceEthnicity to coefficient values from each dummy variable
function optionIncomeNumber() {
    if (selectedIncome === "Under $9,999") {
        incomeNumber = -0.3935856;
    } else if (selectedIncome === "$10,000-14,999") {
        incomeNumber = -0.26191344;
    } else if (selectedIncome === "$15,000-19,999") {
        incomeNumber = -0.27192622;
    } else if (selectedIncome === "$20,000-24,999") {
        incomeNumber = -0.07364834;
    } else if (selectedIncome === "$25,000-29,999") {
        incomeNumber = -0.4250685;
    } else if (selectedIncome === "$30,000-34,999") {
        incomeNumber = -0.66745867;
    } else if (selectedIncome === "$35,000-39,999") {
        incomeNumber = 0.153246;
    } else if (selectedIncome === "$40,000-44,999") {
        incomeNumber = 0.23074272;
    } else if (selectedIncome === "$45,000-49,999") {
        incomeNumber = -1.00303706;
    } else if (selectedIncome === "$50,000-59,999") {
        incomeNumber = 0.09926488;
    } else if (selectedIncome === "$60,000-64,999") {
        incomeNumber = -0.27398739;
    } else if (selectedIncome === "$65,000-69,999") {
        incomeNumber = -0.10804481;
    } else if (selectedIncome === "$70,000-74,999") {
        incomeNumber = 0.07272828;
    } else if (selectedIncome === "$75,000-79,999") {
        incomeNumber = 0.09253638;
    } else if (selectedIncome === "$80,000-89,999") {
        incomeNumber = -0.71568696;
    } else if (selectedIncome === "$90,000-99,999") {
        incomeNumber = 0.00183128;
    } else if (selectedIncome === "$100,000-109,999") {
        incomeNumber = 1.01291565;
    } else if (selectedIncome === "$110,000-124,999") {
        incomeNumber = 0.26735315;
    } else if (selectedIncome === "$125,000-149,999") {
        incomeNumber = 0.52147345;
    } else if (selectedIncome === "$150,000-174,999") {
        incomeNumber = 0.68193045;
    } else if (selectedIncome === "$175,000-249,999") {
        incomeNumber = -0.21814606;
    } else if (selectedIncome === "$250,000 or more") {
        incomeNumber = -0.08179698;
    } else {
        incomeNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let ideologyNumber;
// Function to change ideology values
function optionChangedIdeology(value) {
    selectedIdeology = value;
    optionIdeologyNumber();
}
//Function to convert ideology to coefficient values from each dummy variable
function optionIdeologyNumber() {
    if (selectedIdeology === "Liberal") {
        ideologyNumber = -1.18672884;
    } else if (selectedIdeology === "Conservative") {
        ideologyNumber = -0.26711137;
    } else {
        ideologyNumber = 0.09356239;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let probVoteBiden;
let probVoteTrump;
let probVoteLogOdds;
let probVoteOdds;
// Function to calculate probability of voting for Biden or Trump
function presidentVoteProb() {
    // Biden vote probability
        probVoteLogOdds = -2.23878003 + partyNumber + (-0.01267862 * ageNumber) + 
        (-0.00547679 * thermoBidenNumber) + (0.07791929 * thermoTrumpNumber) + 
            raceEthnicityNumber + incomeNumber + ideologyNumber;
        probVoteOdds = Math.exp(probVoteLogOdds);
        probVoteTrump = probVoteOdds / (1 + probVoteOdds);
        probVoteBiden = 1 - probVoteTrump; 
        // Update probVoteBiden
        document.getElementById("probVoteBiden").innerHTML = probVoteBiden.toFixed(5);
        document.getElementById("probVoteTrump").innerHTML = probVoteTrump.toFixed(5);
        gaugeChart1();
}

//Creating the gauge chart for vote of Biden vs. Trump
function gaugeChart1() {
    let data = [{
        domain: { x: [0, 1], y: [0, .5] },
        value: probVoteTrump,
        type: "indicator",
        mode: "gauge",
        gauge: {
            shape: "angular",
            bar: {thickness:0.25, color: "rgb(0,0,0)"},
            bordercolor: "rgb(0,0,0)",
            borderwidth: 2,
            axis:{
                range:[0,1],
                visible: false,
                ticks: ""
            },
            steps: [
                {range: [0, .1], color: "#1750AC"},
                {range: [.1, .2], color: "#3373C4"},
                {range: [.2, .3], color: "#5494DA"},
                {range: [.3, .4], color: "#73B9EE"},
                {range: [.4, .5], color: "#86CEFA"},
                {range: [.5, .6], color: "#ff5e5e"},
                {range: [.6, .7], color: "#ff3838"},
                {range: [.7, .8], color: "#ff2424"},
                {range: [.8, .9], color: "#fb0000"},
                {range: [.9, 1], color: "#d40000"}
                ]
        }
    }];
    let layout = {
        width: 550,
        height: 550,
        margin: { t: 0, b: 0, l: 50, r: 50 },
        title: {
            text: "Voting for Biden or Trump?",
            font: {
                family: 'Arial Black',
                size: 24
            },
            x: 0.5,
            y: 0.55
            },
            annotations: [{
            text: "Darker blue is more likely Biden, darker red is more likely Trump",
            showarrow: false,
            align:'top center',
            font: {
                family: "Arial",
                size: 15
            },
            x: 0.5,
            y: 0.5  
        }]
    };
        Plotly.newPlot("gauge1", data, layout)
    };

//Creating gauge1 chart 
gaugeChart1()

// Calling the function to populate the dropdown menus
populateDropdowns();