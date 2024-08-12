const quote = document.querySelector("blockquote");
const author = document.querySelector("span");
const genBtn = document.querySelector(".random");
const tweet = document.querySelector(".tweet");


genBtn.addEventListener("click", function() {
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let randomNumber = Math.floor(Math.random() * data.length);
        quote.textContent = data[randomNumber].text;
        author.textContent = data[randomNumber].author;
        author.textContent = author.textContent.replace(", type.fit","");
      });
});

//want to line in twitter in the authot text tweeter link with for loop make an array of spaces then add it to the link

tweet.addEventListener("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent +"                                                                                                                  ---by " + author.textContent);
});




