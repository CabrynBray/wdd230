// --------------------- Time stamp -------------------------
function setTimestamp() {
    var timestampField = document.getElementById("timestamp");
    var currentDate = new Date();
    timestampField.value = currentDate.toISOString(); // Set the timestamp in ISO format
}

setTimestamp()