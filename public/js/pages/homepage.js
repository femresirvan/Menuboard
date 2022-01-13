if(counter==1) oldPage.disabled = true;

fetch(`../../../db/page${counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();
        page.renderContents();    
    });

nextPage.addEventListener('click', ()=>{
    oldPage.disabled = false;
    fetch(`../../../db/page${++counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();
        page.renderContents();    
    });

})

oldPage.addEventListener('click', ()=>{
    if(counter==1) return oldPage.disabled = true;
    fetch(`../../../db/page${--counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        oldPage.disabled = false;
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();   
        page.renderContents();
        if(counter==1) return oldPage.disabled = true; 
    });

})