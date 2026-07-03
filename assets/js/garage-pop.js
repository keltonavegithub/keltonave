(function () {
	var garagePop = document.querySelector('.garage-pop');

	if (!garagePop || !('IntersectionObserver' in window)) {
		return;
	}

	function playPop() {
		garagePop.classList.remove('is-popping');
		void garagePop.offsetWidth;
		garagePop.classList.add('is-popping');
	}

	garagePop.addEventListener('animationend', function () {
		garagePop.classList.remove('is-popping');
	});

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				playPop();
			}
		});
	}, { threshold: 0.75 });

	observer.observe(garagePop);
}());
