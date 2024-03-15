// Creating the lists to populate the dropdown menus
const partyIDs = ["<select party>", "Democrat", "Republican", "Independent", "Other Party", "No Party Preference", "No Response"];
const ages = ["<select age>", 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 
              67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, "80+"];

// Populating the dropdown menu with options
function populateDropdowns() {
    const partyIDSelect = document.getElementById("PartyID_Options");
    const ageSelect = document.getElementById("Age_Options");

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
}

let selectedPartyID;
let selectedAge;
let mathTest;
let partyNumber;
let probVoteBiden;

// Function to convert partyID string to text and update the party number
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

// Function to change partyID dropdown menu
function optionChangedParty(value) {
    selectedPartyID = value;
    optionPartyNumber();
}

// Function to change age dropdown menu
function optionChangedAge(value) {
    selectedAge = parseInt(value);
//Update presidentVoteProb
    presidentVoteProb();
}

// Function to calculate probability of voting for Biden or Trump
function presidentVoteProb() {
    // Biden vote probability
    //NEED TO REPLACE WITH ACTUAL FORMULA JUST TESTING FOR NOW
        probVoteBiden = (partyNumber/2) * (selectedAge/80); 
        // Update probVoteBiden
        document.getElementById("probVoteBiden").innerHTML = probVoteBiden;
        gaugeChart();
}

//Creating the initial gauge chart for belly button washing frequency, looked up how to make a gauge chart on plotly.com
function gaugeChart() {
    //Looked up how to format the chart on stack overflow
    let data = [{
        domain: { x: [0, 1], y: [0, 1] },
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
                // thickmode: "array",
                // tickvals: [.1,.2,.3,.4,.5,.6,.7,.8,.9],
                // tickfont: {size: 1, font:"Arial Black"},
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
        width: 500,
        height: 500,
        title: {
            text: "Voting Biden or Trump?",
            font: {
                family: 'Arial Black',
                size: 24
            },
            x: 0.5,
            y: 0.8
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
            y: 0.9   
        }]
    };
        Plotly.newPlot("gauge1", data, layout)
    };

// //Creating a function to update the gauge chart when a new subject is selected
// function getGaugeChart() {
//     let testSubjectID = probVoteBiden;
//     //console.log("Selected ID: ", testSubjectID);
//     let selectedID = samples.find(sample => sample.id === testSubjectID);
//     let subjectID = parseInt(selectedID.id);
//     let selectedIDMetadata = metadata.find(sample => sample.id === subjectID);
//     let washFreq = selectedIDMetadata.wfreq;
//     let data = [{
//         value: washFreq,
//     }];
//     Plotly.restyle("gauge1", "value", [probVoteBiden]);

// }

//Creating the gauge chart 
gaugeChart()

// Calling the function to populate the dropdown menus
populateDropdowns();
