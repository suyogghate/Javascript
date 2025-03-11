const incrBtn = document.getElementById("increaseBtn");
const decrBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

incrBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decrBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}