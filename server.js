const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

// The database to use
const dbName = "winterCycleDB";

//connect mongodb using Atlas connection string, it will lead to the database specified above
const url = "mongodb+srv://edf-winter-cycle:enforcementWinter@cluster0.cepjc.mongodb.net/" + dbName;
mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true });
console.log("Connected correctly to server");

//create a data schema
const reportsSchema = {
    // "Date": Date,
    // "Time": Date,
    "Incident Address": String,
    "Incident City": String,
    "Incident Zipcode": Number,
    "Incident County": String,
    "Incident State": String,
    "Incident Description": String,
    "Incident Source": String,
    "Incident Status": String,
    "Source Name": String,
    "Other Details": String
}

const Report = mongoose.model("Report", reportsSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/templates/form.html");
})

app.post("/", function(req, res) {
    let newReport = new Report({
        // "Date": req.body.Date,
        // "Time": req.body.Time,
        "Incident Address": req.body.IncidentAddress,
        "Incident City": req.body.IncidentCity,
        "Incident Zipcode": req.body.IncidentZipcode,
        "Incident County": req.body.IncidentCounty,
        "Incident State": req.body.IncidentState,
        "Incident Description": req.body.IncidentDescription,
        "Incident Source": req.body.IncidentSource,
        "Incident Status": req.body.IncidentStatus,
        "Source Name": req.body.SourceName,
        "Other Details": req.body.OtherDetails
    });
    newReport.save();
    res.redirect("/");
})

app.listen(3000, function() {
    console.log("server is running on 3000");
})