function closeStartBtn(){
    if (document.getElementById('start-quizz').classList.contains('d-none')){
        setTimeout(function () {
            document.getElementById('start-quizz').classList.toggle('d-none');
            // var rulesHeight = document.getElementById('rules');

            document.getElementById('starting-container').style.marginTop='300px';
            // console.log(rulesHeight.style.maxHeight)
            // console.log(11)
        }, 350);
    }
    else{
        // clientHeight;
        document.getElementById('starting-container').style.marginTop='20vh';
        document.getElementById('start-quizz').classList.toggle('d-none');
        
    }    
}

