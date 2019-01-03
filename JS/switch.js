function enableRed(fields){ 
    let calificationForm = document.redform.redbox
    if (calificationForm.checked == true) {
        for (let i=0; i<fields.length; i++){
        let field = document.getElementById(fields[i])
        field.disabled = false
        }
    } else {
        for (let i=0; i<fields.length; i++){
        let field = document.getElementById(fields[i])
        field.disabled = true
        }
    }
}
