const inputAnggota = document.getElementById("jumlahAnggota");

const nextButton = document.getElementById("nextButton");

let formGenerated = false;

nextButton.addEventListener("click", () => {
    if (formGenerated) {
        return;
    }

    console.log("Code Success");

    const heading = document.createElement("h2");
    const headingText = document.createTextNode("Nama Anggota");
    heading.classList.add("mb-3");
    heading.appendChild(headingText);

    const insert = document.getElementById("forms");
    insert.appendChild(heading);

    const nAnggota = parseInt(inputAnggota.value, 10);

    for (let i = 1; i <= nAnggota; i++ ) {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("form-floating",  "mb-3");

        const inputBox =  document.createElement("input");
        inputBox.setAttribute("placeholder", ("Nama Anggota " + i));
        inputBox.classList.add("form-control")
        inputDiv.appendChild(inputBox);

        const labelInput = document.createElement("label");
        const labelInputText = document.createTextNode("Nama Anggota " + i);
        labelInput.appendChild(labelInputText)
        inputDiv.appendChild(labelInput);

        insert.appendChild(inputDiv);
    }

    nextButton.textContent = "Daftar Kelompok";
    formGenerated = true;
});

