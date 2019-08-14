// import the libraries
import Highway from '@dogstudio/highway';
import {TweenMax, TimelineMax} from 'gsap';
import Animationtransition from './transition/Animationtransition.js';

var ProgressBar = require('progressbar.js');
const charming = require('charming');

// Global variables
let header_el = document.querySelector('header'),
    loader = document.getElementById('loader'),
    wipes1_div = loader.querySelector('.wipes-one'),
    wipes2_div = loader.querySelector('.wipes-two'),
    circle_loader = document.querySelector('.circle-loader'),
    logo_img = document.getElementById('logo'),
    hamburger_menu = document.querySelector('.menu'),
    hamburger = document.querySelector('.hamburger-menu'),
    ham_before = hamburger.querySelector('.span-before'),
    ham_after = hamburger.querySelector('.span-after'),
    hamaftertop_span = ham_after.children[0],
    hamafterbottom_span = ham_after.children[1],
    nav = document.querySelector('nav'),
    uislider_div = nav.querySelector('.ui-slide-left'),
    links_a = nav.querySelectorAll('.link_a'),
    li_a = nav.querySelectorAll('.link'),
    nav_ul = nav.querySelector('ul'),
    tl = new TimelineMax();    

// VARIABLES FOR HOMEPAGE
let top_div = document.querySelector('#top_div'),
    intro_img = document.querySelector('.img-animate'),
    introImg = document.querySelector('img'),
    wrappertop_img = top_div.querySelector('.img-wrapper'),
    layertop_div = wrappertop_img.querySelector('.flex-layer'),
    logotop_img = layertop_div.querySelector('img'),
    flex_left_div = top_div.querySelector('.--flex-left'),
    uileft_div = top_div.querySelector('.ui-flex-left'),
    pleft_text = flex_left_div.querySelector('.--pleft'),
    flex_right_div = top_div.querySelector('.--flex-right'),
    uiright_div = top_div.querySelector('.ui-flex-right'),
    pright_text = flex_right_div.querySelector('.--pright'),
    // HOMEPAGE CONTENT VARIABLES
    midcontent_div = document.querySelector('.mid-content .parent'),
    contentleft_div = midcontent_div.querySelector('.--content-left'),
    uivertical_div = midcontent_div.querySelector('.ui-loader-center'),
    profile_div = midcontent_div.querySelector('.profile'),
    imgwrapper_div = profile_div.querySelector('.img-wrapper'),
    inside_imgwrapper = imgwrapper_div.querySelector('img'),
    profname_h1 = profile_div.querySelector('h1'),
    profsub_h3 = profile_div.querySelector('h3'),
    textwrapper_right = midcontent_div.querySelector('.text-wrapper'),
    verse_h1 = textwrapper_right.querySelector('h1'),
    uiverse_title = textwrapper_right.querySelector('.ui-verse'),
    hrline_div = uiverse_title.querySelector('.hr-line'),
    textverse_p = uiverse_title.querySelector('p');
    

    // console.log(textwrapper_right)
    
    charming(profname_h1);
    charming(profsub_h3);
    charming(verse_h1);
    
    let h1name_spans = profname_h1.querySelectorAll('span'),
        h3sub_spans = profsub_h3.querySelectorAll('span'),
        h1verse_spans = verse_h1.querySelectorAll('span');

    setBlock(h1name_spans);
    setBlock(h3sub_spans);
    setBlock(h1verse_spans);
    tl.set(profname_h1, {display: 'flex'})
      .set(profsub_h3, {display: 'flex'})
      .set(verse_h1, {display: 'flex', flexWrap: 'wrap'})
      .set(h1name_spans[2], {paddingRight: '8px'})
      .set(h1name_spans[6], {paddingRight: '8px'})
      .set(h1name_spans[11], {paddingRight: '8px'})
      .set(h3sub_spans[8], {paddingRight: '8px'})
      .set(h3sub_spans[11], {paddingRight: '8px'})
      .set(h1verse_spans[1], {paddingRight: '5px'})
      .set(h1verse_spans[5], {paddingRight: '5px'})
      .set(h1verse_spans[8], {paddingRight: '5px'})
      .set(h1verse_spans[12], {paddingRight: '5px'})
      .set(h1verse_spans[16], {paddingRight: '5px'})
      .set(h1verse_spans[22], {paddingRight: '5px'})
      .set(h1verse_spans[24], {paddingRight: '5px'})
      .set(h1verse_spans[26], {paddingRight: '5px'})
      .set(h1verse_spans[33], {paddingRight: '5px'})
      .set(h1verse_spans[36], {paddingRight: '5px'})
      .set(h1verse_spans[47], {paddingRight: '5px'})
      .set(h1verse_spans[50], {paddingRight: '5px'})
      .set(h1verse_spans[53], {paddingRight: '5px'})
      .set(h1verse_spans[59], {paddingRight: '5px'})
      .set(h1verse_spans[63], {paddingRight: '5px'})
      .set(h1verse_spans[70], {paddingRight: '5px'})
      .set(h1verse_spans[73], {paddingRight: '5px'})
      .set(h1verse_spans[77], {paddingRight: '5px'})
      .set(h1verse_spans[81], {paddingRight: '5px'})
      .set(h1verse_spans[84], {paddingRight: '5px'})
      .set(h1verse_spans[101], {paddingRight: '5px'})
    function setBlock(arry) {
        arry.forEach(arr => {
            arr.style.display = 'block';
            arr.style.fontFamily = 'Roboto, sans-serif';
        });
    }

    // ANIMATING THE TOP DIV FIRST
    // ==========================================
    charming(pright_text);
    charming(pleft_text);
    let spansText = pleft_text.querySelectorAll('span');
    let spansTextRight = pright_text.querySelectorAll('span');
    spansText.forEach(e => {
        e.style.display = 'block';
    });
    tl.set(spansText[2], {paddingRight: '4px'})
    spansTextRight.forEach(e => {
        e.style.display = 'block';
    });

    
    // ANIMATING THE HOMEPAGE
    tl.fromTo(intro_img, 1, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, zIndex: 20})
    .fromTo(intro_img, .5, {top: '50%', scale: .25}, {top: '46px', scale: .25})
    .fromTo(wrappertop_img, .3, {height: '0px', width: '0px'}, {height: '75px', width: '75px'})
    .fromTo(layertop_div, .3, {height: '0px', width: '0px'}, {height: '60px', width: '60px'})
    .fromTo(logotop_img, .5, {opacity: 0}, {opacity: 1})
    .fromTo(introImg, .1, {opacity: 1}, {opacity: 0})
    .addLabel("aimateWidth")
    .addLabel("animateLR")
    .addLabel("animateStag")
    .from(flex_left_div, .5, {display: 'none', border: 'none', width: 0}, "aimateWidth")
    .from(uileft_div, .5, {opacity: 0, x: '150px', delay: 0.4}, "animateLR")
    .set(pleft_text, {display: 'flex', display: 'flex'})
    .staggerFrom(spansText, .5, {opacity: 0, y: '30px'}, .05, null, "animateStag")
    .from(flex_right_div, .5, {display: 'none', border: 'none', width: 0}, "aimateWidth")
    .from(uiright_div, .5, {opacity: 0, x: '-150px', delay: 0.4}, "animateLR")
    .set(pright_text, {display: 'flex'})
    .staggerFrom(spansTextRight, .5, {opacity: 0, y: '30px'}, .05, null, "animateStag-=.05")

    // CONTENT MID
    .from(uivertical_div, .8, {opacity: 0, height: '0px', y: '-300px'})
    .addLabel("slideThis")
    .from(imgwrapper_div, .8, {opacity: 0, x: 500}, "slideThis")
    .staggerFrom(h1name_spans, .2, {opacity: 0, y: 60}, .02)
    .staggerFrom(h3sub_spans, .2, {scale: .5, opacity: 0, x: 50}, .03)
    .from(textwrapper_right, .8, {opacity: 0, x: -500}, "slideThis")
    .staggerFrom(h1verse_spans, .2, {opacity: 0 , x: 200, y: -100, scale: .3}, .02)
    .from(textverse_p, .3, {x: -200, opacity: 0})
    .from(hrline_div, .3, {x: -200, opacity: 0})

    // BRINGING BACK TO THE ORIGINAL STATE THE IMG LOGO
    tl.set(intro_img, {top: '50%', scale: 1, opacity: 0})
    // =====================================================

    // LINK A
    links_a.forEach(a => {
        charming(a);
        a.style.display = 'flex';
        a.addEventListener('click', function() {

            // tl.set(loader, {width: '100%'})
            tl.set(hamburger_menu, {zIndex: 1});
            tl.fromTo(ham_after, .3, {opacity: 1}, {opacity: 1})
                .addLabel("hamburger")
                .fromTo(ham_before, .05, {marginLeft: '-61px'}, {marginLeft: '44px', delay: .5})
                .fromTo(hamaftertop_span, 1, {rotation: 34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
                .fromTo(hamafterbottom_span, 1, {rotation: -34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
                .fromTo(ham_after, .2, {x: 3}, {x: 0}, "hamburger")
                .staggerFromTo(span_char, .2, {opacity: 1}, {opacity: 0}, .01, "hamburger-=0.3")
                .fromTo(uislider_div, .5, {width: '0%'}, {width: '100%'}, "hamburger-=0.3")
                .fromTo(nav, .8, {width: '100%', marginLeft: '0%'}, {width: '0%', marginLeft: '100%', ease: Expo.easeOut, onComplete: setIndex}, "hamburger")
                function setIndex() {
                    console.log(123)
                    tl.set(header_el, {zIndex: 0, width: '0%'});
                }
                // .addLabel("slide")
                // .fromTo(wipes1_div, 1, {width: '0%'}, {width: '100%'}, "slide")
                // .fromTo(wipes2_div, 1, {width: '0%'}, {width: '100%'}, "slide+=0.5")
        })
    });
    
    let span_char = nav_ul.querySelectorAll('span');
    span_char.forEach((span) => {
        span.style.display = 'block';
        span.style.opacity = '0';
    });

// MAIN HIGHWAY ANIMATION
const H = new Highway.Core({
    transitions: {
        default: Animationtransition
    }
});

// GO FOR THE LINKS ADDING CLASS AND REMOVING CLASS 'is-active
H.on('NAVIGATE_IN', ({to, location}) => {
    // Check Active link
    for (let i = 0; i < links_a.length; i++) {
        const link = links_a[i];

        // Clean class
        link.classList.remove('is-active');

        // Add to the active link
        if (link.href === location.href) {
            link.classList.add('is-active');
        }
        
    }
});

// Listen the `NAVIGATE_OUT` event
// This event is sent everytime the `out()` method of a transition is run to hide a `data-router-view`
H.on('NAVIGATE_OUT', ({ from, trigger, location }) => {
    // console.log('NAVIGATE_OUT',from, trigger, location);
    // circle.stop();
    // circle.set(0);
});

// Listen the `NAVIGATE_END` event
// This event is sent everytime the `done()` method is called in the `in()` method of a transition
H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
    // console.log('NAVIGATE_END', to, from, trigger, location)
});

// =======================================


// EVENT LISTENER
// HAMBURGER MENU TOGGLE
ham_before.addEventListener('click', function() {
    tl.set(header_el, {zIndex: 10, width: '100%'});
    tl.set(hamburger_menu, {zIndex: 20});
    tl.fromTo(ham_before, .05, {marginLeft: '44px'}, {marginLeft: '-61px'})
        .addLabel("hamburger")
        .fromTo(hamaftertop_span, 1, {rotation: 0}, {rotation: 34, delay: .1, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
        .fromTo(hamafterbottom_span, 1, {rotation: 0}, {rotation: -34, delay: .1, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
        .fromTo(ham_after, .2, {x: 0}, {x: 3}, "hamburger")
        .fromTo(nav, .8, {width: '0%', marginLeft: '100%'}, {width: '100%', marginLeft: '0%', ease: Power2.easeOut}, "hamburger")
        .staggerFromTo(span_char, .3, {opacity: 0, y: 100}, {y: 0, opacity: 1}, .01, "hamburger+=0.2")
        .fromTo(uislider_div, .5, {width: '100%'}, {width: '0%'}, "hamburger+=0.5")
    }) 
    
ham_after.addEventListener('click', function() {
    // tl.fromTo();
    tl.fromTo(ham_after, .3, {opacity: 1}, {opacity: 1})
    .addLabel("hamburger")
    .fromTo(ham_before, .05, {marginLeft: '-61px'}, {marginLeft: '44px', delay: .5})
    .fromTo(hamaftertop_span, 1, {rotation: 34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
    .fromTo(hamafterbottom_span, 1, {rotation: -34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
    .fromTo(ham_after, .2, {x: 3}, {x: 0}, "hamburger")
    .staggerFromTo(span_char, .2, {opacity: 1}, {opacity: 0}, .01, "hamburger-=0.3")
    .fromTo(uislider_div, .5, {width: '0%'}, {width: '100%'}, "hamburger-=0.3")
    .fromTo(nav, .8, {width: '100%', marginLeft: '0%'}, {width: '0%', marginLeft: '100%', ease: Expo.easeOut, onComplete: setIndex}, "hamburger")
    function setIndex() {
        console.log(123)
        tl.set(header_el, {zIndex: 0, width: '0%'});
        tl.set(hamburger_menu, {zIndex: 1});
    }
}) 

// let loader_div = document.getElementById('loader'),
//     loader_wipes = loader_div.querySelectorAll('.wipes'),
//     circle_loader = document.getElementById('circle-loader'),
//     logo_img = document.getElementById('logo'),
//     timeline = new TimelineMax();
    

// document.addEventListener('DOMContentLoaded', function() {
//     var circle = new ProgressBar.Circle('#circle-loader', {
//         color: '#02E1FE',
//         strokeWidth: 3,
//     });

//     // logo_img.style.display = 'none';
//     timeline.set(circle_loader, {display: 'hidden'});
//     timeline.staggerFrom(loader_wipes, .4, {opacity:0, y:200, scale:.5}, .1, 0);
//     timeline.fromTo(logo_img, .8, {opacity:0, y: 100, rotation:40}, {y: -110, opacity: 1, rotation: 0, ease: Back.easeOut.config(1.2), onComplete: allComplete}, 3);
//     function allComplete() {
//         circle.animate(1, {
//             duration: 5000
//         }, function() {
//             setTimeout(() => {
//                 timeline.fromTo(circle_loader, 1, {opacity: 1, scale: 1}, {opacity: 0, scale: .5})
//                     .fromTo(loader_div, 1, {opacity: 1, y: 0}, {opacity: 0, y: '-200%'});
//             }, 500);
//         });
//     }
// });

// ==================================animation
// tl.set(loader, {width: '100%'})
// tl.fromTo(ham_after, .3, {opacity: 1}, {opacity: 1})
// .addLabel("hamburger")
// .fromTo(ham_before, .05, {marginLeft: '-61px'}, {marginLeft: '44px', delay: .5})
// .fromTo(hamaftertop_span, 1, {rotation: 34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
// .fromTo(hamafterbottom_span, 1, {rotation: -34}, {rotation: 0, ease: Elastic.easeOut.config(1, 0.3)}, "hamburger")
// .fromTo(ham_after, .2, {x: 3}, {x: 0}, "hamburger")
// .staggerFromTo(span_char, .2, {opacity: 1}, {opacity: 0}, .01, "hamburger-=0.3")
// .fromTo(uislider_div, .5, {width: '0%'}, {width: '100%'}, "hamburger-=0.3")
// .fromTo(nav, .8, {width: '100%', marginLeft: '0%'}, {width: '0%', marginLeft: '100%', ease: Expo.easeOut}, "hamburger")
// .addLabel("slide")
// .fromTo(wipes1_div, 1, {width: '0%'}, {width: '100%'}, "slide")
// .fromTo(wipes2_div, 1, {width: '0%'}, {width: '100%'}, "slide+=0.5")
// bring in the logo
// .fromTo(logo_img, .8, {opacity:0, y: 100, rotation:40}, {y: -110, opacity: 1, rotation: 0, ease: Back.easeOut.config(1.2), onComplete: allComplete}, 3)
// function allComplete() {
//     circle.animate(1, {
//         duration: 5000
//     }, function() {
//         setTimeout(() => {
//             tl.fromTo(circle_loader, 1, {opacity: 1, scale: 1}, {opacity: 0, scale: .5})
//                 // .fromTo(wipes1_div, 1, {width: '0%',}, {width:'100%', zIndex: 9})
//                 // .fromTo(wipes1_div, .5, {x:0}, {x: '100%'})
//         }, 500);
//     });
// }