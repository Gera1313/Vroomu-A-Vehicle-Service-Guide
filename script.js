var vehicleFormEl = $("#vehicle-form");

var vinChoiceEl = $("#vin-choice");

var makeField = $("#make");
var modelField = $("#model");
var yearField = $("#year");
var seriesField = $("#series");
var bodyField = $("#body");
var transField = $("#transmission");
var driveField = $("#drive-type");
var engineField = $("#engine");
var fuelTypeField = $("#fuel-type");

var submitBtn = $("#submitBtn");

// var chosenVin = "3VWDB7AJ6HM326256";
// var model = "Jetta";
// var year = "2015";

// Shorthand for $(document).ready(function() {});
// This Function Ensures functions within are called once all the DOM elements have finished rendering.
$(function () {

        // Appends data to the form ---------------------------------------------------------------
    function appendFormData(vehicleData) {
        $(makeField).val(vehicleData.make);
        $(modelField).val(vehicleData.model);
        $(yearField).val(vehicleData.year);
        $(seriesField).val(vehicleData.series);
        $(bodyField).val(vehicleData.body);
        $(transField).val(vehicleData.trans);
        $(driveField).val(vehicleData.drive);
        $(engineField).val(vehicleData.cylinders);
        $(fuelTypeField).val(vehicleData.fuel);
    }

    // Function Obtains Recall Data---------------------------------------------------------------
  function getRecallData(make, model, year) {

    $.ajax({
        url: "https://api.nhtsa.gov/recalls/recallsByVehicle?make=" + make + "&model=" + model + "&modelYear=" + year,
        type: "GET",
        dataType: "json",
        success: function (recallData) {

            console.log(recallData);

            for (var i = 0; i < recallData.results.length; i++) {

                console.log(recallData.results[i].ReportReceivedDate);
                console.log(recallData.results[i].Summary);
                console.log(recallData.results[i].Remedy);
                console.log(recallData.results[i].NHTSACampaignNumber);
            }
        
        },
        error: function (xhr, ajaxOptions, thrownError) {
          console.log(xhr.status);
          console.log(thrownError);
        },
      });
  }

  // Function Obtains Vehicle Information by Vin Number.-----------------------------------------------
  function getVinData() {
    $.ajax({
      url:
        "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/" +
        chosenVin +
        "?format=json",
      type: "GET",
      dataType: "json",
      success: function (vinData) {
        let vehicleSpecs = {
          make: vinData.Results[7].Value,
          model: vinData.Results[9].Value,
          year: vinData.Results[10].Value,
          series: vinData.Results[12].Value, // Ex. 1.4 TSI SE
          body: vinData.Results[23].Value, // Body class.
          trans: vinData.Results[49].Value, // Transmission: Manual or Auto
          drive: vinData.Results[51].Value, // Ex. FWD, 4WD, AWD.
          cylinders: vinData.Results[70].Value, // Cylinders in Engine
          fuel: vinData.Results[77].Value, // Fuel Type: Gas , Diesel
        };

        console.log(vehicleSpecs);
        appendFormData(vehicleSpecs);
        getRecallData(vehicleSpecs.make, vehicleSpecs.model, vehicleSpecs.year);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }

    // Submit Button: Gets Chosen Vin.-----------------------------------------------
  submitBtn.on('click', function(event) {
    event.preventDefault();
    chosenVin = $(vinChoiceEl).val().trim();
    console.log(chosenVin);

    getVinData(chosenVin);
  });


});
// End of Script