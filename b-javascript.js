let img01 = document.getElementById("img01");
let result = [];
let bitH1 = document.getElementById("bitH1");

let button09 =document.getElementById("button09");
let button10 =document.getElementById("button10");
let button11 =document.getElementById("button11");
let button12 =document.getElementById("button12");



function showResults(){
    //results starting at Question1 Answer1
    if(result.includes("Exercising")===true){
        //Q1A1 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A1 to Q2A1 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"
        }
            //Q1A1 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }else{
                //Q1A1 to Q2A1 to Q3A3
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"
            }
        }
        //Q1A1 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A1 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }
            //Q1A1 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"
            }else{
                //Q1A1 to Q2A2 to Q3A3
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?"
            }
        }
        //Q1A1 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A1 to Q2A3 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }
            //Q1A1 to Q2A3 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4708.JPG"
                return "Interesting answers! You must be the strong sensitive type"
            }else{
                //Q1A1 to Q2A3 to Q3A3
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?"
            }
        }
    }
    //results starting at Question1 Answer2
    if(result.includes("Reading")===true){
        //Q1A2 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A2 to Q2A1 to Q3A1
            if(result.includes("Red")==true){
                img01.src = "IMG_4708.JPG"
                return "Interesting answers! You must be the strong sensitive type"
            }
            //Q1A2 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?"
            }else{
                //Q1A2 to Q2A1 to Q3A3
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"

            }
        }
        //Q1A2 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A2 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }
            //Q1A2 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4697.JPG";
                return "You must be having a great year!"
            }else{
                //Q1A2 to Q2A2 to Q3A3
                img01.src = "IMG_4708.JPG"
                return "Interesting answers! You must be the strong sensitive type"
            }
        }
        //Q1A2 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A2 to Q2A3 to Q3A1
            if(result.includes("Q3A1")===true){
                img01.src = "IMG_4697.JPG";
                return "You must be having a great year!"}
            //Q1A2 to Q2A3 to Q3A2
            if(result.includes("Q3A2")===true){
                img01.src = "IMG_4708.JPG"
                return "Interesting answers! You must be the strong sensitive type"
            }else{
                //Q1A2 to Q2A3 to Q3A3
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?"
            }

        }
    }
    ////results starting at Question1 Answer 3
    if(result.includes("Sleeping")===true){
        //Q1A3 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A3 to Q2A1 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?";
            //Q1A3 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"
            }else{
                //Q1A3 to Q2A1 to Q3A3
                return "You're a burger."
            }
        }
        //Q1A3 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A3 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }
            //Q1A3 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                return "You must be having a great year!"
            }else{
                //Q1A3 to Q2A2 to Q3A3
                return "You're a burger."
            }
        }
        //Q1A3 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A3 to Q2A3 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                return "You are a bright shining star of a person"
            }
            //Q1A3 to Q2A3 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4704.JPG";
                return "Uh oh! Are you a little sleepy today?"
            }else{
                //Q1A3 to Q2A3 to Q3A3
                img01.src = "IMG_4709.JPG";
                return "Hey there! Maybe take a few depp breaths, you look stressed"
            }
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

