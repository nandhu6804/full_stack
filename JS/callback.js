submitForm("Form submitted successfully..", databaseSharing)

function databaseSharing() {
    console.log("Database stored successfully..")
}

function submitForm(formMsg, dbs) {
    setTimeout(() => {
        dbs()
        console.log(formMsg)
    }, 1000)
}