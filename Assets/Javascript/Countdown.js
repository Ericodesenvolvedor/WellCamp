class Countdown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get dataAtual() {
        return new Date();
    }

    get futureDateTransformar() {
        return new Date(this.futureDate);
    }

    get timeStampDiff() {
        return this.futureDateTransformar.getTime() - this.dataAtual;
    }

    get days() {
        return Math.floor(this.timeStampDiff / (24 * 60 * 60 * 1000))
    }

    get hours() {
        return Math.floor(this.timeStampDiff / (60 * 60 * 1000))
    }

    get minutes() {
        return Math.floor(this.timeStampDiff / (60 * 1000))
    }

    get seconds() {
        return Math.floor(this.timeStampDiff / (1000))
    }

    get total() {
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return [days, hours, minutes, seconds];
    }

}

const tempoParaFormatura = new Countdown("20 July 2022 18:00:00 GMT-0300");
const time = document.querySelectorAll('[data-time]');

const timeInterval = setInterval(() => {
    time.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaFormatura.total[index];
    })
})