class GuessingGame {
    constructor() {
        var max = 0;
        var min = 0;
    }

    setRange (min, max) {
    	if (min === undefined || max===undefined){
    		throw new Error ("Invalid input");
    	}
    	if (min > max){
    		throw new Error ("Min must be less than max");
    	}
        this.min = min;
        this.max = max;
    }

    guess() {
        return  Math.round((this.max-this.min)/2) + this.min;
    }

    lower() {
        this.max =  Math.round((this.max-this.min)/2) + this.min;
    }

    greater() {
        this.min =  Math.round((this.max-this.min)/2) + this.min;
    }
}
module.exports = GuessingGame;
