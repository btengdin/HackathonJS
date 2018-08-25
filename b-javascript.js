let Q1A1= "yellow";
let result = [];


let button09 =document.getElementById("button09");
let button09 =document.getElementById("button10");
let button11 =document.getElementById("button11");
let button12 =document.getElementById("button12");


function question1(){
    if(button01.clicked === true){
        result.push(Q1A1);
    }
    if(button02.clicked === true){
        result.push(Q1A2);
    }else{
        result.push(Q1A3)
    }
}
function question2(){
    if(button05.clicked === true){
        result.push(Q2A1);
    }
    if(button06.clicked === true){
        result.push(Q2A2);
    }else{
        result.push(Q2A3)
    }
}
function question3(){

    if(button09.clicked === true){
        result.push(Q3A1);
    }
    if(button10.clicked === true){
        result.push(Q3A2);
    }else{
        result.push(Q3A3)
    }
    
}

function nextQuestion(){
    

}
function showResults(){
    //results starting at Question1
    if(result.contains("Q1A1")){
        //Q1A1 to Q2A1
        if(result.contains("Q2A1")){
            //Q1A1 to Q2A1 to Q3A1
            if(result.contains("Q3A1")){return "You're a grilled"}
            //Q1A1 to Q2A1 to Q3A2
            if(result.contains("Q3A2")){
                return "You're a ice cream sundae"
            }else{
                //Q1A1 to Q2A1 to Q3A3
                return "You're a burger."
            }
        }
        //Q1A1 to Q2A2
        if(result.contains("Q2A2")){
            //Q1A1 to Q2A2 to Q3A1
            if(result.contains("Q3A1")){
                return "You're a french fry"}
            //Q1A1 to Q2A2 to Q3A2
            if(result.contains("Q3A2")){
                return "You're a ice cream sundae"
            }else{
                //Q1A1 to Q2A2 to Q3A3
                return "You're a burger."
            }
        }
        if(result.contains(Q2))
    }
    if(result.contains("Q1A2")){
        if(result.contains("Q2A2")){
            if(result.contains("Q3A2"))
        }
    }
    if(result.contains("Q1A3")){

    }
    }
}

//question 1
button01.addEventListener('click',question1);
button02.addEventListener('click',addEventListener,question1);
button03.addEventListener('click',addEventListener,question1);
button04.addEventListener('click',addEventListener);
//question 2
button05.addEventListener('click',addEventListener,question2);
button06.addEventListener('click',addEventListener,question2);
button07.addEventListener('click',addEventListener,question2);
button08.addEventListener('click',addEventListener);
//question 3
button09.addEventListener('click',addEventListener,question3);
button10.addEventListener('click',addEventListener,question3);
button11.addEventListener('click',addEventListener,question3);
button12.addEventListener('click',addEventListener);

