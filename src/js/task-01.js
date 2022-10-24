

const categoriesList = categories => {
    const categ = document.querySelectorAll('.item');
    console.log(`Number of categories: ${categ.length}`);

    categ.forEach(item => 
        console.log(`Category: ${item.firstElementChild.textContent} \nElements: ${item.lastElementChild.children.length}`),
    )};

categoriesList('.item');

