const loadDiv = document.querySelector("#load");
const unloadedDiv = document.querySelector("#unloaded");
const payloadTxt = document.querySelector("#payloadTxt");
const valuesForm = document.querySelector("#array");
const originalPayload = document.querySelector("#original");

function unload() {
    loadDiv.style.display = "none";
    unloadedDiv.style.display = "block";
    originalPayload.innerHTML = payloadTxt.value;
    process(payloadTxt.value);
}

function reset() {
    loadDiv.style.display = "block";
    unloadedDiv.style.display = "none";
    valuesForm.innerHTML = "";
}

function process(payloadToParse) {
    payloadToParse.toString();
    payloadToParse = JSON.stringify(payloadToParse);
    console.log(payloadToParse);
    
    let data = JSON.parse(payloadToParse);
    let inputKeyEl;
    let inputValueEl;

    Object.keys(data).forEach(key => {
        if (data[key] && typeof data[key] === "object") process(data[key]); // recurse.
        else { 
            inputKeyEl = document.createElement("input");
            inputValueEl = document.createElement("input");

            inputKeyEl.type = "text";
            inputKeyEl.setAttribute("value", key);
            inputKeyEl.setAttribute("onclick", "selectByClick(this)")

            inputValueEl.type = "text";
            inputValueEl.setAttribute("value", data[key]);
            inputValueEl.setAttribute("onclick", "selectByClick(this)")

            valuesForm.appendChild(inputKeyEl);
            valuesForm.appendChild(inputValueEl);
            valuesForm.innerHTML += "<br>";
        }
    });
        
}

function selectByClick(elementRef) {
    elementRef.setSelectionRange(0, elementRef.value.length);
    navigator.clipboard.writeText(elementRef.value);
}

