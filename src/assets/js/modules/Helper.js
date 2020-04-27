////import gsap plugins from /lib
import MorphSVGPlugin from '../lib/MorphSVGPlugin.js';
import { TimelineMax } from 'gsap';

///import scrollmagic
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


//import masonry and imagesloaded as jquery plugin
const Masonry = require('masonry-layout');
const imagesloaded = require('imagesloaded')
var $ = require('jquery');
imagesloaded.makeJQueryPlugin($);


//import scroll animate to
import ScrollTo from 'scroll-animate-to'

//import swiper
import Swiper from 'swiper';





// setupScrollmagic() {
//     this.controller = new ScrollMagic.Controller();

//     this.scene = new ScrollMagic.Scene({
//         duration: 700,
//         triggerHook: .7,
//         reverse: true,
//         triggerElement: '.sectionname'
//     })
//         .addIndicators({ name: "scene" })
//         .setTween(this.tl)
//         .addTo(this.controller)
// }




// setupMasonry(){
//     this.msnry = new Masonry('.grid', {
//         itemSelector: '.item',
//         gutter: '.gutter-sizer',
//         columnWidth: '.grid-sizer',
//         percentPosition: true
//     });
// }

// preloadImages() {
//     TweenMax.set($('.grid-rectas-categoria'), {alpha:0})

//     $('.grid-rectas-categoria').imagesLoaded()
//         .done((instance) => {
//             TweenMax.to($('.grid-rectas-categoria'), .5, {alpha:1})
//             this.setupMasonry()
//         })
//         .progress((instance, image) => {

//         });
// }
