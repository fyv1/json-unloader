const loadDiv = document.querySelector("#load");
const unloadedDiv = document.querySelector("#unloaded");
const payloadTxt = document.querySelector("#payloadTxt");
const valuesForm = document.querySelector("#array")

function unload() {
    loadDiv.style.display = "none";
    unloadedDiv.style.display = "block";
    process();
}

function reset() {
    loadDiv.style.display = "block";
    unloadedDiv.style.display = "none";
    valuesForm.innerHTML = "";
}

function process() {
    let payload = payloadTxt.value;
    let data = JSON.parse(payload);
    let inputKeyEl;
    let inputValueEl;

    for(let [key, entry] of Object.entries(data)) {

        console.log(key+": "+ entry)
        inputKeyEl = document.createElement("input");
        inputValueEl = document.createElement("input");

        inputKeyEl.type = "text";
        inputKeyEl.setAttribute("value", key);

        inputValueEl.type = "text";
        inputValueEl.setAttribute("value", entry);

        valuesForm.appendChild(inputKeyEl);
        valuesForm.appendChild(inputValueEl);
        valuesForm.innerHTML += "<br>"
        
        
    }
}

function selectByClick() {
    this.setSelectionRange(0, this.value.length);
    navigator.clipboard.writeText(this.value);
}