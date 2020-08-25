import gsap from 'gsap';

const imagesloaded = require('imagesloaded')

export default class Preloader {

    constructor() {
        this._events = {};

        this.init()
    }


    init() {
        imagesloaded('main', () => {

            APP.emit('complete', this._events);

            gsap.to('#preloader', .5, {
                autoAlpha: 0, onComplete: () => {
                    $('#preloader').remove()
                }
            });
        })
    }

    on(name, listener) {
        if (!this._events[name]) {
            this._events[name] = []
        }

        this._events[name].push(listener)
    }
}




