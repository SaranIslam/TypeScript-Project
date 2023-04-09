function BMI(weight: string,height: string){
    var calc: any
    let ww1: number = parseInt(weight)
    let hh1: number = parseInt(height)
    calc = (ww1/(hh1*hh1/10000)).toFixed(1)
    display("result",calc)
    range("range",calc)
}
function display(elementId: string, calc: any){
    let result = document.getElementById(elementId)
    if(result!=null){
        result.innerHTML = calc+" kg/m2" 
    }
}
function range(result: string,calc: number){
    let myResult = document.getElementById(result)
   if(myResult != null){
    if(calc<18.5){
        myResult.style.color="lightblue"
        myResult.innerHTML="UNDERWEIGHT"
    }
    else if(calc<24.9){
        myResult.style.color="green"
        myResult.innerHTML="NORMAL"
    }
    else if(calc<29.9){
        myResult.style.color="yellow"
        myResult.innerHTML="OVERWEIGHT"
    }
    else if(calc<34.9){
        myResult.style.color="orange"
        myResult.innerHTML="OBESE"
    }
    else{
        myResult.style.color="RED"
        myResult.innerHTML="EXTREMELY OBESE" 
    }
}
}


