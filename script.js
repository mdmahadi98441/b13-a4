//cherch element
const totalEliment = document.getElementById("total");
const interviewElement= document.getElementById("interview");
const rejectElement = document.getElementById("reject");
const jobsText = document.getElementById("jobs");


//get the btn
const btnAll = document.getElementById("btn-all-part");
const btnInterview = document.getElementById('btn-inter-part');
const btnReject =document.getElementById('btn-reject-part');
const noJob = document.getElementById("no-job");

// card
const cards = document.querySelectorAll('#card-box');

let interviewCount =0
let rejectCount = 0
totalEliment.innerText = cards.length;


for(const card of cards) {
    const interviewBtn = card.querySelector("#interview-btn")
    const rejectBtn= card.querySelector('#reject-btn')
    const statusBtn = card.querySelector('#select');

    card.dataset.status = 'all'

    interviewBtn.addEventListener('click',function(){

        if (card.dataset.status === "reject") {
            rejectCount--
        }

        if (card.dataset.status !== "interview") {
            interviewCount++;
        }

        card.dataset.status = "interview"
        statusBtn.innerText = "Interview"
        updateCount();
    })

//reject btn
    rejectBtn.addEventListener('click',function(){
        if (card.dataset.status=== 'interview') {
            interviewCount--;
        }

         if (card.dataset.status !== 'reject') {
            rejectCount++;
        }
        card.dataset.status = "reject";
        statusBtn.innerText = "Rejected";
        updateCount();
    })



}
function updateCount() {
    interviewElement.innerText = interviewCount;
    rejectElement.innerText = rejectCount;
}


btnAll.addEventListener('click',function(){
    let count = 0

    for (let card of cards) {
        card.style.display = "block";
        count++;
    }
    jobsText.innerText = count + " Jobs";
    cheekNoJob(count);
})


btnInterview.addEventListener("click",function(){

    let count = 0;
    for (let card of cards) {

        if (card.dataset.status === "interview") {
            card.style.display = "block";
            count++;
        } else {
            card.style.display = "none";
        }
    }

    jobsText.innerText = count + " Jobs";
    cheekNoJob(count);
})


btnReject.addEventListener("click",function(){
    let count = 0;

    for (let card of cards){
      if (card.dataset.status === "reject"){
            card.style.display =  'block'
            count++;
        } else {
            card.style.display ='none'
        }
    }

    jobsText.innerText = count + ' Jobs'
    cheekNoJob(count);
})



function cheekNoJob(count) {
    if (count === 0) {
        noJob.style.display = 'block'
    } else {
        noJob.style.display = 'none'
    }
}

// no job hide in fast
noJob.style.display = 'none'