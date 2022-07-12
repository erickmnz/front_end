const cardArr = [
    {
        name : 'fries',
        img: './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img: './img/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: './img/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: './img/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: './img/milkshake.png'
    },
    {
        name : 'pizza',
        img: './img/pizza.png'
    },
    {
        name : 'fries',
        img: './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img: './img/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: './img/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: './img/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: './img/milkshake.png'
    },
    {
        name : 'pizza',
        img: './img/pizza.png'
    }
];

cardArr.sort(()=> 0.5 - Math.random());

const grid = document.querySelector('#grid');

function boardMaker(){
    for (let i =0; i<cardArr.length;i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flip);
        grid.append(card)
    }
    
}
boardMaker();

function flip(){
    const cardID = this.getAttribute('data-id');
    cardArray[cardID.name];
}