fetch(`../../../db/page${counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.renderContents();    
    });

nextPage.addEventListener('click', ()=>{

    fetch(`../../../db/page${++counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.renderContents();    
    });

})

oldPage.addEventListener('click', ()=>{

    fetch(`../../../db/page${--counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.renderContents();    
    });

})