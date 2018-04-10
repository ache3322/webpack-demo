//=========================================================
/*
 * The index.js is the main point of entry.
 * 
 * Run the 'npm install' to install any missing node_modules
 * Run the 'npm run build' to compile the webpack bundles
 * Run the 'npm start' to open up the browser to see the result
 */
//=========================================================
//import _ from 'lodash';
import './style.css';       // we import the style sheet... webpack treats this a module
import Icon from './logo.svg';        // we can even import file assets like images too
import Data from './api/data.xml';        // we can import data from json, csv, and xml files

import printMe from './print.js';

import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var mathEl = document.createElement('div');
    var btn = document.createElement('button');

    // Loadash, currently included via a script, is required for this line to work
    //element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
    element.innerHTML = [
        'Hello',
        'webpack',
        '!'
    ].join(' ');
    element.classList.add('hello');

    var webpackIcon = new Image();
    webpackIcon.src = Icon;

    element.appendChild(webpackIcon);

    console.log(Data);

    //-------------------------------------------
    mathEl.innerHTML = [
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    element.append(mathEl);


    //-------------------------------------------
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.append(btn);

    return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');

        document.body.removeChild(element);
        element = component(); // Re-render the "component"
        document.body.appendChild(element);
    });
}