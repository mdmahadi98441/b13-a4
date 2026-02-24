// let interviewCount = 0;
// let rejectCount = 0;

// const interview = document.getElementById("interview");
// const reject = document.getElementById("reject");

// const cards = document.querySelectorAll("#card-box");

// // forEach এর বদলে for...of
// for (let card of cards) {

//     card.dataset.status = "none";

//     const interviewBtn = card.querySelector(".btn-success");
//     const rejectBtn = card.querySelector(".btn-error");

//     interviewBtn.addEventListener("click", function () {

//         if (card.dataset.status === "interview") return;

//         if (card.dataset.status === "rejected") {
//             rejectCount--;
//         }

//         interviewCount++;
//         card.dataset.status = "interview";

//         interview.innerText = interviewCount;
//         reject.innerText = rejectCount;
//     });

//     rejectBtn.addEventListener("click", function () {

//         if (card.dataset.status === "rejected") return;

//         if (card.dataset.status === "interview") {
//             interviewCount--;
//         }

//         rejectCount++;
//         card.dataset.status = "rejected";

//         interview.innerText = interviewCount;
//         reject.innerText = rejectCount;
//     });
// }


let interviewCount = 0;
let rejectCount = 0;
let appliedCount = 0;

const interviewDisplay = document.getElementById("interview");
const rejectDisplay = document.getElementById("reject");
const jobsLeftDisplay = document.getElementById("jobs");

const cards = document.querySelectorAll(".mt-8");
let totalJobs = cards.length;

jobsLeftDisplay.innerText = totalJobs + " Jobs";

for (let card of cards) {

    card.dataset.status = "none";

    const statusBtn = document.querySelector('button-stutes');
    const interviewBtn = card.querySelector(".btn-success");
    const rejectBtn = card.querySelector(".btn-error");

    interviewBtn.addEventListener("click", function () {

        if (card.dataset.status === "interview") return;

        if (card.dataset.status === "none") {
            appliedCount++;
            totalJobs--;
        }

        if (card.dataset.status === "rejected") {
            rejectCount--;
        }

        interviewCount++;
        card.dataset.status = "interview";

        // Status Button Update
        statusBtn.innerText = "Interview";
        statusBtn.classList.remove("btn-error");
        statusBtn.classList.add("btn-success");

        updateUI();
    });

    rejectBtn.addEventListener("click", function () {

        if (card.dataset.status === "rejected") return;

        if (card.dataset.status === "none") {
            appliedCount++;
            totalJobs--;
        }

        if (card.dataset.status === "interview") {
            interviewCount--;
        }

        rejectCount++;
        card.dataset.status = "rejected";

        // Status Button Update
        statusBtn.innerText = "Rejected";
        statusBtn.classList.remove("btn-success");
        statusBtn.classList.add("btn-error");

        updateUI();
    });
}

function updateUI() {
    interviewDisplay.innerText = interviewCount;
    rejectDisplay.innerText = rejectCount;
    jobsLeftDisplay.innerText = totalJobs + " Jobs";
}