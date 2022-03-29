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
//     console.log(data)
//     console.log(data[0].created_at)
//
// }
renderGitData()
function renderGitData() {

fetch("https://api.github.com/repos/nosaile/codeup-web-exercises/commits", {headers: {'Authorization': `${GIT_KEY}`}})
    .then(response => response.json())
        .then(data => findGitData(data))
        .catch(error => console.log(error))
}
function findGitData(data){
    console.log(data)
   let latestCommit =  data[0].commit.author.date.substring(0,10)
    console.log(latestCommit)

}