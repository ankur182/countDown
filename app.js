const endDate = "19 Feb 2026 08:20:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;//ms to sec

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);//days
    inputs[1].value = Math.floor(diff / 3600) % 24;//hours
    inputs[2].value = Math.floor(diff / 60) % 60;//min
    inputs[3].value = Math.floor(diff) % 60;//sec
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)