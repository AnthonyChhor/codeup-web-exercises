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

let threeLanguages = users.filter(function(number) {
    return number.languages.length >= 3;
})

let userEmail = users.map(function(user) {
    return user.email;
})

let totalYears = users.reduce(function(accumulator, years) {
    return accumulator + years.yearsOfExperience;
}, 0)

let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
    }
}, '');

let names = users.reduce((list, name)=> {
    return list + name.name + ", ";
}, "Here's some of our salespeople: ")