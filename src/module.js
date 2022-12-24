import createHeader from './createHeader.js';
import createBody from './createBody.js';
import render from './render.js';

export class Module {
    constructor(init) {
      this.init = init;
    }

    createHeader = createHeader;
    createBody = createBody;  
    render = render;
    
  }
  
  