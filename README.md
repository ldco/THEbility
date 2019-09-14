# THEbility

## JS Accessibility Plugin

<img src="https://github.com/ldco/THEbility/blob/master/thebilityLogo.png"  width="400">

##

## Getting Started

### option 1 : //npm CURRENTLY OUTDATED!!!
    npm i thebility --save-dev
    
#### How to use

```javascript
const thebility = require('thebility');

    let options = {
      textCol: "#yourColor", //text-color
      bgCol: "#yourColor", //main div bg color
      borCol: "#yourColor", //main div border color
      btnBgCol: "#yourColor", //buttons div border color
      trackBgCol: "#yourColor", //tracks color1
      rangeBgCol: "#yourColor", //tracks color2
      font: <path/to/font>,
      fontSize: <font size>
        };  
```


```javascript
   thebility.THEbility(options);
```
      
### option 2: //HTML embeding
    1. Download the BrowserDist folder
    2. <script src="/path/to/thebility.js</script> or 
    <script src="https://cdn.jsdelivr.net/gh/ldco/THEbility/BrowserDist/thebility.js"></script>
    <!-- the icons folder should be in the same folder as the js file --> 
     
#### How to use

```javascript
    let options = {
       textCol: "#yourColor", //text-color
      bgCol: "#yourColor", //main div bg color
      borCol: "#yourColor", //main div border color
      btnBgCol: "#yourColor", //buttons div border color
      trackBgCol: "#yourColor", //tracks color1
      rangeBgCol: "#yourColor", //tracks color2
      font: <path/to/font>,
      fontSize: <font size>
        };
             
        /*more customisations can be done by editing the css.js file*/        
```

```javascript
    new THEbility(options);
```
## Language Notice
The language set's according to HTML tag's "lang" value. The languages object is in the loc.js file for the browser build or in the node_modules/thebility/NpmDist/thebility.js for the npm build. To add language add new key named with the 2 letters language code. Currently EN and HE exists in the build. 

##

## Authors

* [Louis David & Co. Design Studio](https://ldcodesign.com)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the LGPL License - see the [LICENSE.md](LICENSE.md) file for details





