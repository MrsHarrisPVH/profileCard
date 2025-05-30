// Get references to the bio paragraph and the toggle button using their IDs
const bioParagraph = document.getElementById('bio-paragraph');
const toggleBioButton = document.getElementById('toggle-bio-button');

/**
 * Toggles the visibility of the bio paragraph and updates the button text.
 */
function toggleBio() {
    // Check if the bio paragraph currently has the 'hidden' class
    if (bioParagraph.classList.contains('hidden')) {
        // If it's hidden, remove the 'hidden' class to show it
        bioParagraph.classList.remove('hidden');
        // Change the button text to 'Hide Info'
        toggleBioButton.textContent = 'Hide Info';
    } else {
        // If it's visible, add the 'hidden' class to hide it
        bioParagraph.classList.add('hidden');
        // Change the button text back to 'Show More Info'
        toggleBioButton.textContent = 'Show More Info';
    }
}

// Add an event listener to the button that listens for a 'click' event
// When the button is clicked, the toggleBio function will be executed
toggleBioButton.addEventListener('click', toggleBio);

// Initially hide the bio paragraph when the page loads, and set button text
// This ensures the bio is hidden by default and the button says "Show More Info"
// This is done after the event listener is attached to prevent a flicker if the button is clicked immediately.
bioParagraph.classList.add('hidden');
toggleBioButton.textContent = 'Show More Info';
