

const searchMobile = () => {
    const mobileName = document.getElementById('name-input').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${mobileName}`;
    console.log(url);
    fetch(url)
    
        .then(res => res.json())
        .then(data => findMobile(data.data))
}

const findMobile = (props) => {
    props.forEach(element => {
        console.log(element)
    });
}