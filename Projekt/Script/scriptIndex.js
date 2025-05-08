
class GameReview {
    constructor(gameTitle, reviewTitle, rating, reviewText, author) {
        this.gameTitle = gameTitle;
        this.reviewTitle = reviewTitle;
        this.rating = rating;
        this.reviewtext = reviewText;
        this.author = author;
        this.date = new Date().toLocaleDateString();
    }

    display() {
        console.log(`Game: ${this.gameTitle}`);
        console.log(`Review: ${this.reviewTitle}`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Review text: ${this.reviewtext}, Author: ${this.author}`);
        console.log(`Date: ${this.date}`);
    }
}

const allReviews = [];

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("reviewModal");
    const openButton = document.getElementById("addReview");
    const closeButton = document.querySelector(".close");
    const reviewForm = document.getElementById("reviewForm");

    openButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const gameTitle = document.getElementById("gameTitle").value;
        const reviewTitle = document.getElementById("reviewTitle").value;
        const rating = Number(document.getElementById("rating").value);
        const reviewText = document.getElementById("reviewText").value;
        const author = document.getElementById("author").value;
        allReviews.push(new GameReview(gameTitle, reviewTitle, rating, reviewText, author));

        reviewForm.reset();
        modal.style.display = "none";
    });

});