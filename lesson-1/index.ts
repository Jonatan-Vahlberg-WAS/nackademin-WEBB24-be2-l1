console.log("Functions")

function add(x: number, y: number): number{
    return x+y
}

//! avoid if possible multiple returns
function divide(x: number, y:number): number | string {
    if(x === 0){
        return "Zero not valid as numerator"
    }
    return x/y
}

//! Avoid any if possible look below for reason
const a: any = ""

//! a.times.x[0].length