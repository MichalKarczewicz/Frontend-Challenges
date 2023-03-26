// https://api.adviceslip.com/advice
const diceBtn = document.querySelector(".dice-img");
const adviceText = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice-number");

const Advice = () => {
	fetch("https://api.adviceslip.com/advice")
		.then(res => {
			if (res.ok) {
				return res.json();
			} else {
				return Promise.reject(`Http error: ${res.status}`);
			}
		})
		.then(res => {
			adviceInfo(res);
			console.log(res);
		})
		.catch(error => {
			console.error(error);
		});
};

const adviceInfo = data => {
	const { id, advice } = data.slip;

	adviceNumber.textContent = `Advice #${id}`;
	adviceText.innerHTML = `&quot${advice}&quot`;
};

diceBtn.addEventListener("click", Advice);
