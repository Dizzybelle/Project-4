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
let probVoteTrump;

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
        probVoteTrump = 1 - probVoteBiden; 
        // Update probVoteBiden
        document.getElementById("probVoteBiden").innerHTML = probVoteBiden;
        document.getElementById("probVoteTrump").innerHTML = probVoteTrump;
        gaugeChart1();
}

//Creating the gauge chart for vote of Biden vs. Trump
function gaugeChart1() {
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
        height: 400,
        margin: { t: 50, b: 0, l: 50, r: 50 },
        title: {
            text: "Voting for Biden or Trump?",
            font: {
                family: 'Arial Black',
                size: 24
            },
            x: 0.5,
            y: 0.85
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

//Creating the gauge1 chart 
gaugeChart1()

// Calling the function to populate the dropdown menus
populateDropdowns();

//****NEED TO CHANGE VALUE TO PROBABILITY OF VOTING//////
//Creating the gauge chart for probability of voting
function gaugeChart2() {
    let data = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: 0.45,
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
            // annotations: [{
            // text: "Darker blue is more likely Biden, darker red is more likely Trump",
            // showarrow: false,
            // align:'top center',
            // font: {
            //     family: "Arial",
            //     size: 15
            // },
            // x: 0.5,
            // y: 0.9 
        // }],
    };
        Plotly.newPlot("gauge2", data, layout)
    };

//Creating the gauge2 chart 
gaugeChart2()




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
                { range: [0, 0.1], color: "#e6e6fa" }, // Very light purple
                { range: [0.1, 0.2], color: "#d8bfd8" },
                { range: [0.2, 0.3], color: "#c0c0db" },
                { range: [0.3, 0.4], color: "#a49ac1" },
                { range: [0.4, 0.5], color: "#8a7eb7" },
                { range: [0.5, 0.6], color: "#725692" },
                { range: [0.6, 0.7], color: "#5b4474" },
                { range: [0.7, 0.8], color: "#452a4e" },
                { range: [0.8, 0.9], color: "#310f29" },
                { range: [0.9, 1], color: "#4b0082" } // Dark purple
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
            // annotations: [{
            // text: "Darker blue is more likely Biden, darker red is more likely Trump",
            // showarrow: false,
            // align:'top center',
            // font: {
            //     family: "Arial",
            //     size: 15
            // },
            // x: 0.5,
            // y: 0.9 
        // }],
    };
        Plotly.newPlot("gauge3", data, layout)
    };

//Creating the gauge2 chart 
gaugeChart3()