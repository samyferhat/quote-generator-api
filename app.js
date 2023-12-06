// Concepts in the project: 
// - document.querySelector
// - fetch
// - addEventListener 
// - innerText

function DomLoadingInfo() {
    console.info("DOM loaded");
}

if (document.readyState === "loading") {
    // Loading hasn't finished yet 
    document.addEventListener("DOMContentLoaded", () => {
        // DOM elements
        let btn = document.querySelector('.new-quote');
        let quoteElement = document.querySelector('.quote');
        let person = document.querySelector('.person');


        async function updateQuote() {
            // fetch a random quote from the Quotable free API
            const newQuote = await fetch("https://api.quotable.io/random?tags=technology&maxLength=120&")
                .then(response => response.json())
                .catch(err => {
                    console.log(err);
                    quoteElement.textContent = "An error occured while loading";
                });

            //Update DOM elements with the data fetched
            quoteElement.textContent = `" ${newQuote.content} "`;
            person.textContent = newQuote.author;


        }

        // Attach to the ̀ button` an Event listener 
        btn.addEventListener("click", updateQuote);

        // call newQuote once when page loaded to print the 
        // first quote 

        updateQuote();

    });
} else {
    DomLoadingInfo();
}


