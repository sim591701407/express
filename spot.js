(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click',start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('I'))
        .then(() => engine.shake())
		.then(() => engine.toText('L'))
        .then(() => engine.shake())
        .then(() => engine.toText('O'))
        .then(() => engine.shake())
        .then(() => engine.toText('V'))
        .then(() => engine.shake())
        .then(() => engine.toText('E'))
        .then(() => engine.shake())
		.then(() => engine.toText('Y'))
        .then(() => engine.shake())
        .then(() => engine.toText('O'))
        .then(() => engine.shake())
        .then(() => engine.toText('U'))
        .then(() => engine.shake())
		.then(() => engine.toText('两年前写的'))
        .then(() => engine.shake())
		.then(() => engine.toText('然而现在'))
        .then(() => engine.shake())
		.then(() => engine.toText('还是没有女朋友'))
        .then(() => engine.shake())
		.then(() => engine.toText('T-T！'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
	.start();
})();
