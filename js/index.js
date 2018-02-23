// jQuery
// Generation Button
$(".generate").on("click", function() {
	var num  = random(quotes.length);
	var text = quotes[num].text;
	var author = quotes[num].author;
	
	$("#quote-text").html(text);
	$("#quote-author").html("<i>" + author + "</i>");
});

// JavaScript
// Quote Objects
var quotes = [
	{text: "Frankly, my dear, I don’t give a damn.", author: "Gone With The Wind, 1939"},
	{text: "Toto, I've got a feeling we're not in Kansas anymore.", author: "The Wizard Of Oz,  1939"},
	{text: "May the Force be with you.", author: "Star Wars, 1977"},
	{text: "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.", author: "On the Waterfront, 1954"},
	{text: "Oh, Jerry, don't let's ask for the moon. We have the stars.", author: " 	Now, Voyager, 1942"},
	{text: "A boy's best friend is his mother.", author: "Psycho, 1960"},
	{text: "Get your stinking paws off me, you damned dirty ape.", author: "Planet of the Apes, 1968"},
	{text: "I feel the need—the need for speed!", author: "Top Gun, 1986"},
	{text: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", author: "Dead Poets Society, 1989"},
	{text: "Nobody puts Baby in a corner.", author: "Dirty Dancing, 1987"},
	{text: "Warriors, come out to play-i-ay.", author: "The Warriors, 1979"},
	{text: "This is your life and it's ending one minute at a time.", author: "Fight Club, 1999"}
];

// Random Function
var random = function(len) {
	return Math.floor(Math.random() * len);
}