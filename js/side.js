function GetValues(){
    let startValue = parseInt(document.getElementById("startNumber").value);
    let endValue = parseInt(document.getElementById("endNumber").value);

    if(ValidateValues(startValue, endValue) == false){
        alert("Please, enter integer values. \n Note: Start value can't be higher than End value.");
        return;
    }

    let fizzBuzzData = GetFizzBuzz(startValue, endValue);
    PopulateTable(fizzBuzzData);
    
}

function ValidateValues(start, end){
    
    if(!Number.isInteger(start) || !Number.isInteger(end)){
        return false;
    }

    if(start > end){
        return false;
    }

    return true;
}

function GetFizzBuzz(start, end){
    let output = [];

    for(let i = start; i <= end; i++){
        if(i % 3 == 0 && i % 5 == 0){
            output[i-1]= "FizzBuzz";
        }
        else if(i % 3 == 0){
            output[i-1] = "Fizz";
        }
        else if(i % 5 == 0){
            output[i-1] = "Buzz";
        }
        else{
            output[i-1] = i;
        }
    }

    return output;

}

function PopulateTable(fizzBuzz){
    let tableBody = document.getElementById("tableResults");
    let templateRow = document.getElementById("InnerTableTemplate");
    tableBody.innerHTML ="";

    for(let i=0; i < fizzBuzz.length; i+=5){
     
        let tableRow = document.importNode(templateRow.content, true);       
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fizzBuzz[i]);
        rowCols[0].textContent = fizzBuzz[i];

        rowCols[1].classList.add(fizzBuzz[i+1]);
        rowCols[1].textContent = fizzBuzz[i+1];

        rowCols[2].classList.add(fizzBuzz[i+2]);
        rowCols[2].textContent = fizzBuzz[i+2];

        rowCols[3].classList.add(fizzBuzz[i+3]);
        rowCols[3].textContent = fizzBuzz[i+3];

        rowCols[4].classList.add(fizzBuzz[i+4]);
        rowCols[4].textContent = fizzBuzz[i+4];

        tableBody.appendChild(tableRow);
    }

}