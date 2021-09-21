function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!'
  }
  else if (distance <= 2499){
    return 'I will gladly take your thirty bucks.'
  }
  else (distance >= 2500) ; {
    return 'No can do.' 
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC' ? "Ok, sounds good." : "No go.");
  }


function switchOnCharmFromTip(Tip){

 switch (Tip){
   case 'generous': 
     return 'Thank you so much.';
     break;
   case 'not as generous':
     return 'Thank you.';
     break;
   case 'thanks for everything' :
     return 'Bye.';
     break;
 };
}