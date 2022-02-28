

const searchMobile = () => {
    const mobileName = document.getElementById('name-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${mobileName}`;
    fetch(url)

        .then(res => res.json())
        .then(data => findMobile(data.data))
}
searchMobile();
const showDiv = document.getElementById('show-div');
const findMobile = (props) => {
    props.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('div-class')
        div.innerHTML = `
    <div class="card-deck" style="width: 25rem;">
                <img src="${element.image}">
        <div class="card-body">
            <h3 class="card-title">${element.phone_name}</h3>
             <h5 class="card-title"><span>Brand:</span> ${element.brand}</h5>
            <button class="myBtn" onclick=callDetailsShow('${element.slug}')>Details</button>
         </div>
    </div>
        `
        showDiv.appendChild(div)

      
    });

   
}

const callDetailsShow=(props)=>{
    const url = `https://openapi.programming-hero.com/api/phone/${props}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetails(data.data))
 
}


const showDetails=(details)=>{
    console.log(details)
const detailsArea = document.getElementById('details-area');
detailsArea.classList.add('detail-area');
const div = document.createElement('div');
div.innerHTML=`
<div class="card-deck" style="width: 25rem;">
<img src="${details.image}">
<div class="card-body">
<h3 class="card-title">${details.name}</h3>
<h5 class="card-title"><span>Brand:</span> ${details.mainFeatures.chipSet}</h5>
<h5 class="card-title"><span>Brand:</span> ${details.mainFeatures.displaySize}</h5>
<h5 class="card-title"><span>Brand:</span> ${details.mainFeatures.memory}</h5>
</div>
</div>
`
detailsArea.appendChild(div);


}
