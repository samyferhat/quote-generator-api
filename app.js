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
        let quote = document.querySelector('.quote');
        let person = document.querySelector('.person');


        async function newQuote() {
            // fetch a random quote from the Quotable free API
            const quote = await fetch("https://api.quotable.io/random")
                .then(response => response.json())
                .catch(err => console.log(err));

            if (quote.ok) {
                //Update DOM elements with the data fetched
                quote.textContent = quote.content;
                person.textContent = quote.author;
            } else {
                quote.textContent = "An error occured while loading";
                console.log(quote);
            }
        }

        // Attach to the ̀ button` an Event listener 
        btn.addEventListener("click", newQuote);

        // call newQuote once when page loaded to print the 
        // first quote 

        newQuote();

    });
} else {
    DomLoadingInfo();
}


