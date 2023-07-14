//Containers Housing: Vin Input,
var vehicleFormEl = $("#vehicle-decode");

//Vin Number Input.
var vinChoiceEl = $("#vin-input");

// Make, Model, Year:  Dropdown.
var makeField = $("#make");
var modelField = $("#model");
var yearField = $("#year");

// Make, Model, Year:  TextInput.
var makeTxt = $("#maketxt");
var modelTxt = $("#modeltxt");
var yearTxt = $("#yeartxt");

//Vin Data: No user input.
var seriesField = $("#series");
var bodyField = $("#body");
var transField = $("#transmission");
var driveField = $("#drive-type");
var engineField = $("#engine");
var fuelTypeField = $("#fuel-type");

// Buttons: Decode, Maintenance, Recalls.
var decodeBtn = $("#decodeBtn");
var maintBtn = $("#maintBtn");
var recallBtn = $("#recallBtn");

var year = "";
var make = "";
var model = "";

// Shorthand for $(document).ready(function() {});
// This Function Ensures functions within are called once all the DOM elements have finished rendering.
$(function () {  

  function modelDropdown() {
    year = yearField.val();
    make = makeField.val();

    $.ajax({
      url: "https://api.nhtsa.gov/products/vehicle/models?modelYear=" + year + "&make=" + make + "&issueType=r",
      type: "GET",
      dataType: "json",
      success: function (modelData) {
        
        for (var i = 0; i < modelData.results.length; i++) {
          var options = document.createElement("option");
          $(options).addClass("modelDrop");
          options.innerHTML = modelData.results[i].model;
          $(modelField).append(options);
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }

  function makesDropdown() {
    year = yearField.val();

    $.ajax({
      url: "https://api.nhtsa.gov/products/vehicle/makes?modelYear=" + year + "&issueType=r",
      type: "GET",
      dataType: "json",
      success: function (makeData) {
        
        for (var i = 0; i < makeData.results.length; i++) {
          var options = document.createElement("option");
          $(options).addClass("makeDrop");
          options.innerHTML = makeData.results[i].make;
          $(makeField).append(options);
        }

        $(makeField).on("change", function(event) {
          event.stopPropagation();
          $(".modelDrop").remove();
          modelDropdown();
        });

      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }

  
  function yearDropdown() {
    $.ajax({
      url: "https://api.nhtsa.gov/products/vehicle/modelYears?issueType=r",
      type: "GET",
      dataType: "json",
      success: function (yearData) {
        
        for (var i = yearData.results.length - 1; i>= 0; i--) {
          var options = document.createElement("option");
          $(options).addClass("yearDrop");
          options.innerHTML = yearData.results[i].modelYear;
          $(yearField).append(options);
        }

        $(yearField).on("change", function(event) {
          event.stopPropagation();
          $(".modelDrop").remove();
          $(".makeDrop").remove();
          makesDropdown();
        });

      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }

  // DUMMY MAINTENANCE DATA. (Actual one commented out. Costs Credits. This will save us Credits until Launch).
  function dummyMaintenance() {
    // For rear function will need Year, Make, Model, Mileage
    var data = {
      0: { desc: "Change Engine Oil and Filter", due_mileage: "20000" },
      1: { desc: "Rotate Tires", due_mileage: "20000" },
      2: { desc: "Change Engine Oil and Filter", due_mileage: "30000" },
      3: { desc: "Change Brake Fluid", due_mileage: "30000" },
      4: { desc: "Change Engine Oil and Filter", due_mileage: "40000" },
      5: { desc: "Replace Engine Air Filter", due_mileage: "40000" },
      5: { desc: "Replace Cabin Air Filter", due_mileage: "40000" },
      5: { desc: "Replace Spark Plugs", due_mileage: "40000" },
    };

    console.log(data);
    console.log(data[0].desc);
    console.log(data[0].due_mileage);
  }

  // Function Obtains Recall Data---------------------------------------------------------------
  function getRecallData(make, model, year) {
    $.ajax({
      url:
        "https://api.nhtsa.gov/recalls/recallsByVehicle?make=" +
        make +
        "&model=" +
        model +
        "&modelYear=" +
        year,
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

  // Appends Vin data to the form ---------------------------------------------------------------
  function appendFormData(vehicleData) {
    $(yearTxt).val(vehicleData.year);
    $(makeTxt).val(vehicleData.make);
    $(modelTxt).val(vehicleData.model);
    $(seriesField).val("Series: " + vehicleData.series);
    $(bodyField).val("Body Style: " + vehicleData.body);
    $(transField).val("Transmission: " + vehicleData.trans);
    $(driveField).val("Drive Type: " + vehicleData.drive);
    $(engineField).val("Engine Cyl: " + vehicleData.cylinders);
    $(fuelTypeField).val("Fuel Type: " + vehicleData.fuel);
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

        appendFormData(vehicleSpecs);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }

  // Submit Button: Gets Chosen Vin.-----------------------------------------------
  decodeBtn.on("click", function (event) {
    event.preventDefault();
    chosenVin = $(vinChoiceEl).val().trim();
    $("#textbox").removeClass("hidden").addClass("visible");
    $("#text-data").removeClass("hidden").addClass("visible");
    $("#dropdown").removeClass("visible").addClass("hidden");
    $(yearField).val(null);
    $(makeField).val(null);
    $(modelField).val(null);
    getVinData(chosenVin);
  });

  recallBtn.on("click", function (event) {
    event.preventDefault();

    if (makeField.val() === null) {
      make = makeTxt.val().trim();
    } else {
      make = makeField.val();
    }

    if (modelField.val() === null) {
      model = modelTxt.val().trim();
    } else {
      model = modelField.val();
    }

    if (yearField.val() === null) {
      year = yearTxt.val().trim();
    } else {
      year = yearField.val();
    }

    getRecallData(make, model, year);
  });
  
  yearDropdown();

  dummyMaintenance();
});
// End of Script --------------------------------------------------------------------------------------------

// DO NOT ERASE!!!!

// Get Maintenance: Cost 5 creds a pop. Don't run until work finished. Run Dummy maintenance
// function getMaintenance() {
//   $.ajax({
//     url:
//       "http://api.carmd.com/v3.0/maint?year=" +
//       year +
//       "&make=" +
//       make +
//       "&model=" +
//       model +
//       "&mileage=" +
//       miles +
//       "&unit=" +
//       "mi",
//     headers: {
//       "content-type": "application/json",
//       authorization: "Basic MTMwMDZmOWItMzI4ZS00NGY2LTllNjUtZjU4M2IzNDU0ZjAy",
//       "partner-token": "f6b5f0bcc60046e9b4ac768200062f4c",
//     },
//     type: "GET",`
//     dataType: "json",
//     success: function (data) {
//       console.log(data);
//     },
//     error: function (xhr, ajaxOptions, thrownError) {
//       console.log(xhr.status);
//       console.log(thrownError);
//     },
//   });
// }

// Do not run this function until ready
// getMaintenance();
