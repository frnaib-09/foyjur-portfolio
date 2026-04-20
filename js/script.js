const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function() {
  this.classList.toggle("is-active");
});


const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.proCard');
const moreCards = document.querySelectorAll('.moreCard');
const projectCountLabel = document.getElementById('count');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        let totalCount = 0;
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                totalCount++;
            } else {
                card.style.display = 'none';
            }
        });
        moreCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                totalCount++;
            } else {
                card.style.display = 'none';
            }
        });
        projectCountLabel.innerText = totalCount;
    });
});


$('.comments').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  dotsClass: 'dots',
  pauseOnHover: false,
  prevArrow: $('.left'),
  nextArrow: $('.right')
});