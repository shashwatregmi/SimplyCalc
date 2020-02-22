document.addEventListener('DOMContentLoaded', function() {
	//INPUTS:

	var zero = document.getElementById('zero');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var dot = document.getElementById('dot');
    var clear = document.getElementById('clear');


    zero.addEventListener('click', function() {
        document.getElementById("numbox").value += '0';
    });

    one.addEventListener('click', function() {
        document.getElementById("numbox").value += '1';
    });

    two.addEventListener('click', function() {
        document.getElementById("numbox").value += '2';
    });

    three.addEventListener('click', function() {
        document.getElementById("numbox").value += '3';
    });

    four.addEventListener('click', function() {
        document.getElementById("numbox").value += '4';
    });

    five.addEventListener('click', function() {
        document.getElementById("numbox").value += '5';
    });

    six.addEventListener('click', function() {
        document.getElementById("numbox").value += '6';
    });

    seven.addEventListener('click', function() {
        document.getElementById("numbox").value += '7';
    });

    eight.addEventListener('click', function() {
        document.getElementById("numbox").value += '8';
    });

    nine.addEventListener('click', function() {
        document.getElementById("numbox").value += '9';
    });

    dot.addEventListener('click', function() {
        document.getElementById("numbox").value += '.';
    });

    clear.addEventListener('click', function() {
        document.getElementById("calc").reset();
    });

    ////OPERATIONS:
    var add = document.getElementById('add');
    var subtract = document.getElementById('subtract');
    var times = document.getElementById('times');
    var divide = document.getElementById('divide');

    add.addEventListener('click', function() {
        document.getElementById("numbox").value += '+';
    });

    subtract.addEventListener('click', function() {
        document.getElementById("numbox").value += '-';
    });

    times.addEventListener('click', function() {
        document.getElementById("numbox").value += '*';
    });

    divide.addEventListener('click', function() {
        document.getElementById("numbox").value += '/';
    });

});