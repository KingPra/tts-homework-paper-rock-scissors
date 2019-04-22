
// rock = 0;
// paper = 1;
// scissors = 2;


let cpu = Math.floor(Math.random() * 3);
let player = prompt('Choose r for rock, p for paper or s for scissors');

if (player === 'r' && cpu === 0 || player === 'p' && cpu === 1 || player === 's' && cpu === 2 ) {
	console.log('its a tie');
} else if (player === 'r' && cpu === 2 || player === 'p' && cpu === 0 || player === 's' && cpu === 1 ) {
	console.log('You win!')
} else if (cpu === 1 && player === 'r' || cpu === 0 && player === 'p' || cpu === 1 && player === 's'){
	console.log('you lose !')
} else {
	console.log('please choose r, p or s');
}


switch (cpu) {
	case 0 : 
	cpu = 'rock';
	break;
	case 1 :
	cpu = 'paper';
	break;
	default:
	cpu = 'scissors'
 }

 switch (player) {
 	case 'r':
 	player = "rock";
 	break;
 	case 'p':
 	player = 'paper';
 	break;
 	default: 
 	player = 'scissors';
 }

 console.log(`you chose ${player} and the cpu chose ${cpu}`);



