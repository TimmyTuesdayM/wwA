// const btn = document.getElementById('btn');

// btn.addEventListener('click', function onClick() {
//     btn.style.backgroundColor = 'purple';
//     btn.style.color = 'white';
// });
let tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button")
let tabpanels = document.querySelectorAll(".tabs .tabpanel")

function showPanel(panelIndex, colorCode) {
    tabButtons.forEach(function (node) {
        node.style.backgroundColor = "";
        node.style.color = "";
    })
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    tabButtons[panelIndex].style.color = "white";
    tabpanels.forEach(function (node) {
        node.style.display = "none";
    });
    tabpanels[panelIndex].style.display = "flex";
    tabpanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#301934');