const data=[
{
    question:"Inside which HTML element do we put the JavaScript?",
    a:"<script>",
    b:"<javaScript>",
    c:"<js>",
    d:"<scripting>",
    correct:"a"
},
{
    question:"JavaScript File Has An Extension of:",
    a:".Java",
    b:".Js",
    c:".Javascript",
    d:".xml",
    correct:"b"
},
{
    question:"Function is Used To Parse a String To Int:",
    a:"Integer.Parse",
    b:"Int.Parse",
    c:"Parse.Int",
    d:"None",
    correct:"c"
},
{
    question:"Which Of The Dialog Box Display a Message And a Data Entry Field?",
    a:"Alert()",
    b:"Prompt()",
    c:"Confirm()",
    d:"Msg()",
    correct:"b"
},
{
question:"Event is Used To Check An Empty Text Box:",
a:"Onclick()",
b:"OnFocus()",
c:"OnBlur()",
d:"None",
correct:"c"

},
{
question:"If Button is clicked .......Event Handler is invoked.",
a:"OnSubmit()",
b:"OnLoad()",
c:"IsPostBack()",
d:"Onclick()",
correct:"d"

},
{
question:"A Function Associated With An object is Called:",
a:"Function",
b:"Method",
c:"Link",
d:"None",
correct:"b"
},
{
 question:"Javascript is an _______ language?",
a:"Object-Oriented",
b:"Object-Based",
c:"Procedural",
d:"None",
correct:"a"
},
{
 question:"Which of the following keywords is used to define a variable in Javascript?",
a:"var",
b:"let and const",
c:"All the Above",
d:"None",
correct:"c"
},
{
question:"Which of the following methods can be used to display data in some form using Javascript?",
a:"document.write()",
b:"console.log()",
c:"window.alert()",
d:"All the Above",
correct:"d"
},

];


let question=document.getElementById("question");

let aOption=document.getElementById('option_a');
let bOption=document.getElementById('option_b');
let cOption=document.getElementById('option_c');
let dOption=document.getElementById('option_d');
let answers=document.getElementsByClassName("answer")

let quizNum=0;
let score=0;

function loadQuiz(){
// console.log(answers)
// un check all radio button if any check
for(let i=0;i<answers.length;i++){
    if(answers[i].checked==true){
        answers[i].checked=false
    }
}


    question.innerText=data[quizNum]["question"];

    aOption.innerText=data[quizNum]["a"]
    bOption.innerText=data[quizNum]["b"]
    cOption.innerText=data[quizNum]["c"]
    dOption.innerText=data[quizNum]["d"]
};
loadQuiz();

let button=document.getElementById("btn");
button.addEventListener("click",function(){
    // to check the answers;
    let userAnswers=null;
for( let i=0;i<answers.length;i++){
    if(answers[i].checked==true){
        userAnswers=answers[i].id
    }
}


if(userAnswers){
// check if answer is correct or not
if(userAnswers==data[quizNum]["correct"]){
    score++;
};

console.log("Score=>",score)

// load the new question of quiz
    quizNum++;//0-->1-->2
    if(quizNum<data.length){
        loadQuiz()
    } else{
        let header=document.getElementById("header");
        header.innerHTML = `
        <h1> Your Score ${score} Out of ${data.length} </h1>
        `;
        button.innerText="Double Tap to reload the Quiz";
        button.style.fontSize="20px"
    }
     
} 
    
});

button.addEventListener("dblclick",function(){
    location.reload()
})

