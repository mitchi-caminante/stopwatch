let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let timerDisplay = document.getElementById("timerDisplay");
let wrapper = document.getElementById("wrapper");
let seconds = 00;
let ms = 00;
let appendSeconds = document.getElementById("seconds");
let appendMs = document.getElementById("ms");
let interval;

function startCount() {
	resetButton.disabled = false;
	startButton.innerText = 'Stop';
	interval = setInterval(updateCount, 10);
	timerDisplay.classList.remove('blinking');
	wrapper.classList.add('running');
}

function stopCount() {
	clearInterval(interval);
	startButton.innerText = 'Start';
	timerDisplay.classList.add('blinking');
	wrapper.classList.remove('running');
}

function resetCount() {
	stopCount();

	ms = '00';
	seconds = '00';
	appendMs.innerHTML = ms;
	appendSeconds.innerHTML = seconds;
	resetButton.disabled = true;
	timerDisplay.classList.remove('blinking');
}
			
startButton.addEventListener('click', () => {
	if (startButton.innerText === 'Start') {
		startCount();
	} else {
		stopCount();		
	}
});

resetButton.addEventListener('click', resetCount);

function updateCount() {
	ms++;
	if(ms <= 9) {
		appendMs.innerHTML = String(ms).padStart(2, '0');
	} 
	if (ms > 9){
		appendMs.innerHTML = String(ms).padStart(2, '0');
	}
	if (ms > 99) {
		seconds++;
		appendSeconds.innerHTML = String(seconds).padStart(2, '0');
		ms = 0;
		appendMs.innerHTML = '00';
	}
	if (seconds > 9) {
		appendSeconds.innerHTML = String(seconds).padStart(2, '0');
	}
}

