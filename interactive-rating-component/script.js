const ratingBtns = document.querySelectorAll(".rating-btns");
const submitBtn = document.querySelector(".submit-btn");
const card = document.querySelector(".card");
const evaluatedCard = document.querySelector(".evaluated-card");
const rateScore = document.querySelector(".rate-score");

ratingBtns.forEach(btn => {
	btn.addEventListener("click", e => {
		if (e.target.classList.contains("rate-btn")) {
			e.target.classList.toggle("active");
			rateScore.textContent = e.target.value;
		}
	});
});

const submit = () => {
	card.style.display = "none";
	evaluatedCard.style.display = "flex";
};

submitBtn.addEventListener("click", submit);
