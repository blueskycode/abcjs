(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{570:function(t,e,a){"use strict";a.r(e);var s=a(43),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"return-value-of-renderabc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#return-value-of-renderabc"}},[t._v("#")]),t._v(" return value of renderAbc")]),t._v(" "),a("h2",{attrs:{id:"visualobjs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualobjs"}},[t._v("#")]),t._v(" visualObjs")]),t._v(" "),a("p",[t._v("When you call "),a("code",[t._v("renderAbc")]),t._v(" the return value is an array of objects. Those objects contain a lot of information about the tune that was rendered.")]),t._v(" "),a("p",[t._v("Each item in the array that was passed back is one tune. Even though it is not as common, you can render multiple tunes with one ABC string. For instance, the following ABC string will produce two tunes:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("X:1\nK:C\nCDEF|\n\nX:2\nK:G\nGABc|\n")])])]),a("p",[t._v("Here is an example of the "),a("code",[t._v("renderAbc")]),t._v(" call:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" visualObjs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" abcjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("renderAbc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id-for-tune-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id-for-tune-2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    abcString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" add_classes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This section will discuss the structure of "),a("code",[t._v("visualObjs")]),t._v(". You can, of course, name this anything you like, but this documentation will refer to it by this name.")]),t._v(" "),a("h2",{attrs:{id:"array-of-tunes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array-of-tunes"}},[t._v("#")]),t._v(" Array of Tunes")]),t._v(" "),a("p",[t._v("Since the return value is an array but in many cases you know you have only passed one tune in, the first thing you'll do is:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" visualObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" visualObjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Volatile Format")]),t._v(" "),a("p",[t._v("The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.")])]),t._v(" "),a("h3",{attrs:{id:"formatting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formatting"}},[t._v("#")]),t._v(" formatting")]),t._v(" "),a("p",[t._v("This contains a list of the fonts used for the various types of elements and other formatting commands that have been either passed in on the "),a("code",[t._v("renderAbc")]),t._v(" call or appear in "),a("code",[t._v("%%")]),t._v(" lines.")]),t._v(" "),a("h3",{attrs:{id:"lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lines"}},[t._v("#")]),t._v(" lines")]),t._v(" "),a("p",[t._v('This is an array of all the music. Each item in the array is a "staff system". That is, it could be one staff for single instrument music, it could be two staves for piano music, or it could be more for ensemble music.')]),t._v(" "),a("p",[t._v("If you look at this object in the debugger, you can drill down and see all the notes and other symbols that you've defined.")]),t._v(" "),a("h3",{attrs:{id:"media"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[t._v("#")]),t._v(" media")]),t._v(" "),a("p",[t._v('Either "screen" or "print". When printing, the margins and the header and footer are used.')]),t._v(" "),a("h3",{attrs:{id:"metatext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metatext"}},[t._v("#")]),t._v(" metaText")]),t._v(" "),a("p",[t._v("This is all of the items that aren't associated with the music. That includes the text that appears before the music starts and the text that appears after the music ends.")]),t._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),a("p",[t._v("The version of this format.")]),t._v(" "),a("h3",{attrs:{id:"visualtranspose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visualtranspose"}},[t._v("#")]),t._v(" visualTranspose")]),t._v(" "),a("p",[t._v("If the parameter "),a("code",[t._v("visualTranspose")]),t._v(" was passed in on the "),a("code",[t._v("renderAbc")]),t._v(" call, that value is reflected here.")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Volatile Format")]),t._v(" "),a("p",[t._v("The format of this object is NOT guaranteed to be backwards compatible, so if you do delve into this and write code that depends on it, you need to retest whenever you upgrade abcjs.")])]),t._v(" "),a("h3",{attrs:{id:"getbarlength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbarlength"}},[t._v("#")]),t._v(" getBarLength()")]),t._v(" "),a("p",[t._v("Durations have units where a whole note is 1. This returns how long a measure is. For example, 4/4 time returns "),a("code",[t._v("1")]),t._v(", 3/4 time returns "),a("code",[t._v("0.75")]),t._v(", 6/8 time returns "),a("code",[t._v("0.75")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"getbeatlength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbeatlength"}},[t._v("#")]),t._v(" getBeatLength()")]),t._v(" "),a("p",[t._v("Durations have units where a whole note is 1. This returns how long a beat is. For example, 4/4 time returns "),a("code",[t._v("0.25")]),t._v(", 6/8 time returns "),a("code",[t._v("0.375")]),t._v(" since a beat is three eighth notes.")]),t._v(" "),a("h3",{attrs:{id:"getbeatspermeasure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbeatspermeasure"}},[t._v("#")]),t._v(" getBeatsPerMeasure()")]),t._v(" "),a("p",[t._v("This returns how many beats are in a measure. For example, 4/4 time returns "),a("code",[t._v("4")]),t._v(", 6/8 time returns "),a("code",[t._v("2")]),t._v(" since a beat is three eighth notes.")]),t._v(" "),a("h3",{attrs:{id:"getbpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getbpm"}},[t._v("#")]),t._v(" getBpm()")]),t._v(" "),a("p",[t._v("This is the starting beats per minute. Tempo changes could appear later in the tune, but this is the value that was set with the "),a("code",[t._v("Q:")]),t._v(" statement, or if that statement doesn't exist, it is the default tempo of 180.")]),t._v(" "),a("h3",{attrs:{id:"getmeter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmeter"}},[t._v("#")]),t._v(" getMeter()")]),t._v(" "),a("p",[t._v("This returns the internal representation of the meter as an object. More often you'll find "),a("code",[t._v("getMeterFraction")]),t._v(" more useful if you are doing calculations.")]),t._v(" "),a("h3",{attrs:{id:"getmeterfraction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getmeterfraction"}},[t._v("#")]),t._v(" getMeterFraction()")]),t._v(" "),a("p",[t._v("This returns an object with the properties "),a("code",[t._v("num")]),t._v(" and "),a("code",[t._v("den")]),t._v(". For instance, 3/4 time returns "),a("code",[t._v("{num: 3, den: 4}")]),t._v(". Common and Cut time are resolved to "),a("code",[t._v("{num: 4, den: 4}")]),t._v(" and "),a("code",[t._v("{num: 2, den: 2}")]),t._v(" respectively.")]),t._v(" "),a("h3",{attrs:{id:"getpickuplength"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getpickuplength"}},[t._v("#")]),t._v(" getPickupLength()")]),t._v(" "),a("p",[t._v("Durations have units where a whole note is 1. If the first measure is not full, then this is the length of that first measure. It is then considered pickup notes.")]),t._v(" "),a("h3",{attrs:{id:"getkeysignature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getkeysignature"}},[t._v("#")]),t._v(" getKeySignature()")]),t._v(" "),a("p",[t._v("This returns the internal representation of the key signature with all of its pieces broken apart.")]),t._v(" "),a("h3",{attrs:{id:"getelementfromchar-charindex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getelementfromchar-charindex"}},[t._v("#")]),t._v(" getElementFromChar(charIndex)")]),t._v(" "),a("p",[a("code",[t._v("charIndex")]),t._v(" is a character position in the original ABC. This searches through the tune for the element that matches that character. If you pass in the index of a non-note element it returns null.")]),t._v(" "),a("h3",{attrs:{id:"millisecondspermeasure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#millisecondspermeasure"}},[t._v("#")]),t._v(" millisecondsPerMeasure()")]),t._v(" "),a("p",[t._v("This does the calculation using beats per minute and beats per measure.")]),t._v(" "),a("h3",{attrs:{id:"setupaudio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setupaudio"}},[t._v("#")]),t._v(" setUpAudio()")]),t._v(" "),a("p",[t._v("If you aren't using the built in synth, but you still want the information that the synth provides, call this. If you aren't overriding the BPM or anything else that can be set in the synth call, you can call this with no parameters. Otherwise specify the items you want to override.")]),t._v(" "),a("p",[t._v("This returns an array of all the sequence data. Normally you won't need this information, but there may be cases where it is useful for post-processing.")])])}),[],!1,null,null,null);e.default=r.exports}}]);