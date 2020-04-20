window.$ = window.jQuery = require("jquery");
import { TweenMax } from "gsap";


import Preloader from './modules/Preloader.js'




class App {
    constructor() {

        

        this.preloader = new Preloader()

        this.isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


        this.init()
    }


    addEvents() {

    }


    init() {
        this.preloader.onPreloadComplete({
            callback: () => {
                console.log('site loaded');
                this.addEvents()
            }
        })
    }
}

const app = new App()
