// console.log("test");

/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/


// var journalEntry = [];

// const objectsJournalEntry = function (journalDay) {

    //  journalEntry.push("new entry");

    // console.log(journalEntry.push('new'));

// };

// const 


let journalEntries = [
 
    {
    dateOfEntry: "04/12/2019",
    conceptsCovered: "Objects and functions",
    journalEntry: "today I learned about objects",
    moodOfTheDay: "madness"
}, 

{

    dateOfEntry: "04/15/2019",
    conceptsCovered: "loops",
    journalEntry: "today I learned about loops",
    moodOfTheDay: "madness"
},

{
    dateOfEntry: "04/17/2019",
    conceptsCovered: "chicken monkey",
    journalEntry: "today I learned about arrays",
    moodOfTheDay: "madness"
}

]

console.log(journalEntries);

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        // Selecting something in HTML with the classname of "entrylog"
        let entryContainer = document.querySelector(".entryLog");
        // Creates an element
        let dateOfEntryElement = document.createElement("p");
        let conceptsCoveredElement = document.createElement("p");
        let entryElement = document.createElement("p");
        let  moodOfTheDayElement = document.createElement("p");
        // Goes to the journal entry and grabs the "journalEntry"
        dateOfEntryElement.innerHTML = entry.dateOfEntry;
        conceptsCoveredElement.innerHTML = entry.conceptsCovered;
        entryElement.innerHTML = entry.journalEntry;
        moodOfTheDayElement.innerText = entry.moodOfTheDay;
        // "appends" the entry element (the "p" element) to the entry container (article with class of "entryLog")
        entryContainer.appendChild(dateOfEntryElement) 
        entryContainer.appendChild(entryElement)
        entryContainer.appendChild(conceptsCoveredElement)
        entryContainer.appendChild(moodOfTheDayElement)        
    });
}

// Invoke the render function
renderJournalEntries(journalEntries)