///////////////digital clock area
function clock() {
    let clockArea = document.getElementsByTagName("p")[0];
    const time = new Date();
    const newTime = time.toLocaleTimeString();
    clockArea.innerHTML=newTime + " PM";
}
setInterval(() => {
    clock()
}, 1000);
///////////////Remind note area
function reminding() {
    let textArea = document.getElementsByTagName("h2")[0];
    textArea.innerHTML="Unutma, zaman su gibi akıp gidiyor. Onu iyi değerlendir.";
}
let myInterval = setInterval(() => {
        reminding()
},7000);

/////////////delete remind note area
function remindingDelete() {
    let textArea = document.getElementsByTagName("h2")[0];
    textArea.innerHTML="";
}
setInterval(() => {
        remindingDelete()
    },10000);