//PAGE VARIABLES

let counter = 1;
class Page {
    
    constructor(contents) {
        this._contents = contents;
    }
    
    get contents() {
        return this._contents;  
    }
    
    renderContents() {
        this._contents.forEach(content => {
            let page = document.createElement('div');
            document.body.appendChild(div);
            
        });
                
    }

}

//DOM VARIABLES
let oldPage = document.querySelector('#old-page');
let nextPage = document.querySelector('#next-page');
