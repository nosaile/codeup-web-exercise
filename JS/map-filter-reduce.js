const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const filterUsers = users.filter(function (n) {
    return n.languages.length >= 3
});
console.log(filterUsers);


const mapUsers = users.map(n => n.email);
console.log(mapUsers);


const xpMap = users.map(n => n.yearsOfExperience);
const reduceUsers = xpMap.reduce((x, y) => {
    return (x + y);
}, 0);
console.log('total team xp in years on avg: ' + reduceUsers / xpMap.length)


const reduceEmails = mapUsers.reduce(
    function (x, y) {
        return x.length > y.length ? x : y;
    }
);
console.log("the longest email is: " + reduceEmails);


const reduceNameArray = users.reduce((namelength, thenames) => {
    return namelength + thenames.name + ' '
}, 'your instrcutors are: ');

console.log(reduceNameArray)

let languages = users.reduce((listoflanguages, user) => {
    user.languages.forEach(function (lang) {
        if (!listoflanguages.includes(lang)) {
            listoflanguages.push(lang);
        }
    })
    return listoflanguages
}, [])
console.log(languages)