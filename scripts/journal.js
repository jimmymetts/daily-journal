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

let journalEntries = [];


const journalEntry= {
    dateOfEntry: "04/12/2019",
    conceptsCoveres: "Objects and functions",
    journalEntry: "today I learned about objects",
    moodOfTheDay: "madness"
};

const journalEntry2= {
    dateOfEntry: "04/15/2019",
    conceptsCoveres: "loops",
    journalEntry: "today I learned about loops",
    moodOfTheDay: "madness"
};

const journalEntry3= {
    dateOfEntry: "04/17/2019",
    conceptsCoveres: "chicken monkey",
    journalEntry: "today I learned about arrays",
    moodOfTheDay: "madness"
};


journalEntries.push(journalEntry, journalEntry2, journalEntry3);



console.log(journalEntries[2].journalEntry);