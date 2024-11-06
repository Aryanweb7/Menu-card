// Filter function to show items of selected category
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            item.classList.contains(category)
                ? (item.style.display = 'block')
                : (item.style.display = 'none');
        }
    });
}
