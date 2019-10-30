window.SpeechRecognition = Window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement('p');
p.style.paddingBottom = '20px';
const words = document.querySelector('.words');

words.append(p);

recognition.addEventListener('result' , e=>{
    //console.log(e)
    // console.log(e.results)
    const transcripts = e.results[0][0].transcript;
    console.log(transcripts)
    p.textContent = transcripts;

    if(e.results[0].isFinal===true){
        p = document.createElement('p');
        p.style.paddingBottom = '20px';
        words.appendChild(p);
    }
})

recognition.addEventListener('end' , recognition.start);
recognition.start();