// Copyright by Brett Fraley 2016

var divjot_wrapper = document.getElementById('divjot-wrapper');

// Editor textarea elements
var divjot_html = document.getElementById('divjot-html');
var divjot_css = document.getElementById('divjot-css');
var divjot_js = document.getElementById('divjot-js');
var usermarkup = document.getElementById('divjot-markup');
var userstyle = document.getElementById('divjot-style');

// Editor control buttons
var controls = {
    opacity:  document.getElementById('opacity-control'),
    fsmaller: document.getElementById('fsize-smaller-button'),
    fbigger: document.getElementById('fsize-bigger-button'),
    dark: document.getElementById('dark-button'),
    light: document.getElementById('light-button'),
    html: document.getElementById('html-button'),
    css: document.getElementById('css-button'),
    js: document.getElementById('js-button'),
    fsize: 10
};    

/* Functions */

// Send user source to DOM.
function markup_out() { usermarkup.innerHTML=(divjot_html.value); }
function style_out() { userstyle.innerHTML=(divjot_css.value); }
function js_out() { return eval(divjot_js.value); }

// Toggle 'show/hide' editors.
function toggle(el) {
    if (el.style.display === "none")
        el.style.display = "inline-block";
    else
        el.style.display = "none";
}

function font_smaller() {
    controls.fsize -= 2;
    divjot_html.style.fontSize = controls.fsize + "pt";
    divjot_css.style.fontSize = controls.fsize + "pt";
    divjot_js.style.fontSize = controls.fsize + "pt";
}

function font_bigger() {
    controls.fsize += 2;
    divjot_html.style.fontSize = controls.fsize + "pt";
    divjot_css.style.fontSize = controls.fsize + "pt";
    divjot_js.style.fontSize = controls.fsize + "pt";
}

function dark() {
    divjot_wrapper.style.backgroundColor = "#333";
    controls.dark.style.display = "none";
    controls.light.style.display = "inline";
}

function light() {
    divjot_wrapper.style.backgroundColor = "#FFF";
    controls.light.style.display = "none";
    controls.dark.style.display = "inline";
}

/* Events */

// User code I/O event triggers. 
divjot_html.addEventListener('keyup' || 'keypress', markup_out, false);

divjot_css.addEventListener('keyup' || 'keypress', style_out, false);

divjot_js.addEventListener('keypress', function(key) {
    if (key.keyCode === 13)    js_out();    }, false);

// Control button event triggers.
controls.opacity.addEventListener('input', function() {
    divjot_wrapper.style.opacity = controls.opacity.value; }, false);

controls.fsmaller.addEventListener('click', font_smaller, false);

controls.fbigger.addEventListener('click', font_bigger, false);

controls.dark.addEventListener('click', dark, false);

controls.light.addEventListener('click', light, false);

controls.html.addEventListener('click', function() { toggle(divjot_html); }, false);

controls.css.addEventListener('click', function() { toggle(divjot_css); }, false);

controls.js.addEventListener('click', function() { toggle(divjot_js); }, false); 
