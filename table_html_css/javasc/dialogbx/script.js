let clickCount = 0; // Counter for button clicks

function handleClick() {
    clickCount++; // Increment the click count

    const message = document.getElementById("message");

    // Display messages based on the click count
    if (clickCount === 1) {
        message.textContent = "Welcome to Scripting";
    } else if (clickCount === 2) {
        message.textContent = "Thank you for using Scripting";
    }
}
