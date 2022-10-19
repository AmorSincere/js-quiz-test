

let questions=[
    {'what color is sun?':[['yellow','green','blue'],0]},
    {'what is 2+3?':[['10','17','5'],2]},
    {'what shape is Earth':[['square','i dont know','elipse'],2]},
    {'when a tree drops leafs':[['spring','lorem3','autumn'],2]},
    {'who is one of best generals of Uzbekistan':[['Alexander','Amir Temur','Chingiz khan'],1]},
]
let results={};
let quesIndex=0;

function questionsDots(){
    a="";

    for ( let i=0; i<questions.length;i++){
        b=i+1
        a+="<span class='col-1 badge bg-primary me-md-3 me-1' onclick='specificQue("+i+")'>"+b+"</span>"
    }
    document.getElementById('quelist').innerHTML=a;
} 

function DrawQuestion(){
    questionsDots()
    if (questions.length>quesIndex){
    let question=questions[quesIndex];
    lengthQustions=questions.length;
    let numberIndex=quesIndex+1;
    x=Object.keys(question)[0]
    currentQuestions=question[Object.keys(question)[0]]
        questionsCrud=""
        for ( let i=0;i<currentQuestions[0].length;i++){
           
            questionsCrud+= "<button type='button'  id='"+numberIndex+i+"'  onclick='chooseOption("+quesIndex+","+i+")'  class='btn  text-start bg-option form-control mt-3 shadow-none'>"+currentQuestions[0][i]+"</button>";
        }
    currentQue=
    "<div class='card' >"+
    "<div class='card-header'>"+
    "    <h6>Awesome Quiz Application</h4>"+
    "</div>"+
    "<div class='card-body'>"+
        "<h5>"+numberIndex+"."+x+"</h5>"+questionsCrud+

    "</div>"+
    "<div class='card-footer d-flex justify-content-between align-items-center'>"+
        "<p class='m-0 p-0'>"+numberIndex+" of "+lengthQustions+" questions</p>"+
        "<button type='button' class='btn btn-primary btn-sm' onclick='newQue()'>Next Que</button>"+
    "</div>"+
"</div>";
    document.getElementById("current-que").innerHTML=currentQue;
    quesIndex++;
    }
}
function newQue(){
    if (questions.length>quesIndex){
        lengthQustions=questions.length;
        let question=questions[quesIndex];
        let numberIndex=quesIndex+1;
        console.log(quesIndex,numberIndex);
        currentQuestions=question[Object.keys(question)[0]]
        x=Object.keys(question)[0]
        questionsCrud=""
        for ( let i=0;i<currentQuestions[0].length;i++){
            if(i==results[quesIndex]){
                questionsCrud+= "<button type='button' id='"+numberIndex+i+"' onclick='chooseOption("+quesIndex+","+i+")' class='btn text-start bg-info form-control mt-3 shadow-none'>"+currentQuestions[0][i]+"</button>";
            }
            else{
                questionsCrud+= "<button type='button' id='"+numberIndex+i+"' onclick='chooseOption("+quesIndex+","+i+")' class='btn text-start bg-option form-control mt-3 shadow-none'>"+currentQuestions[0][i]+"</button>";

            }
        }
        currentQue=
        "<div class='card' >"+
        "<div class='card-header'>"+
        "    <h6>Awesome Quiz Application</h4>"+
        "</div>"+
        "<div class='card-body'>"+
        "<h5>"+numberIndex+"."+x+"</h5>"+questionsCrud+
        "</div>"+
        "<div class='card-footer d-flex justify-content-between align-items-center'>"+
        "<p class='m-0 p-0'>"+numberIndex+" of "+lengthQustions+" questions</p>"+
        "<button type='button' class='btn btn-primary btn-sm' onclick='newQue()'>Next Que</button>"+
        "</div>"+
        "</div>";
        document.getElementById("current-que").innerHTML=currentQue;
        quesIndex+=1;
    }
}


function specificQue(index){
    quesIndex=index;
    newQue();
}

function chooseOption(a,b){
    if (results[a] || results[a]===0){
        formerID=String(a+1)+String(results[a]);
        document.getElementById(formerID).classList.remove('bg-info');
        document.getElementById(formerID).classList.add('bg-option');
        console.log('oldindiiiiiiii')
        results[a]=b;
    }
    else{
        results[a]=b;
    }
    id=String(a+1)+String(b);
    document.getElementById(id).classList.add('bg-info');
    document.getElementById(id).classList.remove('bg-option');
    console.log('choose option',results);
}


function calcResult(){
    rights=0;
    wrongs=0;
    analiz="Right options:"
    a={}
    for (let i =0 ; i<questions.length;i++){
        if (results[i]==questions[i][Object.keys(questions[i])[0]][1]){
            rights++;
            
        }
        else{
            wrongs++;
        }
        x=Object.keys(questions[i])[0]
        y=questions[i][Object.keys(questions[i])[0]][0][questions[i][Object.keys(questions[i])[0]][1]]
        analiz+="<h4 >"+x+"</h4><p >"+y+"</p>"
       
    }
    analiz+="<a href='index.html' class='btn btn-sm btn-info'>back to home</a>"
    result="rights: "+rights+" wrongs: "+wrongs;
    document.getElementById('results').innerHTML=result;
    document.getElementById('analiz').innerHTML=analiz;
}


window.onload=DrawQuestion();