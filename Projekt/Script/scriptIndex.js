
class GameReview {
    constructor(gameTitle, reviewTitle, rating, reviewText, author) {
        this.gameTitle = gameTitle;
        this.reviewTitle = reviewTitle;
        this.rating = rating;
        this.reviewtext = reviewText;
        this.author = author;
    }

    display() {
        console.log(`Game: ${this.gameTitle}`);
        console.log(`Review: ${this.reviewTitle}`);
        console.log(`Rating: ${this.rating}`);
        console.log(`Review text: ${this.reviewtext}, Author: ${this.author}`);
    }
}