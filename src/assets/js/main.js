window.$ = window.jQuery = require("jquery");


import Preloader from './modules/Preloader.js'


const APP = window.APP || {};

const initApp = () => {
    window.APP = APP

    let isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    APP.isMobileDevice = isMobileDevice

    APP.Preloader = new Preloader()

    APP.Preloader.onPreloadComplete({
        callback: () => {
            console.log('site loaded');
            ///
        }
    })

}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}


