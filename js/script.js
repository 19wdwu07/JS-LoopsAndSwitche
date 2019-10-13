console.log('loops');



//counts of 7 upto 100
// for (var i=0; i<100; i+=7) {
//   document.getElementById('result').innerHTML += i + '</br>';
// }

//multiples of 2 upto 200

// for (var i=0; i<200; i+=2) {
//   document.getElementById('result').innerHTML += i + '</br>';
// }


//take card type as input from user
var cardType = prompt('Enter the type of card you want(diamonds, clubs, spades, hearts');

// matching the user input with switch case
	switch (cardType) {
		case 'diamonds' :
			document.getElementById('result').innerHTML += 'diamond - ACE, diamond - 2 to 10, diamond - Jack, Queen, King';
			break;
			case 'spades' :
			document.getElementById('result').innerHTML +='<img src="images/spades.jpg" class="img-thumbnail" alt="spades"/>';
			break;
			case 'hearts' :
			document.getElementById('result').innerHTML +='<img src="images/hearts.png" class="img-thumbnail" alt="hearts"/>';
			break;
			case 'clubs' :
			document.getElementById('result').innerHTML +='club - ACE, club - 2 to 10, club - Jack, Queen, King';
			break;
		default:
			document.getElementById('result').innerHTML += 'Sorry, wrong input';
	}
