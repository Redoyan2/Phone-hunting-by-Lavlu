
const showDiv = document.getElementById('show-div');
const errorBox = document.getElementById('error-box');
const detailsArea = document.getElementById('details-area');
const searchMobile = () => {
    showDiv.innerText='';
    detailsArea.innerText='';
    const mobileName = document.getElementById('name-input').value;
    if (mobileName !== '') {
    
        const url = `https://openapi.programming-hero.com/api/phones?search=${mobileName}`;

        fetch(url)

            .then(res => res.json())
            .then(data => findMobile(data.data))
errorBox.innerText='';
    }


    else {
        
        errorBox.innerText = 'Please write a valid mobile name!!!!'
        showDiv.innerText='';
    }
}



const findMobile = (props) => {
    if (props.length == 0) {
        
        errorBox.innerText = 'Please write a valid mobile name!!!!'
        showDiv.innerText='';
    }
    else {
        props.forEach(element => {
            const div = document.createElement('div');
            div.classList.add('div-class')
            div.innerHTML = `
        <div class="card-deck" style="width: 25rem;">
                    <img src="${element.image}">
            <div class="card-body">
                <h3 class="card-title">${element.phone_name}</h3>
                 <h5 class="card-title"><span>Brand:</span> ${element.brand}</h5>
                <button class="myBtn02" onclick=callDetailsShow('${element.slug}')>Details</button>
             </div>
        </div>
            `
        errorBox.innerText='';
     showDiv.appendChild(div)



        });

    }

}

const callDetailsShow = (props) => {
    const url = `https://openapi.programming-hero.com/api/phone/${props}`
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))

}


const showDetails = (details) => {
    detailsArea.innerText='';
    detailsArea.classList.add('detail-area');
    const div = document.createElement('div');
    div.innerHTML = `
<div class="card-deck" style="width: 25rem;">
<img src="${details.image}">
<div class="card-body">
<h3 class="card-title">${details.name}</h3>
<h5 class="card-title"><span>Chipset:</span> ${details.mainFeatures.chipSet}</h5>
<h5 class="card-title"><span>Display:</span> ${details.mainFeatures.displaySize}</h5>
<h5 class="card-title"><span>Memory:</span> ${details.mainFeatures.memory}</h5>
</div>
</div>
`
    detailsArea.appendChild(div);



}
