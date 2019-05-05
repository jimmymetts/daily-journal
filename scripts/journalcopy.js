
// console.log("test")

// function getData() {   /* function*/
//     const el = document.querySelector("#entryContainer"); /*queryselector targets first element that matches target*/
//     el.innerHTML = ""; /*empty string*/
//     fetch("http://localhost:3000/entries") /*fetch local host*/
//         .then(response => response.json())
//         .then(myParsedEntries => {
//             myParsedEntries.forEach(entry => {

//                 console.log(entry.dateOfEntry)
//                 console.log(entry.conceptsCovered)
//                 console.log(entry.journalEntry)
//                 console.log(entry.moodOfTheDay);

//                 document.querySelector("#entryContainer").innerHTML += `
//             <div class = “domEl”>
//             <h2>Date of Entry - ${entry.dateOfEntry}</h2>
//              <h2>Concepts Covered - ${entry.conceptsCovered}</h2>
//              <h2>Journal Entry - ${entry.journalEntry}</h2>
//              <h2>Mood of The Day - ${entry.moodOfTheDay}</h2>
//              <hr>
//              </div>
//             `;
//             });
//         })
// }

// getData()