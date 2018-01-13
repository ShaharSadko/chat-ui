import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
import {setLocalStorage} from "./utils/test-utils/storage";

const jsdom = require('jsdom').jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

configure({adapter: new Adapter()});

setLocalStorage();
