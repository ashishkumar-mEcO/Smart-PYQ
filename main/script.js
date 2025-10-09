function searchPYQ() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const yearCards = document.querySelectorAll('.year-card');
    const noResults = document.getElementById('noResults');
    let hasResults = false;

    yearCards.forEach(card => {
        const yearTitle = card.querySelector('.year-title').textContent.toLowerCase();
        const yearNumber = card.querySelector('.year-number').textContent.toLowerCase();
        
        // Get all semester button texts
        const semesterButtons = card.querySelectorAll('.semester-btn');
        let semesterText = '';
        semesterButtons.forEach(btn => {
            semesterText += btn.textContent.toLowerCase() + ' ';
        });
        
        // Combine all searchable text
        const allText = yearTitle + ' ' + yearNumber + ' ' + semesterText + ' semester';
        
        if (allText.includes(searchTerm) || searchTerm === '') {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
}

// Add enter key functionality to search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchPYQ();
    }
});

// NEW: Check if search box is cleared, then reset
document.getElementById('searchInput').addEventListener('input', function() {
    // Only trigger if search box is EMPTY
    if (this.value.trim() === '') {
        searchPYQ();  // This will show all cards again
    }
});

// Add click functionality to semester buttons
document.querySelectorAll('.semester-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default and show alert if link is "#"
        if (href === '#') {
            e.preventDefault();
            const semester = this.dataset.semester;
            const semesterText = this.textContent.trim().split('\n')[0];
            alert(`Coming soon: ${semesterText} PYQs!`);
        }
    });
});