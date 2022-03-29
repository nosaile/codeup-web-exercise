"use strict";

// renderGitData()
// function renderGitData() {
//     fetch(`https://api.github.com/users/nosaile/events`, {headers: {'Authorization': `${GIT_KEY}`}})
//         .then(response => response.json())
//         .then(data => findGitData(data))
//         .catch(error => console.log(error))
//
// };
//
// function findGitData(data){
//   var latestCommit = data[0].commit.author.date.substring(0, 10);
//     console.log(latestCommit)
//     let html = '';
//     html += '<h1>the github user \'nosaile\' last made a commit on: <br>' + latestCommit + '</h1>'
//     $('.content').html(html)
// }

renderGitData()

function renderGitData() {

    fetch("https://api.github.com/repos/nosaile/codeup-web-exercises/commits", {headers: {'Authorization': `${GIT_KEY}`}})
        .then(response => response.json())
        .then(data => findGitData(data))
        .catch(error => console.log(error))
}

function findGitData(data) {
    var latestCommit = data[0].commit.author.date.substring(0, 10);
    console.log(latestCommit)
    let html = '';
    html += '<h1>the github user \'nosaile\' last made a commit on: <br>' + latestCommit + '</h1>'
    $('.content').html(html)
}