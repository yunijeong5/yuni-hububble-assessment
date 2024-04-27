document.addEventListener("DOMContentLoaded", function () {
	const slides = document.querySelectorAll(".slide");
	const prevButton = document.querySelector(".slider-prev");
	const nextButton = document.querySelector(".slider-next");
	const paginationButtons = document.querySelectorAll(
		".slider-pagination-page"
	);
	let currentIndex = 0;

	// adds and remove "active" class to switch currently active pagination button
	function updatePagination(index) {
		paginationButtons.forEach((button, i) => {
			if (i === index) {
				button.classList.add("active");
			} else {
				button.classList.remove("active");
			}
		});
	}

	// adds and remove "active" class to switch currently visible slide
	function showSlide(index) {
		slides.forEach((slide, i) => {
			if (i === index) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
			slide.style.transform = `translateX(${-100 * index}%)`;
		});
	}

	// calls showSlide and updatePagination with target slide index
	function goToSlide(index) {
		if (index < 0) {
			// loop back to last slide
			currentIndex = slides.length - 1;
		} else if (index >= slides.length) {
			// loop back to first slide
			currentIndex = 0;
		} else {
			// no out-of-bounds value
			currentIndex = index;
		}
		showSlide(currentIndex);
		updatePagination(currentIndex);
	}

	prevButton.addEventListener("click", () => {
		goToSlide(currentIndex - 1);
	});

	nextButton.addEventListener("click", () => {
		goToSlide(currentIndex + 1);
	});

	paginationButtons.forEach((button, i) => {
		button.addEventListener("click", () => {
			goToSlide(i);
		});
	});

	// Auto loop -- disabled
	// setInterval(() => {
	// 	goToSlide(currentIndex + 1);
	// }, 3000);

	// load initial slide
	goToSlide(currentIndex);
});
