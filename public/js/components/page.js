//PAGE VARIABLES

let counter = 1;

//DOM VARIABLES
let oldPage = document.querySelector('#old-page');
let nextPage = document.querySelector('#next-page');
let mainFrame = document.querySelector('#main-frame');
class Page {

    constructor(contents) {
        this._contents = contents;
    }

    get contents() {
        return this._contents;
    }

    renderContents() {
        this._contents.forEach((element, index) => {
            //DEFINITIONS
            this._content = document.createElement('div'),
            this._name = document.createElement('h1'),
            this._price = document.createElement('p'),
            this._category = document.createElement('p'),
            this._textFrame = document.createElement('div'),
            this._imgFrame = document.createElement('div'),
            this._img = document.createElement('img');
            mainFrame.appendChild(this._content);

            //OUTLINES
            if (index == 0 || index == 3 || index == 4) {
                this._content.appendChild(this._textFrame);
                this._content.appendChild(this._imgFrame);

            } else {
                this._content.appendChild(this._imgFrame);
                this._content.appendChild(this._textFrame);
            }

            this._textFrame.appendChild(this._name);
            this._textFrame.appendChild(this._price);
            this._textFrame.appendChild(this._category);
            this._imgFrame.appendChild(this._img);
            //ADDING STYLES
            this._textFrame.classList.add("text-wrapper");
            this._imgFrame.classList.add("img-wrapper");
            if (index == 0 || index == 3 || index == 4) {

                this._content.classList.add("content-wrapper1");
                this._content.style.animationDelay = index / 6 + 's';
            } else {
                this._content.classList.add("content-wrapper2");
                this._content.style.animationDelay = index / 6 + 's';
            }
            if (index == 1 || index == 3 || index == 5) {
                this._content.classList.add("col2");
            } else {
                this._content.classList.add("col1");
            }
            //ADDING CONTENTS
            this._name.textContent = element.name;
            this._price.textContent = element.priceInfo;
            this._category.textContent = element.category;
            this._img.src = element.imageUrl;


        });

    }
    deleteContents(){
        let contents = document.querySelectorAll('.content-wrapper1, .content-wrapper2');
        contents.forEach(element => {
            element.style.display = 'none';
        });
    }

} {
    /* <div class="main-wrapper">
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
            </div> */
}