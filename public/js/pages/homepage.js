fetch(`../../../db/page${counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();
        page.renderContents();    
    });

nextPage.addEventListener('click', ()=>{

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
    if(counter==1) return alert('There is no old page!')
    fetch(`../../../db/page${--counter}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();   
        page.renderContents(); 
    });

})