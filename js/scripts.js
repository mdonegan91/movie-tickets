//Business Logic for Movie Ticket

function Ticket(movie, age, time) {
    this.movie = movie;
    this.age = age;
    this.time = time;
}

Ticket.prototype.TicketCost = function () {
    let ticketPrice = 15;
    if (this.movie === "Avatar") {
        ticketPrice += 5;
    }
    else if (this.movie === "Frozen") {
        ticketPrice -= 3;
    }
    if (this.age === "kid" || "senior") {
        ticketPrice -= 2;
    }
    if (this.time === "afternoon") {
        ticketPrice += 1;
    }
    else if (this.time === "evening") {
        ticketPrice += 3;
    }
    console.log(ticketPrice);
    return ticketPrice;
};

//User Interface Logic
function handleMovieTicket(event) {
    event.preventDefault();   
    const inputMovie = document.getElementById("movie-choice").value;
    const inputAge = document.getElementById("age-choice").value;
    const inputTime = document.getElementById("time-choice").value;
    let ticketPrice = new Ticket(inputMovie, inputAge, inputTime);
    document.getElementById("result").innerText = ticketPrice.TicketCost();
};


window.addEventListener("load", function () {
    const form = document.getElementById("movie-ticket")
    form.addEventListener("submit", handleMovieTicket)

});