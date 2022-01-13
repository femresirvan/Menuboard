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
{/* <div class="main-wrapper">
        <h1 class="restaurant-name">PYTHAGORAS RESTAURANT</h1>
        <div class="content-wrapper1">
            <div class="text-wrapper">
                <h1>YEMEK ADI</h1>
                <p>fiyatı</p>
                <p>10$</p>
            </div>
            <div class="img-wrapper">
                <img src="https://www.jocooks.com/wp-content/uploads/2016/01/roasted-tomato-soup-1-1.jpg">
            </div>
        </div> */}

//DOM VARIABLES
let oldPage = document.querySelector('#old-page');
let nextPage = document.querySelector('#next-page');
let mainFrame = document.querySelector('#main-frame');