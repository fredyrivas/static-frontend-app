import { TimelineMax } from 'gsap'

const imagesloaded = require('imagesloaded')

export default class Preloader{

    constructor (options){
        
        this.init()
        this.onPreloadCompleteInt = new Function()
    }
    

    init(){
        imagesloaded('main', ()=>{
            setInterval(()=>{
                this.onPreloadCompleteInt()
                TweenMax.to('#preloader', .5, {delay:.5, autoAlpha:0, onComplete:()=>{
                    $('#preloader').remove()
                }});
            }, 500)
        })
    }

    showPreloader(){
        TweenMax.to('#preloader', .5, {autoAlpha:1});
    }
    hidePreloader(){
        TweenMax.to('#preloader', .5, {autoAlpha:0});
    }

    onPreloadComplete(obj){
        this.onPreloadCompleteInt = obj.callback
    }
}


