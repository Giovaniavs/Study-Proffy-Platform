document.getElementById("add-time").addEventListener("click", cloneField)

function cloneField() {
    let newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)
    let fields = newFieldsContainer.querySelectorAll("input")
    fields.forEach(function(field){
        field.value = ""
    })

    document.getElementById("schedule-items").appendChild(newFieldsContainer)
};
