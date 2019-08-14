import Highway from '@dogstudio/highway';
import {TweenMax, TimelineMax} from 'gsap';

const charming = require('charming');
var ProgressBar = require('progressbar.js');

let loader = document.getElementById('loader'),
    wipes_divs = loader.querySelectorAll('.wipes'),
    wipes1_div = loader.querySelector('.wipes-one'),
    wipes2_div = loader.querySelector('.wipes-two'),
    logoloader_wrapper = document.querySelector('.logo-main-wrapper'),
    circle_loader = document.querySelector('.circle-loader'),
    logo_img = document.getElementById('logo'),
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

    var circle = new ProgressBar.Circle('#circle-loader', {
        color: '#02E1FE',
        strokeWidth: 3,
    });

    // LINK A
    links_a.forEach(a => {
        charming(a);
        a.style.display = 'flex';
    });
    
    let span_char = nav_ul.querySelectorAll('span');
    span_char.forEach((span) => {
        span.style.display = 'block';
        span.style.opacity = '0';
    });
    // tl.set(circle_loader, {display: 'none'})

export default class Animationtransition extends Highway.Transition {
    out({from, trigger, done}) {
        circle.stop();
        circle.set(0);
        tl.set(loader, {width: '100%'})
        .set(logoloader_wrapper, {width: '100%'})
        // .addLabel("slide")
        .staggerFromTo(wipes_divs, 1, {width: '0%'}, {width: '100%'}, .5)
        // bring in the logo
        .from(logo_img, 1, {opacity:0, y: 100, rotation:40, ease: Back.easeOut.config(1.2), onComplete: allComplete})
        function allComplete() {
            circle.stop();
            circle.set(0);
            setTimeout(() => {
                circle.animate(1, {
                    duration: 5000
                }, function() {
                    tl.fromTo(circle_loader, 1, {opacity: 1}, {opacity: 0, delay: .5})
                    .fromTo(loader, 1, {width: '100%', marginLeft: '0%'}, {width: '0%', marginLeft: '100%'})
                    .set(loader, {width: '0%', marginLeft: '0%'})
                    .set(logoloader_wrapper, {width: '0%'})
                    .set(wipes1_div, {width: '0%'})
                    .set(wipes2_div, {width: '0%'})
                    .set(circle_loader, {opacity: 1})
                    // .set(logo_img, {opacity:1})
                    // .fromTo(wipes1_div, 1, {width: '0%',}, {width:'100%', zIndex: 9})
                    // .fromTo(wipes1_div, .5, {x:0}, {x: '100%'})
                });
            }, 500);
        }
        done();
    }
    in({from, to, trigger, done}) {
        tl.set(circle_loader, {opacity: 1})
        console.log('IN ', from, to, trigger.parentElement, done)
        from.remove();
        done();
    }
}
