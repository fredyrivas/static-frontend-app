window.$ = window.jQuery = require("jquery");


import Preloader from './modules/Preloader.js'


const APP = window.APP || {};

const initApp = () => {
    window.APP = APP

    ///custom app events handler
    APP.emit = (name, events, data) => {
        let customData = data || null
        const fireCallbacks = (callback) => { callback(customData); };
        events[name].forEach(fireCallbacks);
    }

    APP.random = (min, max) => {
        if (max == null) { max = min; min = 0; }
        if (min > max) { var tmp = min; min = max; max = tmp; }
        return min + (max - min) * Math.random();
    }

    //find out if its mobile browser
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    APP.isMobile = isMobile

    APP.Preloader = new Preloader()

    APP.Preloader.on('complete', ()=>{
        console.log('site loaded');
    })

}

if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    initApp()
} else {
    document.addEventListener('DOMContentLoaded', initApp)
}


