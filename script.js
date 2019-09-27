let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
	randomNumber = Math.floor(Math.random() * 9);
	return randomNumber;
}
//generateTarget();

const compareGuesses = (user, computer, target) => {
	userDistance = Math.abs(user, target);
	computerDistance = Math.abs(computer, target);
	if (userDistance > computerDistance) {
		return false;
	} else if (computerDistance > userDistance) {
		return true;
	} else if (userDistance === computerDistance) {
		return true;
	}
}

