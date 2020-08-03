import gsap from 'gsap';

const imagesloaded = require('imagesloaded')

export default class Preloader{

    constructor (options){
        
        this.init()
        this.onPreloadCompleteInt = new Function()
    }
    

    init(){
        imagesloaded('main', ()=>{
            setTimeout(()=>{
                this.onPreloadCompleteInt()
                gsap.to('#preloader', .5, {delay:.5, autoAlpha:0, onComplete:()=>{
                    $('#preloader').remove()
                }});
            }, 500)
        })
    }

    showPreloader(){
        gsap.to('#preloader', .5, {autoAlpha:1});
    }
    hidePreloader(){
        gsap.to('#preloader', .5, {autoAlpha:0});
    }

    onPreloadComplete(obj){
        this.onPreloadCompleteInt = obj.callback
    }
}


