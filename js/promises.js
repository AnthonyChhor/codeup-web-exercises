fetch('https://api.github.com/search/commits', {headers: {'Authorization': gitHubApi}})
    .then(response => response.json())
    .then(data => console.log(data.items[data.items.length-1].commit.committer.date))
    .catch(error => console.error(error));

function gitHubName(input) {

}

function wait(x) {
    return new Promise((resolve) => {
    setTimeout(() =>
        resolve(x), x);

})
}


wait(1000).then(x => console.log('You\'ll see this after 1 second'));

