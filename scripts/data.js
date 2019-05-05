function getData() {                                                     /* function*/
    const el = document.querySelector("#entryContainer");              /*queryselector targets first element that matches target*/
    el.innerHTML = "";                                              /*empty string*/
    return fetch("http://localhost:3000/entries")                         /*fetch local host*/
        .then(response => response.json())  
}
