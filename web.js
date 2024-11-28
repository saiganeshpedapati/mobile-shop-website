// Change background color every 5 seconds
let currentColor = 0;
const colors = ['#f4f4f4', '#e0f7fa', '#ffeb3b', '#c8e6c9', '#ffc107'];

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}

// Start background color change
setInterval(changeBackgroundColor, 5000);

// Search bar functionality
const searchInput = document.querySelector('.search-bar');
const allItems = document.querySelectorAll('.item');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    
    allItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
