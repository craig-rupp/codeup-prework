// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
 
if (color == 'red'){
	console.log("My labtop cover is red");
}	else if (color == 'orange'){
	console.log("Sunsets are orange");
}	else if (color == 'yellow'){
	console.log("Dandellions are yellow");
}	else if (color == 'green'){
	console.log("Grass is green");
}	else if (color == 'blue'){
	console.log("Ocean is a beautiful blue");
}	else {
	console.log("I know nothing of that color");
}

(color == favorite) ? console.log(color + " is my favorite") :
 console.log(color + " was not your favorite, sorry");


// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

for (var i = 1; i < 100; i++) {

    			if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        		continue;
   			 }

   				 console.log('Here is a lovely even number: ' + i);
			}