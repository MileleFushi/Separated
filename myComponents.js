function changeLocationWhenMouseDown(id) {

    if (id === undefined) {
        id = "brak";
    } else {
        console.log("mouseDown");

        document.getElementById(id).style.left = document.getElementById(id).getBoundingClientRect().left + 2 + "px";
        document.getElementById(id).style.top = document.getElementById(id).getBoundingClientRect().top + 2 + "px";
    }
}

function changeLocationWhenMouseUp(id) {
    if (id === undefined) {
        id = "brak";
    } else {
        console.log("mouseUp");
        document.getElementById(id).style.left = document.getElementById(id).getBoundingClientRect().left - 2 + "px";
        document.getElementById(id).style.top = document.getElementById(id).getBoundingClientRect().top - 2 + "px";
    }
}

function viewHintWhenMouseOverButton(thisButton, color, id, x) {
    if (id === undefined) {
        id = "brak";
    } else {
        console.log("mouseOver");
        switch (color) {
            case wino:
                thisButton.src = 'http://oi65.tinypic.com/2z3zxhe.jpg';
                break;

            case serce:
                thisButton.src = 'http://oi65.tinypic.com/5vvd6f.jpg';
                break;

            case karo:
                thisButton.src = 'http://oi68.tinypic.com/315h30n.jpg';
                break;

            case trefl:
                thisButton.src = 'http://oi68.tinypic.com/20j396t.jpg';
                break;
        }


        function moreVisible() {
            if (x > 1) {
                clearInterval(t);
            }
            x += 0.05;
            console.log("x = " + x);
            document.getElementById(id).style.opacity = x;
            document.getElementById(id).style.filter = "alpha(opacity=" + (x * 100) + ")";
        }
        var t = setInterval(moreVisible, 5);
    }
}

function hideHintWhenMouseOutOfButton(thisButton, color, id, x) {
    if (id === undefined) {
        id = "brak";
    } else {
        console.log("mouseOut");
        switch (color) {
            case wino:
                thisButton.src = 'http://oi68.tinypic.com/21mf4wh.jpg';
                break;

            case serce:
                thisButton.src = 'http://oi66.tinypic.com/yi32v.jpg';
                break;

            case karo:
                thisButton.src = 'http://oi66.tinypic.com/21mwwok.jpg';
                break;

            case trefl:
                thisButton.src = 'http://oi63.tinypic.com/zj9lis.jpg';
                break;

        }


        function lessVisible() {
            if (x < 0) {
                clearInterval(t);
                console.log("cleared!");

            }
            x -= 0.05;
            console.log("x = " + x);
            document.getElementById(id).style.opacity = x;
            document.getElementById(id).style.filter = "alpha(opacity=" + (x * 100) + ")";
        }
        var t = setInterval(lessVisible, 5);
    }
}