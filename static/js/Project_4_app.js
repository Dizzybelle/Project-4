// Creating the lists to populate the dropdown menus
const partyIDs = ["<select party>", "Democrat", "Republican", "Independent", "Other Party", "No Party Preference", 
                "Don't Know", "No Response"];
const ages = ["<select age>", 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 
              67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, "80+", "Don't Know", "No Response"];
const genders = ["<select gender>", "Male", "Female", "Inapplicable", "Don't Know", "No Response"];
const locations = ["<select location>", "Rural", "Small Town", "Suburb", "City", "Don't Know", "No Response"];
const rightTrack = ["<select country track>", "Right", "Wrong", "Don't Know", "No Response"];
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
const primaryVote = ["<select if voted in primary>" ,"Yes, voted in primary or caucus",
                    "No, didn’t vote in primary or caucus", "Don't Know", "No Response"];
// const agesVoting = ["<select age>"];
// const gendersVoting = ["<select gender>"];
// const raceEthnicityVoting = ["<select race/ethnicity>"];
const yearsCommunity = ["<select years lived in community>", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 
                        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 
                        37, 38, 39, "40+","Don't Know", "No Response",];
// const incomeVoting = ["<select income>"];
const swingState = ["<select if believe swing state>" , "Will be close", "Win by quite a bit", "Inapplicable",
                    "Don't Know", "No Response"];
const ideology = ["<select ideology>", "Extremely liberal", "Liberal" ,"Slightly liberal" ,"Moderate; middle of the road"
                    ,"Slightly conservative", "Conservative" ,"Extremely conservative" ,"Haven’t thought much about this"
                    ,"Don't Know", "No Response"];
const partyStrength = ["<select party ID strenght>" ,"Strong Democrat", "Not Very Strong Democrat", "Independent Lean Democrat",
                        "Independent", "Independent Lean Republican", "Not Very Strong Democrat", "Strong Republican", 
                        "Don't Know", "No Response"];
const dislikeBiden = ["<select Biden dislike>" , 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Don't Know", "No Response"];
const dislikeTrump = ["<select Trump dislike>" , 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Don't Know", "No Response"];
const splitUnified = ["<select split or unified>" , "Better when one party controls both", "Better when control is split",
                        "It doesn’t matter", "Don't Know", "No Response"];
const countryTrack = ["<select if county on right track>" , "Right Track", "Wrong Track", "Don't Know", "No Response"];

// Populating the dropdown menu with options
function populateDropdowns() {
    //
    const partyIDSelect = document.getElementById("PartyID_Options");
    //
    const ageSelect = document.getElementById("Age_Options");
    //
    const genderSelect = document.getElementById("Gender_Options")
    const locationsSelect = document.getElementById("Location_Options");
    const rightTrackSelect = document.getElementById("Right_Track_Options");
    const thermoBidenSelect = document.getElementById("Thermo_Biden_Options");
    const thermoTrumpSelect = document.getElementById("Thermo_Trump_Options");
    const raceEthnicitySelect = document.getElementById("Race_Ethnicity_Options");
    const incomeSelect = document.getElementById("Income_Options");
    const primaryVoteSelect = document.getElementById("Primary_Vote_Options");
    const agesVotingSelect = document.getElementById("Age_Options_Voting");
    const gendersVotingSelect = document.getElementById("Gender_Options_Voting");
    const raceEthnicityVotingSelect = document.getElementById("Race_Ethnicity_Options_Voting");
    const yearsCommunitySelect = document.getElementById("Years_Community_Options");
    const incomeVoingSelect = document.getElementById("Income_Options_Voting");
    const swingStateSelect = document.getElementById("Swing_State_Options");
    const ideologySelect = document.getElementById("Ideology_Options");
    const partyStrenghtSelect = document.getElementById("Party_Strength_Options");
    const dislikeBidenSelect = document.getElementById("Dislike_Biden_Options");
    const dislikeTrumpSelect = document.getElementById("Dislike_Trump_Options");
    const splitUnifiedSelect = document.getElementById("Split_Unified_Options");
    const countryTrackSelect = document.getElementById("Country_Track_Options");

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
    // gender dropdown
    genders.forEach(gender => {
        const option = document.createElement("option");
        option.text = gender;
        option.value = gender;
        genderSelect.appendChild(option);
    });
    // locations dropdown
    locations.forEach(location => {
        const option = document.createElement("option");
        option.text = location;
        option.value = location;
        locationsSelect.appendChild(option);
    });
    // rightTrack dropdown
    rightTrack.forEach(track => {
        const option = document.createElement("option");
        option.text = track;
        option.value = track;
        rightTrackSelect.appendChild(option);
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
    // primaryVote dropdown
    primaryVote.forEach(primary => {
        const option = document.createElement("option");
        option.text = primary;
        option.value = primary;
        primaryVoteSelect.appendChild(option);
    });                 
    // // agesVoting dropdown
    // primaryVote.forEach(primary => {
    //     const option = document.createElement("option");
    //     option.text = primary;
    //     option.value = primary;
    //     primaryVoteSelect.appendChild(option);
    // });  
    // agesVoting dropdown
    ages.forEach(ageVoting => {
        const option = document.createElement("option");
        option.text = ageVoting;
        option.value = ageVoting;
        agesVotingSelect.appendChild(option);
    });  
    // gendersVoting dropdown
    genders.forEach(gender => {
        const option = document.createElement("option");
        option.text = gender;
        option.value = gender;
        gendersVotingSelect.appendChild(option);
    });              
    //raceEthnicityVoting dropdown
    raceEthnicity.forEach(race => {
        const option = document.createElement("option");
        option.text = race;
        option.value = race;
        raceEthnicityVotingSelect.appendChild(option);
    });             
    //yearsCommunity dropdown
    yearsCommunity.forEach(years => {
        const option = document.createElement("option");
        option.text = years;
        option.value = years;
        yearsCommunitySelect.appendChild(option);
    });        
    //incomeVoting dropdown
    income.forEach(incomes => {
        const option = document.createElement("option");
        option.text = incomes;
        option.value = incomes;
        incomeVoingSelect.appendChild(option);
    });          
    //swingState dropdown
    swingState.forEach(swing => {
        const option = document.createElement("option");
        option.text = swing;
        option.value = swing;
        swingStateSelect.appendChild(option);
    });        
    //ideology dropdown
    ideology.forEach(ideologies => {
        const option = document.createElement("option");
        option.text = ideologies;
        option.value = ideologies;
        ideologySelect.appendChild(option);
    });            
    //partyStrenght dropdown
    partyStrength.forEach(parties => {
        const option = document.createElement("option");
        option.text = parties;
        option.value = parties;
        partyStrenghtSelect.appendChild(option);
    });                  
    //dislikeBiden dropdown
    dislikeBiden.forEach(bidenDislike => {
        const option = document.createElement("option");
        option.text = bidenDislike;
        option.value = bidenDislike;
        dislikeBidenSelect.appendChild(option);
    });        
    //dislikeTrump dropdown
    dislikeTrump.forEach(trumpDislike => {
        const option = document.createElement("option");
        option.text = trumpDislike;
        option.value = trumpDislike;
        dislikeTrumpSelect.appendChild(option);
    });           
    //splitUnified dropdown
    splitUnified.forEach(unifiedSplit => {
        const option = document.createElement("option");
        option.text = unifiedSplit;
        option.value = unifiedSplit;
        splitUnifiedSelect.appendChild(option);
    });          
    //countryTrack dropdown
    countryTrack.forEach(trackCountry => {
        const option = document.createElement("option");
        option.text = trackCountry;
        option.value = trackCountry;
        countryTrackSelect.appendChild(option);
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
// Function to convert partyID string to text and update the party number
//***Need to update this to instead give the coeficient value
function optionPartyNumber() {
    if (selectedPartyID === "Democrat") {
        partyNumber = 1;
    } else if (selectedPartyID === "Republican") {
        partyNumber = 2;
    } else {
        partyNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedAge;
// Function to change age dropdown values
function optionChangedAge(value) {
    selectedAge = parseInt(value);
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedGender;
let genderNumber
// Function to change gender dropdown values
function optionChangedGender(value) {
    selectedGender = value;
    //Update presidentVoteProb
    optionGenderNumber();
}
//***Function to convert gender to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionGenderNumber() {
    if (selectedGender === "Male") {
        genderNumber = 1;
    } else if (selectedGender === "Female") {
        genderNumber = 2;
    } else {
        genderNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedLocation;
let locationNumber
// Function to change location dropdown values
function optionChangedLocation(value) {
    selectedLocation = value;
    //Update presidentVoteProb
    optionLocationNumber();
}
//***Function to convert location to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionLocationNumber() {
    if (selectedLocation === "Rural") {
        locationNumber = 1;
    } else if (selectedLocation === "Small Town") {
        locationNumber = 2;
    } else if (selectedLocation === "Suburb") {
        locationNumber = 3;
    } else if (selectedLocation === "City") {
        locationNumber = 4;
    } else {
        locationNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedRightTrack;
let rightTrackNumber
// Function to change right track dropdown values
function optionChangedRightTrack(value) {
    selectedRightTrack = value;
    //Update presidentVoteProb
    optionRightTrackNumber();
}
//***Function to convert right track to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionRightTrackNumber() {
    if (selectedRightTrack === "Right") {
        rightTrackNumber = 1;
    } else if (selectedRightTrack === "Wrong") {
        rightTrackNumber = 2;
    } else {
        rightTrackNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedThermoBiden;
// Function to change ThermoBiden dropdown values
function optionChangedThermoBiden(value) {
    selectedThermoBiden = parseInt(value);
    //Update presidentVoteProb
    presidentVoteProb();
}

let selectedThermoTrump;
// Function to change ThermoTrump dropdown values
function optionChangedThermoTrump(value) {
    selectedThermoTrump = parseInt(value);
    //Update presidentVoteProb
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
//***Function to convert right track to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionRaceEthnicityNumber() {
    if (selectedRaceEthnicity === "White, non-Hispanic") {
        raceEthnicityNumber = 1;
    } else if (selectedRaceEthnicity === "Black, non-Hispanic") {
        raceEthnicityNumber = 2;
    } else if (selectedRaceEthnicity === "Hispanic") {
        raceEthnicityNumber = 3;
    } else if (selectedRaceEthnicity === "Asian or Native Hawaiian/other Pacific Islander, non-Hispanic alone") {
        raceEthnicityNumber = 4;
    } else if (selectedRaceEthnicity === "Native American/Alaska Native or other race, non-Hispanic alone") {
        raceEthnicityNumber = 5;
    } else if (selectedRaceEthnicity === "Multiple races, non-Hispanic") {
        raceEthnicityNumber = 6;
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
//***Function to convert RaceEthnicity to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionIncomeNumber() {
    if (selectedIncome === "Under $9,999") {
        incomeNumber = 1;
    } else if (selectedIncome === "$10,000-14,999") {
        incomeNumber = 2;
    } else if (selectedIncome === "$15,000-19,999") {
        incomeNumber = 3;
    } else if (selectedIncome === "$20,000-24,999") {
        incomeNumber = 4;
    } else if (selectedIncome === "$25,000-29,999") {
        incomeNumber = 5;
    } else if (selectedIncome === "$30,000-34,999") {
        incomeNumber = 6;
    } else if (selectedIncome === "$35,000-39,999") {
        incomeNumber = 7;
    } else if (selectedIncome === "$40,000-44,999") {
        incomeNumber = 8;
    } else if (selectedIncome === "$45,000-49,999") {
        incomeNumber = 9;
    } else if (selectedIncome === "$50,000-59,999") {
        incomeNumber = 10;
    } else if (selectedIncome === "$60,000-64,999") {
        incomeNumber = 11;
    } else if (selectedIncome === "$65,000-69,999") {
        incomeNumber = 12;
    } else if (selectedIncome === "$70,000-74,999") {
        incomeNumber = 13;
    } else if (selectedIncome === "$75,000-79,999") {
        incomeNumber = 14;
    } else if (selectedIncome === "$80,000-89,999") {
        incomeNumber = 15;
    } else if (selectedIncome === "$90,000-99,999") {
        incomeNumber = 16;
    } else if (selectedIncome === "$100,000-109,999") {
        incomeNumber = 17;
    } else if (selectedIncome === "$110,000-124,999") {
        incomeNumber = 18;
    } else if (selectedIncome === "$125,000-149,999") {
        incomeNumber = 19;
    } else if (selectedIncome === "$150,000-174,999") {
        incomeNumber = 20;
    } else if (selectedIncome === "$175,000-249,999") {
        incomeNumber = 21;
    } else if (selectedIncome === "$250,000 or more") {
        incomeNumber = 22;
    } else {
        incomeNumber = 0;
    }
    //Update presidentVoteProb
    presidentVoteProb();
}

let probVoteBiden;
let probVoteTrump;
// Function to calculate probability of voting for Biden or Trump
function presidentVoteProb() {
    // Biden vote probability
    //****NEED TO REPLACE WITH ACTUAL FORMULA JUST TESTING FOR NOW
        probVoteBiden = (partyNumber) * (selectedAge/80) * (genderNumber) * (locationNumber) * 
        (rightTrackNumber) * (selectedThermoBiden/50) * (selectedThermoTrump/50) * (raceEthnicityNumber/6) * 
        (incomeNumber/21);
        probVoteTrump = 1 - probVoteBiden; 
        // Update probVoteBiden
        document.getElementById("probVoteBiden").innerHTML = probVoteBiden.toFixed(5);
        document.getElementById("probVoteTrump").innerHTML = probVoteTrump.toFixed(5);
        gaugeChart1();
}

//Creating the gauge chart for vote of Biden vs. Trump
function gaugeChart1() {
    let data = [{
        domain: { x: [0, 1], y: [0, .5] },
        value: probVoteBiden,
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

//Creating the gauge1 chart 
gaugeChart1()

// Calling the function to populate the dropdown menus
populateDropdowns();



//Section on the likelihood of someone voting in the general election
let selectedPrimary;
let primaryNumber
// Function to change right track dropdown values
function optionChangedPrimary(value) {
    selectedPrimary = value;
    optionPrimaryNumber();
}
//***Function to convert right track to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionPrimaryNumber() {
    if (selectedPrimary === "Yes, voted in primary or caucus") {
        primaryNumber = 1;
    } else if (selectedPrimary === "No, didn’t vote in primary or caucus") {
        primaryNumber = 2;
    } else {
        primaryNumber = 0;
    }
    votingProb();
}

let selectedAgeGeneral;
// Function to change age dropdown values
function optionChangedAgeGeneral(value) {
    selectedAgeGeneral = parseInt(value);
    votingProb();
}

let selectedGenderGeneral;
let genderGeneralNumber
// Function to change gender dropdown values
function optionChangedGenderGeneral(value) {
    selectedGenderGeneral = value;
    optionGenderGeneralNumber();
}
//***Function to convert gender to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionGenderGeneralNumber() {
    if (selectedGenderGeneral === "Male") {
        genderGeneralNumber = 1;
    } else if (selectedGenderGeneral === "Female") {
        genderGeneralNumber = 2;
    } else {
        genderGeneralNumber = 0;
    }
    votingProb();
}

let selectedRaceEthnicityGeneral;
let raceEthnicityGeneralNumber
// Function to change right track dropdown values
function optionChangedRaceEthnicityGeneral(value) {
    selectedRaceEthnicityGeneral = value;
    optionRaceEthnicityGeneralNumber();
}
//***Function to convert right track to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionRaceEthnicityGeneralNumber() {
    if (selectedRaceEthnicityGeneral === "White, non-Hispanic") {
        raceEthnicityGeneralNumber = 1;
    } else if (selectedRaceEthnicityGeneral === "Black, non-Hispanic") {
        raceEthnicityGeneralNumber = 2;
    } else if (selectedRaceEthnicityGeneral === "Hispanic") {
        raceEthnicityGeneralNumber = 3;
    } else if (selectedRaceEthnicityGeneral === "Asian or Native Hawaiian/other Pacific Islander, non-Hispanic alone") {
        raceEthnicityGeneralNumber = 4;
    } else if (selectedRaceEthnicityGeneral === "Native American/Alaska Native or other race, non-Hispanic alone") {
        raceEthnicityGeneralNumber = 5;
    } else if (selectedRaceEthnicityGeneral === "Multiple races, non-Hispanic") {
        raceEthnicityGeneralNumber = 6;
    } else {
        raceEthnicityGeneralNumber = 0;
    }
    votingProb();
}

let selectedCommunityGeneral;
// Function to change age dropdown values
function optionChangedCommunityGeneral(value) {
    selectedCommunityGeneral = parseInt(value);
    votingProb();
}
   
let selectedIncomeGeneral;
let incomeGeneralNumber
// Function to change Income dropdown values
function optionChangedIncomeGeneral(value) {
    selectedIncomeGeneral = value;
    //Update presidentVoteProb
    optionIncomeGeneralNumber();
}
//***Function to convert Income to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionIncomeGeneralNumber() {
    if (selectedIncomeGeneral === "Under $9,999") {
        incomeGeneralNumber = 1;
    } else if (selectedIncomeGeneral === "$10,000-14,999") {
        incomeGeneralNumber = 2;
    } else if (selectedIncomeGeneral === "$15,000-19,999") {
        incomeGeneralNumber = 3;
    } else if (selectedIncomeGeneral === "$20,000-24,999") {
        incomeGeneralNumber = 4;
    } else if (selectedIncomeGeneral === "$25,000-29,999") {
        incomeGeneralNumber = 5;
    } else if (selectedIncomeGeneral === "$30,000-34,999") {
        incomeGeneralNumber = 6;
    } else if (selectedIncomeGeneral === "$35,000-39,999") {
        incomeGeneralNumber = 7;
    } else if (selectedIncomeGeneral === "$40,000-44,999") {
        incomeGeneralNumber = 8;
    } else if (selectedIncomeGeneral === "$45,000-49,999") {
        incomeGeneralNumber = 9;
    } else if (selectedIncomeGeneral === "$50,000-59,999") {
        incomeGeneralNumber = 10;
    } else if (selectedIncomeGeneral === "$60,000-64,999") {
        incomeGeneralNumber = 11;
    } else if (selectedIncomeGeneral === "$65,000-69,999") {
        incomeGeneralNumber = 12;
    } else if (selectedIncomeGeneral === "$70,000-74,999") {
        incomeGeneralNumber = 13;
    } else if (selectedIncomeGeneral === "$75,000-79,999") {
        incomeGeneralNumber = 14;
    } else if (selectedIncomeGeneral === "$80,000-89,999") {
        incomeGeneralNumber = 15;
    } else if (selectedIncomeGeneral === "$90,000-99,999") {
        incomeGeneralNumber = 16;
    } else if (selectedIncomeGeneral === "$100,000-109,999") {
        incomeGeneralNumber = 17;
    } else if (selectedIncomeGeneral === "$110,000-124,999") {
        incomeGeneralNumber = 18;
    } else if (selectedIncomeGeneral === "$125,000-149,999") {
        incomeGeneralNumber = 19;
    } else if (selectedIncomeGeneral === "$150,000-174,999") {
        incomeGeneralNumber = 20;
    } else if (selectedIncomeGeneral === "$175,000-249,999") {
        incomeGeneralNumber = 21;
    } else if (selectedIncomeGeneral === "$250,000 or more") {
        incomeGeneralNumber = 22;
    } else {
        incomeGeneralNumber = 0;
    }
    //Update presidentVoteProb
    votingProb();
}

let selectedswingStateGeneral;
let swingStateGeneralNumber
// Function to change swingState dropdown values
function optionChangedswingStateGeneral(value) {
    selectedswingStateGeneral = value;
    optionswingStateGeneralNumber();
}
//***Function to convert swingState to coefficient values from each dummy variable, using 1 & 2 as placeholders now
function optionswingStateGeneralNumber() {
    if (selectedswingStateGeneral === "Will be close") {
        swingStateGeneralNumber = 1;
    } else if (selectedswingStateGeneral === "Win by quite a bit") {
        swingStateGeneralNumber = 2;
    } else if (selectedswingStateGeneral === "Inapplicable") {
        swingStateGeneralNumber = 3;
    } else {
        swingStateGeneralNumber = 0;
    }
    votingProb();
}

let probVoting;
// Function to calculate probability of voting in the general election
function votingProb() {
    // Biden vote probability
    //****NEED TO REPLACE WITH ACTUAL FORMULA JUST TESTING FOR NOW
        probVoting = (primaryNumber/2) * (selectedAgeGeneral/50) * (genderGeneralNumber) * (raceEthnicityGeneralNumber/4) *
        (selectedCommunityGeneral/20) * (incomeGeneralNumber/10) * (swingStateGeneralNumber);
        // Update votingProb
        document.getElementById("probVoting").innerHTML = probVoting.toFixed(5);
        gaugeChart2();
}
votingProb()
//****NEED TO CHANGE VALUE TO PROBABILITY OF VOTING//////
//Creating the gauge chart for probability of voting
function gaugeChart2() {
    let data = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: probVoting,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            shape: "angular",
            bar: {thickness:0.25, color: "rgb(0,0,0)"},
            bordercolor: "rgb(0,0,0)",
            borderwidth: 2,
            axis:{
                range:[0,1],
                visible: true,
                thickmode: "array",
                tickvals: [.1, .2, .3, .4, .5, .6, .7, .8, .9],
                tickfont: {size: 16, font:"Arial Black"},
                ticks: "outside"
            },
            steps: [
                { range: [0, 0.1], color: "#ff0000" },
                { range: [0.1, 0.2], color: "#ff3300" },
                { range: [0.2, 0.3], color: "#ff6600" },
                { range: [0.3, 0.4], color: "#ff9900" },
                { range: [0.4, 0.5], color: "#ffcc00" },
                { range: [0.5, 0.6], color: "#ffff00" },
                { range: [0.6, 0.7], color: "#ccff00" },
                { range: [0.7, 0.8], color: "#99ff00" },
                { range: [0.8, 0.9], color: "#66ff00" },
                { range: [0.9, 1], color: "#33ff00" },
            ]
        }
    }];
    let layout = {
        width: 500,
        height: 400,
        margin: { t: 50, b: 0, l: 50, r: 50 },
        title: {
            text: "Probability of a Respodent Voting",
            font: {
                family: 'Arial Black',
                size: 24
            },
            x: 0.5,
            y: 0.86
            },
    };
        Plotly.newPlot("gauge2", data, layout)
    };

//Creating the gauge2 chart 
gaugeChart2()



////////////////////////////////////////////////////////////////////////////////////////////////////
//     //ideology dropdown
//     ideology.forEach(ideologies => {
//         const option = document.createElement("option");
//         option.text = ideologies;
//         option.value = ideologies;
//         ideologySelect.appendChild(option);
//     });            
//     //partyStrenght dropdown
//     partyStrength.forEach(parties => {
//         const option = document.createElement("option");
//         option.text = parties;
//         option.value = parties;
//         partyStrenghtSelect.appendChild(option);
//     });                  
//     //dislikeBiden dropdown
//     dislikeBiden.forEach(bidenDislike => {
//         const option = document.createElement("option");
//         option.text = bidenDislike;
//         option.value = bidenDislike;
//         dislikeBidenSelect.appendChild(option);
//     });        
//     //dislikeTrump dropdown
//     dislikeTrump.forEach(trumpDislike => {
//         const option = document.createElement("option");
//         option.text = trumpDislike;
//         option.value = trumpDislike;
//         dislikeTrumpSelect.appendChild(option);
//     });           
//     //splitUnified dropdown
//     splitUnified.forEach(unifiedSplit => {
//         const option = document.createElement("option");
//         option.text = unifiedSplit;
//         option.value = unifiedSplit;
//         splitUnifiedSelect.appendChild(option);
//     });          
//     //countryTrack dropdown
//     countryTrack.forEach(trackCountry => {
//         const option = document.createElement("option");
//         option.text = trackCountry;
//         option.value = trackCountry;
//         countryTrackSelect.appendChild(option);
//     });           
// }

////////////////////////////////////////////////////////////////////////////////////////////////////

//****NEED TO CHANGE VALUE TO PROBABILITY OF being a swing voter//////
//Creating the gauge chart for probability of being a swing voter
function gaugeChart3() {
    let data = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0.75,
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            shape: "angular",
            bar: {thickness:0.25, color: "rgb(0,0,0)"},
            bordercolor: "rgb(0,0,0)",
            borderwidth: 2,
            axis:{
                range:[0,1],
                visible: true,
                thickmode: "array",
                tickvals: [.1, .2, .3, .4, .5, .6, .7, .8, .9],
                tickfont: {size: 16, font:"Arial Black"},
                ticks: "outside"
            },
            steps: [
                { range: [0, 0.1], color: "#ffd1dc" },
                { range: [0.1, 0.2], color: "#ffc0cb" },
                { range: [0.2, 0.3], color: "#ffb6c1" },
                { range: [0.3, 0.4], color: "#ff99ff" },
                { range: [0.4, 0.5], color: "#ff85ff" },
                { range: [0.5, 0.6], color: "#e066ff" },
                { range: [0.6, 0.7], color: "#c77dff" },
                { range: [0.7, 0.8], color: "#af62ff" },
                { range: [0.8, 0.9], color: "#9957ff" },
                { range: [0.9, 1], color: "#7e3aff" }
            ]
        }
    }];
    let layout = {
        width: 500,
        height: 400,
        margin: { t: 50, b: 0, l: 50, r: 50 },
        title: {
            text: "Swing Voter Probabilty",
            font: {
                family: 'Arial Black',
                size: 24
            },
            x: 0.5,
            y: 0.86
            },
    };
        Plotly.newPlot("gauge3", data, layout)
    };

//Creating the gauge2 chart 
gaugeChart3()