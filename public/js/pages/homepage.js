fetch(`../../../db/page${counter++}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();   
        page.renderContents(); 
    });
setInterval(() => {
    if(counter==5) counter=1;
    fetch(`../../../db/page${counter++}.json`)
    .then(response => json = response.json())
    .then(data => {
        let page = new Page(data);
        console.table(page.contents);
        page.deleteContents();   
        page.renderContents(); 
    });
}, 8000);