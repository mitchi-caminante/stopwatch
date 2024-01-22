*, *:before, *:after {
	box-sizing: border-box;
}
body {
	margin: 0 auto;
	padding: 4rem 0;
	max-width: 60rem;
	min-height: 100vh;
	background: lightgray;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.wrapper {
	justify-content: space-around;
	align-items: center;
	width: 500px;
	padding: 1.5rem;
	text-align: center;
	border-radius: 10px;
	background: white;
	margin: 0 auto;
	}
.timerDisplay {
	display: flex;
	width: 50%;
	border-radius: 10px;
	font-size: 2em;
	align-items: center;
	justify-content: space-around;
	text-align: center;
	padding: 40px 0;
	font-family: 'Wallpoet', serif;
	background-color: #c4c0b3;
	margin: 40px auto;
	transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
	}
.timerDisplay.blinking .time-unit {
	animation: blink 1s ease-in-out infinite;
}
@keyframes blink {
	0% {
		opacity: 1;
	}
	80% {
		opacity: 0;
	}
}
#start {
	background-color: green;
	color: white;
}
.wrapper.running #start {
	background-color: red;
}
.wrapper.running .timerDisplay {
	background-color: #a2ff9c;
	box-shadow: 0 0 50px #1ef50f;
	animation: shadow-blink .5s ease-in-out infinite;
}
@keyframes shadow-blink {
	0% {
		box-shadow: 0 0 50px 0 #1ef50f;
	}
	50% {
		box-shadow: 0 0 50px 4px #1ef50f;
	}
}
button {
	border-radius: 10px;
	font-size: 1em;
}
