window.$ = window.jQuery = require("jquery");
import { TweenMax } from "gsap";


import Preloader from './modules/Preloader.js'
import BrowserSupport from './modules/BrowserSupport.js'



class App {
    constructor() {

        this.browserSupport = new BrowserSupport({
            versions: {
                ch: 68,
                sa: 11,
                fi: 61,
                op: 55,
                msie: 10
            },
            container: '.browser-support'
        })

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
