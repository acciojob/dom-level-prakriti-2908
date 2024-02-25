//your JS code here. If required.
// Get the element by its id
var targetElement = document.getElementById('level');

// Function to calculate the DOM level of an element
function calculateDOMLevel(element) {
    var level = 0;
    while (element !== null) {
        level++;
        element = element.parentNode;
    }
    return level;
}

// Calculate the DOM level of the target element
var domLevel = calculateDOMLevel(targetElement);

// Display the result using the alert function
alert("The level of the element is: " + domLevel);
