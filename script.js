let dictionary = new Array();

function addWord() {
    let addWord = document.getElementById("insertWord").value;
    if (dictionary.includes(addWord)) {
        paragraphAdd.textContent = "This word already is in the dictionary!";
    } else {
        dictionary.push(document.getElementById("insertWord").value);
        paragraphAdd.textContent ="The word has been added!";
    }

}

function searchWord() {
    let wordSearch = document.getElementById("searchNewWord").value;
    if (dictionary.includes(wordSearch)) {
        pSearch.textContent ="This word already is in the dictionary!";
    }  else {
        pSearch.textContent ="This word is not found in the dictionary!";
    }

}