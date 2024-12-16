"use strict";

const $ = selector => document.querySelector(selector);

// Function to generate the error message for invalid input
const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

// Function to focus and select the text in the input field
const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

// Function to calculate MPG with one decimal place
const calculateMPG = (miles, gallons) => (miles / gallons).toFixed(1); // One decimal place

// Function to process the input values
const processEntries = () => {
    const miles = parseFloat($("#miles").value);
    const gallons = parseFloat($("#gallons").value);

    // Check if miles or gallons are invalid
    if (isNaN(miles) || miles <= 0) {
        alert(getErrorMsg("Miles driven"));
        focusAndSelect("#miles");
    } else if (isNaN(gallons) || gallons <= 0) {
        alert(getErrorMsg("Gallons of gas used"));
        focusAndSelect("#gallons");
    } else {
        // Calculate and display the result
        $("#mpg").value = calculateMPG(miles, gallons);
    }
};

// Event listener to trigger the process on button click
document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#miles").focus();
});
