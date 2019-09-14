function THEbility(thebility_options) {
    setTimeout(() => {
        thebility_getLanguageDirection();
        constALL();
        appendStyle(thebility_options);
        document.getElementById("thebility_thebilityIcon").style.display = "initial";
        getElementsFromDom();
        fixRtlPosition();
    }, 10);


}



let ltr;
let enabled = !1;
let enabled2 = !1;
let enabled3 = !1;
let enabled5 = !1;
let enabled6 = !1;
let langId = document.getElementsByTagName("html")[0];
let langName;



function thebility_getLanguageDirection() {
    langName = langId.lang;
    if (langName === ("he" || "ar" || "arc" || "dv" || "fa" || "ha" || "khw" || "ku" || "ps" || "ur" || "yi")) {
        ltr = 0;
        thebility_direction = 'right';
        thebility_direction_oposite = 'left';
    } else {
        ltr = 1;
        thebility_direction = 'left';
        thebility_direction_oposite = 'right';
    }

}

function fixRtlPosition() {
    if (!ltr) {
        document.getElementById("thebility_thebilityMainDiv").style.left = "calc(100vw - 63vw - 15vw)";
    }


}


function toggleThebility() {
    let thebility_dragThebility = document.getElementById("thebility_dragThebility");
    dragElement(thebility_dragThebility.parentNode);
    let thebility_thebilityMainDiv = document.getElementById("thebility_thebilityMainDiv");
    let icon = document.getElementById("thebility_thebilityIcon").getElementsByTagName("img")[0];
    if (!enabled) {
        enabled = !0;




        if (ltr) {
            icon.style.marginRight = "2vw";
        } else {
            icon.style.marginLeft = "2vw";
        }
        icon.style.transition = "0.7s";
        thebility_thebilityMainDiv.style.display = "flex";
        setTimeout(() => {
            thebility_thebilityMainDiv.style.opacity = "1";
        }, 10);
    } else {
        enabled = !1;

        if (ltr) {
            icon.style.marginRight = "0vw";
        } else {
            icon.style.marginLeft = "0vw";
        }
        thebility_thebilityMainDiv.style.display = "none";
        thebility_thebilityMainDiv.style.opacity = "0";
    }

}

function thebility_closeThebility() {
    enabled = !1;
    thebility_thebilityMainDiv.style.display = "none";
    thebility_thebilityMainDiv.style.opacity = "0";
    let icon = document.getElementById("thebility_thebilityIcon").getElementsByTagName("img")[0];
    if (ltr) {
        icon.style.marginRight = "0vw";
    } else {
        icon.style.marginLeft = "0vw";
    }
    icon.style.transition = "0.7s";
}

//function resetThebility() {}

let thebility_allElem = [];

function getElementsFromDom() {
    let b = document.getElementsByTagName("body")[0];
    let allTags = b.querySelectorAll("*");
    for (let i = 0; i < allTags.length; i++) {
        if (!allTags[i].classList.contains("thebility_t")) {
            thebility_allElem.push(allTags[i]);
        }
    }

}

//replace body.background
function replaceBodyBG() {
    let b = document.getElementsByTagName("body")[0];
    let bbg = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("background");
    let inst = document.createElement("div");
    inst.id = "inst";
    inst.setAttribute("style", bbg);
    inst.innerHTML = "";
    b.appendChild(inst);

}


//control functions
function fontDivSizeSlider(v) {
    for (let i = 0; i < thebility_allElem.length; i++) {
        thebility_allElem[i].style.fontSize = v + "vh";
    }
}

function saturSlider(v) {
    let contV = document.getElementById("contrastSlider").value;
    let brighV = document.getElementById("brightnessSlider").value;
    for (let i = 0; i < thebility_allElem.length; i++) {
        thebility_allElem[i].style.filter =
            "contrast(" + contV + ") brightness(" + brighV + ") saturate(" + v + ")";
    }
}

function contrastSlider(v) {
    let grayV = document.getElementById("saturSlider").value;
    let brighV = document.getElementById("brightnessSlider").value;
    for (let i = 0; i < thebility_allElem.length; i++) {
        thebility_allElem[i].style.filter =
            "saturate(" + grayV + ") brightness(" + brighV + ") contrast(" + v + ")";
    }
}

function brightnessSlider(v) {
    let grayV = document.getElementById("saturSlider").value;
    let contV = document.getElementById("contrastSlider").value;
    for (let i = 0; i < thebility_allElem.length; i++) {
        thebility_allElem[i].style.filter =
            "saturate(" + grayV + ") contrast(" + contV + ") brightness(" + v + ")";
    }
}

function thebility_bolderfont(v) {
    if (!enabled6) {
        enabled6 = !0;
        for (let i = 0; i < thebility_allElem.length; i++) {
            thebility_allElem[i].classList.add("thebility_bolderfont");
        }
    } else {
        enabled6 = !1;
        for (let i = 0; i < thebility_allElem.length; i++) {
            thebility_allElem[i].classList.remove("thebility_bolderfont");
        }
    }
    for (let i = 0; i < thebility_allElem.length; i++) {
        thebility_allElem[i].style.fontWeight = v;
    }
}

function thebility_animPause() {
    if (!enabled2) {
        enabled2 = !0;
        for (let i = 0; i < thebility_allElem.length; i++) {
            thebility_allElem[i].classList.add("thebility_animPause");
        }
    } else {
        enabled2 = !1;
        for (let i = 0; i < thebility_allElem.length; i++) {
            thebility_allElem[i].classList.remove("thebility_animPause");
        }
    }
}

function thebility_aUnderline() {
    let links = document.getElementsByTagName('a');
    if (!enabled3) {
        enabled3 = !0;
        for (let i = 0; i < links.length; i++) {
            links[i].classList.add("thebility_aUnderline");
        }
    } else {
        enabled3 = !1;
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("thebility_aUnderline");
        }
    }
}

function thebility_invertHtml() {
    let compStyle = window.getComputedStyle(document.getElementsByTagName("div")[0]).getPropertyValue("filter");
    let contV = document.getElementById("contrastSlider").value;
    let saturV = document.getElementById("saturSlider").value;
    let brighV = document.getElementById("brightnessSlider").value;

    for (let i = 0; i < thebility_allElem.length; i++) {
        let isNegative = thebility_allElem[i].classList.contains("thebility_negative_activated");
        if (!isNegative) {
            thebility_allElem[i].style.filter =
                "contrast(" + contV + ") brightness(" + brighV + ") saturate(" + saturV + ") invert(1)";
            thebility_allElem[i].classList.add("thebility_negative_activated");
        } else {
            thebility_allElem[i].style.filter =
                "contrast(" + contV + ") brightness(" + brighV + ") saturate(" + saturV + ") invert(0)";
            thebility_allElem[i].classList.remove("thebility_negative_activated");
        }

    }
}


/*DRAG*/
function dragElement(elmnt) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.parentNode.style.top = elmnt.parentNode.offsetTop - pos2 + "px";
        elmnt.parentNode.style.left = elmnt.parentNode.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//constraction of elements 
//HTML constractor
function hc(tag, _id, _class, parent, ...attrib) {
    let x = document.createElement(tag);
    if (_id) {
        x.setAttribute("id", _id);
    }

    if (_class) {
        x.setAttribute("class", _class);
    }
    for (let i = 0; i < attrib.length; i++) {
        let atr = attrib[i].substring(attrib[i].lastIndexOf('"') + 1,
            attrib[i].lastIndexOf('&'));
        let val = attrib[i].substring(attrib[i].lastIndexOf('&') + 1);
        x.setAttribute(atr, val);
    }
    parent.appendChild(x);
}
//
function constALL() {
    let iconImage = "thebilityIconBlackFullNC.png";
    let body = document.getElementsByTagName("body")[0];
    new hc("div", "thebility_thebilityIcon", "thebility_t", body);
    document.getElementById("thebility_thebilityIcon").style.display = "none";
    new hc("img", "thebility_thebilityIconImg", "thebility_t", document.getElementById("thebility_thebilityIcon"), "src&js_libs/thebility/icons/" + iconImage);
    document.getElementById("thebility_thebilityIcon").onclick = function() {
        toggleThebility();
    };
    //
    new hc("div", "thebility_thebilityMainDiv", "thebility_t", body);
    new hc("div", "thebility_buttonsDiv", "thebility_t", document.getElementById("thebility_thebilityMainDiv"));

    new hc("span", "thebility_dragThebility", "thebility_t", document.getElementById("thebility_buttonsDiv"));

    new hc("img", "thebility_closeThebility", "thebility_t", document.getElementById("thebility_buttonsDiv"), "src&js_libs/thebility/icons/close.png");

    document.getElementById("thebility_closeThebility").onclick = function() {
        thebility_closeThebility(this.parentNode);
    };
    //
    new hc("div", "el1", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el1").innerHTML = LangObJ[langName].font_size;
    new hc("input", "fontDivSizeSlider", "thebility_slider thebility_t", document.getElementById("el1"));
    let in1 = document.getElementById("fontDivSizeSlider");
    in1.type = "range";
    in1.min = "0.5";
    in1.max = "7";
    in1.step = "0.01";
    in1.value = "1";
    in1.oninput = function() {
        fontDivSizeSlider(this.value);
    };
    new hc("div", "el2", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));

    document.getElementById("el2").innerHTML = LangObJ[langName].satur;
    new hc("input", "saturSlider", "thebility_slider thebility_t", document.getElementById("el2"));
    let in2 = document.getElementById("saturSlider");

    in2.type = "range";
    in2.min = "0";
    in2.max = "2";
    in2.step = "0.01";
    in2.value = "1";

    in2.oninput = function() {
        saturSlider(this.value);
    };

    new hc("div", "el3", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el3").innerHTML = LangObJ[langName].contrast;
    new hc("input", "contrastSlider", "thebility_slider thebility_t", document.getElementById("el3"));
    let in3 = document.getElementById("contrastSlider");
    in3.type = "range";
    in3.min = "0.5";
    in3.max = "1.5";
    in3.step = "0.01";
    in3.value = "1";

    in3.oninput = function() {
        contrastSlider(this.value);
    };

    new hc("div", "el4", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el4").innerHTML = LangObJ[langName].bright;

    new hc("input", "brightnessSlider", "thebility_slider thebility_t", document.getElementById("el4"));
    let in4 = document.getElementById("brightnessSlider");
    in4.type = "range";
    in4.min = "0.7";
    in4.max = "1.2";
    in4.step = "0.01";
    in4.value = "1";
    in4.oninput = function() {
        brightnessSlider(this.value);
    };

    new hc("div", "el5", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el5").innerHTML = LangObJ[langName].bFont;
    document.getElementById("el5").onclick = function() {
        thebility_bolderfont();
    };
    new hc("div", "el6", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el6").innerHTML = LangObJ[langName].StopRestartAnim;
    document.getElementById("el6").onclick = function() {
        thebility_animPause();
    };
    new hc("div", "el7", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el7").innerHTML = LangObJ[langName].highlightLinks;
    document.getElementById("el7").onclick = function() {
        thebility_aUnderline();
    };
    new hc("div", "el8", "thebility_thebilityDiv thebility_t", document.getElementById("thebility_thebilityMainDiv"));
    document.getElementById("el8").innerHTML = LangObJ[langName].Neg;
    document.getElementById("el8").onclick = function() {
        thebility_invertHtml();
    };

}