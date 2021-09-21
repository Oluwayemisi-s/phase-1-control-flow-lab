
function scuberGreetingForFeet(num){
  if (num <= 400){
    return 'This one is on me!'
  } else if (num > 2000 && num < 2500){
    return 'I will gladly take your thirty bucks.'
  } else if (num > 2500){
    return 'No can do.'
  }

}
console.log(scuberGreetingForFeet(2600))

function ternaryCheckCity(city){
  let response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return response
}

console.log(ternaryCheckCity('Seattle'))

function switchOnCharmFromTip(tip){
  let message
  switch(tip){
    case ('generous'):
      message = 'Thank you so much.'
      break
    case ('not as generous'):
      message = 'Thank you.'
      break
    default:
      message = 'Bye.'
      break
  }
  return message
}
 //   if (tip >= 50){
  //    message = 'Thank you so much.'
  //   } else if (tip < 50 && tip >= 1) {
  //     message = 'Thank you.'
  //    }
  //   else if (tip < 1) {
  //    message = 'Bye.'
  //   }
  //   return message
  //  }

console.log(switchOnCharmFromTip('not as generous'))