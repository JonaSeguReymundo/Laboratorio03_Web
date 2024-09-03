const countVotes = (votes) => {
    let result = [];

    votes.forEach(vote => {
        result[vote.candidate] = (result[vote.candidate] || 0) + 1;
    })

    return result;
}

const showResults = (voteCount) => {
    alert("Resultados de la votación -> \n");
    for (let candidate in voteCount) {
        alert(`${candidate}: ${voteCount[candidate]} votos`);
    }
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];

    const result = countVotes(votes);

    showResults(result);

}

main();