function move(orderLetter,Position,size){
  let originalPosition = [...Position];
  let orderLetters = [...orderLetter];
  
  if(orderLetter === "" || orderLetter.length === 0){
    // termination of this recursion, no more 'Letter' left
    return originalPosition.join("");
  }
  

      if(orderLetters[0] === 'L'){
        // left rotate <-
        if(originalPosition[2] === 'N'){
          originalPosition[2] = "W";
        } else if (originalPosition[2] === 'W'){
          originalPosition[2] = 'S'
        } else if (originalPosition[2] === 'S'){
          originalPosition[2] = 'E'
        } else if (originalPosition[2] === 'E'){
          originalPosition[2] = 'N'
        }
      } else if (orderLetters[0] === 'R'){
        // right rotate ->
        if(originalPosition[2] === 'N'){
          originalPosition[2] = 'E'
        } else if (originalPosition[2] === 'W'){
          originalPosition[2] = 'N'
        } else if (originalPosition[2] === 'S'){
          originalPosition[2] = 'W'
        } else if (originalPosition[2] === 'E'){
          originalPosition[2] = 'S'
        }
      } else if(orderLetters[0] === 'M'){
        // move forward
        if(originalPosition[2] === 'N'){
          let tempn = parseInt(originalPosition[1]);
          if(tempn < size[1]){ // prevent the object move beyond the top border
            tempn++;
          	originalPosition[1] = tempn.toString();
          }
        } else if (originalPosition[2] === 'W'){
          let tempw = parseInt(originalPosition[0]);
          if(tempw > 0){ // prevent the object move beyond the left border
            tempw--;
          	originalPosition[0] = tempw.toString();
          }
        } else if (originalPosition[2] === 'S'){
          let temps = parseInt(originalPosition[1]);
          if(temps > 0){ // prevent the object move beyond the right border
            temps--;
          	originalPosition[1] = temps.toString();
          }
        } else if (originalPosition[2] === 'E'){
          let tempe = parseInt(originalPosition[0]);
          if(tempe < size[0]){ // prevent the object move beyond the bottom border
            tempe++;
          	originalPosition[0] = tempe.toString();
          }
        }
      }
  	orderLetters.shift() // Delet the 'Commond' that already been executed
  	return move(orderLetters.join(""), originalPosition.join(""),size);
    
}

function solution(x,y){
  	let result = [];
	for(let i = 0; i < y.length; i++){
      result.push(move(y[i][1],y[i][0],x));
    }
  return result;
}

export default solution