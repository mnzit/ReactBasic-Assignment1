window.onload = () => requestAnimationFrame(showTime());

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session = "AM";

    if (hour == 0) hour = 12;
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    document.getElementById("digital-clock").innerText = `${appendZeroConditionally(hour)}:${appendZeroConditionally(minute)}:${appendZeroConditionally(second)} ${session}`;
    requestAnimationFrame(showTime)
}

function appendZeroConditionally(number) {
    return number < 10 ? "0" + number : number;
}