const divRed = document.getElementById("red");
const imageDiv = document.getElementById('image-div');
const wrapper = document.getElementById('wrapper');
const infoDiv = document.getElementById('info');


const mainObj = [{
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "10px", 
        info: "This is the info for this image1"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-52px",
        info: "This is the info for this image2"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-115px",
        info: "This is the info for this image3"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-180px",
        info: "This is the info for this image4"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-240px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-295px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-350px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-419px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-480px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-535px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.pngg',
        colour: "pink",
        text: "pink",
        link: "",
        x: "0px",
        y: "-600px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-660px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-710px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-780px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-840px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-910px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-960px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1000px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1080px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1130px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1190px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1260px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1320px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1370px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1435px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1495px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1558px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1610px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1680px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1740px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1790px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1860px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "yellow",
        text: "yellow",
        link: "",
        x: "0px",
        y: "-1920px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-1980px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2040px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2090px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2160px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2210px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2270px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2340px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "green",
        text: "green",
        link: "",
        x: "0px",
        y: "-2390px",
        info: "This is the info for this image"
    },
    {
        image: 'WarningSigns-Sprite.png',
        colour: "blue",
        text: "blue",
        link: "",
        x: "0px",
        y: "-2450px",
        info: "This is the info for this image"
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
const divInfo = document.createElement("div");
divInfo.id = "info";

function newTest() {
    for (let i = 0; i < divs.length; i++) {
        arrayDivs.push(divs[i]);
        divs[i].addEventListener("click", function () {
            let divOftop = this.offsetTop;
            // console.log(this);
            arrayDivsFilter = arrayDivs.filter(array => array.offsetTop == divOftop);
            // console.log(arrayDivsFilter);
            last(arrayDivsFilter);

            for(var i = 0; i < mainObj.length; i++) {
                if(this.firstChild.style.backgroundPositionY ==  mainObj[i].y) {

                    divInfo.innerHTML = "<p>"+  mainObj[i].info + "</p>"; 

            }
       
            }
        });
    }
}

newTest();


function last(array) {
    const lastItem = array[array.length - 1];
    lastItem.parentNode.insertBefore(divInfo, lastItem.nextSibling);

}


 





window.onresize = getNb;






