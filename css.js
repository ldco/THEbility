//styles

function appendStyle({ iconCol, iconBorderCol, iconBorderSize, textCol, bgCol, borCol, btnBgCol, trackBgCol, rangeBgCol, font, fontSize }) {

    let style = document.createElement('STYLE');
    style.type = 'text/css';

    let content = `
  @font-face {
  font-family: "thebility_font";
  src: url("${font}");
     
}


    .thebility_thebilityDiv {
       
    font-family: thebility_font;
    font-size: ${fontSize};
    color: ${textCol};
    background-color: ${bgCol};
    padding: 2vh;
    width: 15vw;
    user-select: none;
    margin-top: 2vh;
    border-radius: 8px;
    border: solid 2px ${borCol};
}

.thebility_thebilityDiv:hover {
    filter: brightness(1.2);
}

#thebility_thebilityIcon {
    position: fixed;
    top: 15vh;
    ${thebility_direction_oposite}: 0;
    z-index: 1980;
    background-color: ${iconCol};
    border: solid ${iconBorderSize}px ${iconBorderCol};
    border-top-${thebility_direction}-radius: 7px;
    border-bottom-${thebility_direction}-radius: 7px;
    border-${thebility_direction_oposite}: 0;
    
}

#thebility_buttonsDiv {
    position: absolute;
    ${thebility_direction}: -5vw;
    top: 0vh;
}


.thebility_buttonsStyle {
    background: ${btnBgCol};
    padding: 1.5vh;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 5px ${trackBgCol};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1.5vw;
    height: 1.5vw;
    position: absolute;
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
}

.thebility_buttonsStyle:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}

.thebility_trackBackground {
    background: ${trackBgCol};
}

.thebility_trackBackground_on_focus {
    background: ${borCol};
}

#thebility_thebilityIconImg {
    width: 2.5vh;
    padding: 1.5vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

#thebility_thebilityIcon:hover {
     -webkit-filter: brightness(1.2);
    filter: brightness(1.2);
}

#thebility_thebilityMainDiv {
    font-family: "medium";
    font-size: 2vh;
    display: none;
    opacity: 0;
    width: auto;
    position: absolute;
    top: 10vh;
    border-radius: 4px;
    z-index: 1981;
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    justify-content: space-evenly;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    left: 63vw;
    text-align: center;
}

/*icons*/

#thebility_dragThebility {
    background: ${btnBgCol};
    padding: 1.5vh;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 5px ${trackBgCol};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1.5vw;
    height: 1.5vw;
    position: absolute;
    filter: grayscale(1);
    cursor: -webkit-grab;
    background-image: url("js_libs/thebility/icons/drag.png");
    background-position: 50% 50%;
    background-size: 56%;
    background-repeat: no-repeat;
    top: 2vw;
}

#thebility_dragThebility:hover {
    -webkit-filter: grayscale(0);
    filter: grayscale(0);
}

#thebility_closeThebility {
    background: ${btnBgCol};
    padding: 1.5vh;
    border-radius: 4px;
    box-shadow: 0px 0px 0px 5px ${trackBgCol};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 1.5vw;
    height: 1.5vw;
    position: absolute;
      -webkit-filter: grayscale(1);
    filter: grayscale(1);
    top: 7vw;
}

#thebility_closeThebility:hover {
      -webkit-filter: grayscale(0);
    filter: grayscale(0);
}

.thebility_column {
   display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media only screen and (orientation: landscape) {
    .thebility_column {
       -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
}

@media only screen and (orientation: portrait) {
    #thebility_thebilityMainDiv {
        position: absolute;
        ${thebility_direction}: 16vw;
        margin: 0 !important;
        padding: 0 !important;
        top: 12vh;
    }
    .thebility_column {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
    }
    #thebility_thebilityIcon {
        -webkit-box-shadow: 0px 0px 2px 0px #000000;
        box-shadow: 0px 0px 2px 0px #000000;
    }
    #thebility_thebilityIcon img {
        width: 3vw;
        padding: 2vw;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .thebility_thebilityDiv {
        width: 60vw;
    }
    #thebility_dragThebility {
        display: none;
    }
    #thebility_closeThebility {
        display: none;
    }
}

/**/

.thebility_animPause {
      -webkit-animation-play-state: paused !important;
    animation-play-state: paused !important;
}

.thebility_aUnderline {
    border-bottom: 1.5px solid ${borCol} !important;
}

.thebility_invertHtml {
     -webkit-filter: invert(100%);
            filter: invert(100%);
}

.thebility_bolderfont {
    font-weight: bolder;
}

/*slide track*/

#thebility_thebilityMainDiv input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin: 6.5px 0;
    webkit-box-shadow: none !important;
    box-shadow: none !important;
    background-color: ${btnBgCol} !important;
    border: none !important;
}

#thebility_thebilityMainDiv input[type="range"]:focus {
    outline: none !important;
}

#thebility_thebilityMainDiv input[type="range"]:active {
    outline: none !important;
}

#thebility_thebilityMainDiv input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 9px;
   
    background: ${trackBgCol};
    border-radius: 1px;
    border: 0px solid rgba(255, 255, 255, 0);
}

#thebility_thebilityMainDiv input[type="range"]::-webkit-slider-thumb {
   
    border: 0px solid ${borCol};
    height: 22px;
    width: 17px;
    border-radius: 0px;
    background: ${rangeBgCol};
    -webkit-appearance: none;
    margin-top: -6.5px;
}

/*on focus track*/

#thebility_thebilityMainDiv input[type="range"]:focus::-webkit-slider-runnable-track {
    background: ${borCol};
}

/**/

#thebility_thebilityMainDiv input[type="range"]::-moz-range-track {
    width: 100%;
    height: 9px;
    background: ${trackBgCol};
    border-radius: 1px;
    border: 0px solid rgba(255, 255, 255, 0);
}

#thebility_thebilityMainDiv input[type="range"]::-moz-range-thumb {
   
    border: 0px solid ${borCol};
    height: 22px;
    width: 17px;
    border-radius: 0px;
    background: ${rangeBgCol};
}

#thebility_thebilityMainDiv input[type="range"]::-ms-track {
    width: 100%;
    height: 9px;
    background: transparent;
    border-color: transparent;
    color: transparent;
}

#thebility_thebilityMainDiv input[type="range"]::-ms-fill-lower {
    
    border: 0px solid transparent;
    border-radius: 2px;
   
}

#thebility_thebilityMainDiv input[type="range"]::-ms-fill-upper {
    background: ${trackBgCol};
    border: 0px solid transparent;
    border-radius: 2px;
   
}

#thebility_thebilityMainDiv input[type="range"]::-ms-thumb {
    box-shadow: 0px 0px 0px #111111, 0px 0px 0px #111111;
    border: 0px solid ${borCol};
    height: 22px;
    width: 17px;
    border-radius: 0px;
    background: ${rangeBgCol};
    height: 9px;
}

#thebility_thebilityMainDiv input[type="range"]:focus::-ms-fill-lower {
    background: ${trackBgCol};
}

#thebility_thebilityMainDiv input[type="range"]:focus::-ms-fill-upper {
    
}

.thebility_t,
.thebility_slider {
  
    cursor: pointer;
}

#thebility_thebilityIcon.rtlClass {
    direction: rtl !important;
    ${thebility_direction}: 0 !important;
    ${thebility_direction}: initial;
    border-top-${thebility_direction}-radius: 7px !important;
    border-bottom-${thebility_direction}-radius: 7px !important;
    padding-${thebility_direction}: 5vw !important;
    margin-${thebility_direction}: -5vw !important;
    padding-${thebility_direction}: 0 !important;
}

#thebility_thebilityMainDiv.rtlClass {
    ${thebility_direction}: 16vw;
}

#thebility_dragThebility.rtlClass {
    ${thebility_direction}: 0vw !important;
}

#thebility_closeThebility.rtlClass {
    ${thebility_direction}: 0vw !important;
}

#thebility_buttonsDiv.rtlClass {
    position: absolute;
    ${thebility_direction}: -5vw;
    top: 0vh;

}
    `;
    style.appendChild(document.createTextNode(content));
    document.head.appendChild(style);

}