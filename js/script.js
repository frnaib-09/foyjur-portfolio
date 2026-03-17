const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
});


const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proCard');
const projectCountLabel = document.getElementById('count');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active')
        const filterValue = button.getAttribute('data-filter');
        let count = 0;
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                count++;
            } else {
                card.style.display = 'none';
            }
        })
        projectCountLabel.innerText = count;
    });
});