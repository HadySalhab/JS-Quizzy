class Timer {
	constructor(totalDuration, callbacks) {
		this.totalDuration = totalDuration;
		this.callbacks = callbacks;
		this.timeRemaining = totalDuration;
		this.intervalId = null;
	}

	startTimer() {
		this.callbacks.onStart(this.totalDuration);
		this.intervalId = setInterval(() => {
			this.timeRemaining = this.timeRemaining - 0.02;
			if (this.timeRemaining <= 0) {
				this.timeRemaining = 0;
				this.callbacks.onTick(this.timeRemaining.toFixed(0));
				this.callbacks.onComplete();
				this.clearTimer();
			} else {
				this.callbacks.onTick(this.timeRemaining.toFixed(0));
			}
		}, 20);
	}
	clearTimer() {
		clearInterval(this.intervalId);
	}
}

export default Timer;
