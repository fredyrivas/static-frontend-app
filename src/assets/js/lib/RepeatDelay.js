class RepeatDelay {
    constructor(options) {
        this.continueRepeat = true
        this.internalIterator = 0

        this.execFunc = options.execFunc
        this.delayTime = options.delayTime
        this.limitRepeat = options.limitRepeat
        this.initialDelay = options.initialDelay || 0
        this.completeFunc = options.completeFunc || new Function()

        TweenMax.delayedCall(options.initialDelay, function(){
            this.initialFunction()
        }.bind(this))
    }

    initialFunction() {
        if (this.continueRepeat) {
            if(this.internalIterator < this.limitRepeat){
                this.execFunc()

                TweenMax.delayedCall(this.delayTime, function() {
                    this.repeatFunction()
                }.bind(this))
            }else{
                this.completeFunc()
            }
        }
        this.internalIterator++
    }

    repeatFunction() {
        this.initialFunction()
    }

    pauseRepeat(){
        this.continueRepeat = false
    }

    killRepeat(){
        this.continueRepeat = false
        this.internalIterator = 0
    }

    resetAndInit(){
        this.continueRepeat = true
        this.internalIterator = 0
        this.initialFunction()
    }
}

export default RepeatDelay;
