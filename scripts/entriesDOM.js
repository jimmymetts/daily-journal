getData().then(myParsedEntries => {
    
myParsedEntries.forEach(entry => {

document.querySelector("#entryContainer").innerHTML += `
<div class = “domEl”>
<h2>Date of Entry - ${entry.dateOfEntry}</h2>
 <h2>Concepts Covered - ${entry.conceptsCovered}</h2>
 <h2>Journal Entry - ${entry.journalEntry}</h2>
 <h2>Mood of The Day - ${entry.moodOfTheDay}</h2>
 <hr>
 </div>
`;
})

})