/* Hey Kelly, thank you so much for taking  a look at this, it's been killing me! 
Keep in mind I am VERY new to coding so I am sure you're going to look at this and be like '...duh' but anyway! 
I am working on async functions and no matter what I do, my code will not iterate correctly over the resulting array. 

Eventually, this will all be data for a Jeopardy game, so I've included the table code as well 
(though, I haven't worked too hard on that yet, so I don't think it's right, but I included it just to show what
I am trying to do.) 

VERSION ONE and VERSION TWO are different attemps at the same thing.)

If I do, say, what I do on line 49, where I take await out of an async function, I get an array but then Chrome won't let me use 
await outside of an async function. 

However, if I don't use await, then what returns from my fuctions are promises which I can't figure out how to use as arrays. 
The second version, I think, is closer but the getCategory() (line 69) isn't returning an array of clues (ie: the desired result) 
but instead just the same array from getCategoryIdData() function (ie: just the id and title.) 

Thoughts? */

// ** VERSION ONE **

async function getCategoryIds() {
    const catUrl = 'https://jservice.io/api/categories?count=100';
    const res = await axios.get(catUrl);
    const math = res.data
        .filter(category => category.clues_count >= 5)
        .map(category => ({ id: category.id, title: category.title }));
    const cherry = _.sampleSize(math, 6);
    return cherry;
  }

  async function getCategory() {
    const categoryUrl = 'http://jservice.io/api/category';
    const catIdsResults = catsFin.map((catId) => axios.get(categoryUrl, { params: { id: catId.id } }));
    const catResponses = await Promise.all(catIdsResults);

    const allCatInfo = catResponses.map((response) => {
        const clueArray = response.data.clues.map((clue) => ({
            question: clue.question,
            answer: clue.answer,
            showing: null,
        })).filter((clue) => clue.question !== '=');
        const clueFin = _.sampleSize(clueArray, 5);
        return clueFin;
    });
    return allCatInfo
};

const catClues = await getCategory();

// ** VERSION TWO ** 

async function getCategoryIdData() {
    const categoryIds = await (async () => {
      const catUrl = 'https://jservice.io/api/categories?count=100';
      const res = await axios.get(catUrl);
      const math = res.data
        .filter(category => category.clues_count >= 5)
        .map(category => ({ id: category.id, title: category.title }));
      const cherry = _.sampleSize(math, 6);
      console.log(cherry);
      return cherry;
    })();
    return categoryIds;
  }
 
const clueFind = getCategoryIdData();

async function getCategory() {
    const clueFindNow = await (async () => {
        const categoryUrl = 'http://jservice.io/api/category';
        const catIdsResults = clueFind.map((catId) => axios.get(categoryUrl, { params: { id: catId.id } }));
        const catResponses = await Promise.all(catIdsResults);
    
        const allCatInfo = catResponses.map((response) => {
            const clueArray = response.data.clues.map((clue) => ({
                question: clue.question,
                answer: clue.answer,
                showing: null,
            })).filter((clue) => clue.question !== '=');
            const clueFin = _.sampleSize(clueArray, 5);
            return clueFin;
        });
        console.log(allCatInfo);
    })
    return clueFindNow;
};

getCategory();

// ** TABLE FILL CODE AND ETC** 

const CLUES = 5;
const CATEGORIES = 6;

async function fillTable() {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    btn.innerHTML = "Restart";
    btn.setAttribute("id", "restart");

    // btn.innerText("Restart");
    body.prepend(btn);

    const table = document.createElement("table");
    table.setAttribute("id", "jeopardy");
    table.setAttribute("border", "1");
    const thead = document.createElement("thead");
    const theadTr = document.createElement("tr");

    const titles = CATEGORIES_ARR.map((item) => item.title);

    for (let x = 0; x < CATEGORIES; x++) {
        const theadTh = document.createElement("th");
        theadTh.setAttribute("id", x);
        const theadText= document.createTextNode(`${titles[x]}`);
        theadTh.append(theadText);
        theadTr.append(theadTh);
    }
    thead.append(theadTr);
    table.append(thead);

    const tbody= document.createElement("tbody");

    for (let y = 0; y < CLUES; y++) {
        const tbodyTr = document.createElement("tr");
        for (let x = 0; x < CATEGORIES; x++) {
            const tbodyTh = document.createElement("td");
            tbodyTh.setAttribute("id", `${x}-${y}`);
            const tbodyText = document.createTextNode(`?`);
            tbodyTh.append(tbodyText);
            tbodyTr.append(tbodyTh);
        }
        tbody.append(tbodyTr);
    }
    table.append(tbody);
    body.prepend(table);
};

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

setTimeout(() => fillTable(), 2500);


$('body').on('click', '#jeopardy', function handleClick(evt) {
    let id = evt.target.id;
    let [catId, clueId] = id.split("-");
    let clue = CATEGORIES_ARR[catId].clues[clueId];
    // console.log(clue);
    let cellText = '';
    if(!clue.showing) {
        cellText = clue.question;
        clue.showing = "question";
    } else if (clue.showing === "question") {
        cellText = clue.answer;
        clue.showing = "answer";
    } else {
        return;
    }
    $(`#${catId}-${clueId}`).html(cellText);
});

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

};

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
};

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */


$('body').on('click', '#restart', function setupAndStart() {
    location.reload();
});

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO