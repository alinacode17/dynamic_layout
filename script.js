const divRed = document.getElementById("red");
const imageDiv = document.getElementById('image-div');
const wrapper = document.getElementById('wrapper');


// sa ai un object in care adaugi toate divurile, ce contin

const mainObj = [{
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "10px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-52px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-115px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-180px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-240px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-295px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-350px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-419px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-480px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-535px"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-600px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-660px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-710px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-780px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-840px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-910px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-960px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1000px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1080px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1130px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1190px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1260px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1320px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1370px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1435px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1495px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1558px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1610px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1680px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1740px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1790px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1860px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1920px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-1980px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2040px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2090px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2160px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2210px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2270px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2340px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2390px"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "blue",
        text: "blue",
        link: "",
        x: "0px",
        y: "-2450px"
    }
];

let unique_array = [],
    colour;
let colourArray = [];
let offsetTop = [];

function buildColDivs(array, colour) {
    colourArray = array.filter(array => array.colour == colour); // creeaza arraiuri diferite cu obiectele care au culoarea respectiva
    const divParent = document.createElement('div'); // creeaza un div care sa contina obiectele 
    divParent.className = "parent";
    wrapper.appendChild(divParent); // ataseaza fiecare div pe culori pe pagina
    for (let i = 0; i < colourArray.length; i++) {
        const divInner = document.createElement('div');
        const divText = document.createElement('div');
        const divImg = document.createElement('div');
        divInner.className = "div-colours";
        divImg.className = "divimg";
        divText.className = "txt";
        divParent.appendChild(divInner);
        divInner.appendChild(divImg);
        divInner.appendChild(divText);
        divText.innerHTML = "<p>" + colourArray[i].text + "</p>";
    }
}

function putImg(array) {
    const x = document.getElementsByClassName("divimg");
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundImage = "url('WarningSigns-Sprite.png')";
        x[i].style.backgroundSize = "100px 2520px";
        x[i].style.backgroundPositionX = array[i].x;
        x[i].style.backgroundPositionY = array[i].y;
    }
}

function imgTemplate(array) {
    for (let i = 0; i < array.length; i++) {
        putImg(array);
    }
}

function removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i].colour) == -1) {
            unique_array.push(arr[i].colour);
        }
    }
    return unique_array;
}

function testing() {
    removeDuplicates(mainObj);
    for (let i = 0; i < unique_array.length; i++) {
        colour = unique_array[i];
        buildColDivs(mainObj, colour);
    }
}

testing();
imgTemplate(mainObj);

const divs = document.querySelectorAll('.div-colours');
let arrayDivsFilter = [];
let arrayDivs = [];

function newTest() {

    for (let i = 0; i < divs.length; i++) {
        arrayDivs.push(divs[i]);
        divs[i].addEventListener("click", function () {
            let divOftop = this.offsetTop;
            arrayDivsFilter = arrayDivs.filter(array => array.offsetTop == divOftop);
            console.log(arrayDivsFilter);
            last(arrayDivsFilter);

        });
    }
}


newTest();


function createDivInfo() {
	const divInfo = document.createElement("div");
	divInfo.innerHTML = "<p>Info</p>";
}

function last(array) {
    const lastItem = array[array.length - 1];
    console.log(lastItem);
    const divInfo = document.createElement("div");
	divInfo.innerHTML = "<p>Info</p>";
    lastItem.parentNode.insertBefore(divInfo, lastItem.nextSibling);
}

//  adun toate divurile care au clasa de div inner si apoi atasez un event hadeler pe element si apoi sortez daca cumva
//in colectie offtopul e cel care e match cu cel al celui clickuit impingele