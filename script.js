var recallsAPI =
  "https://api.nhtsa.gov/recalls/recallsByVehicle?make=volkswagen&model=jetta&modelYear=2015";

var chosenVin = "3VWDB7AJ6HM326256";
var model = "Jetta";
var year = "2015";



// Shorthand for $(document).ready(function() {});
// This Function Ensures functions within are called once all the DOM elements have finished rendering.
$(function () {

    
    function getRecallData(make, model, year) {

    }

  // Function Obtains Vehicle Information by Vin Number.
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
        // appendFormData(vinData);
        getRecallData(vehicleSpecs.make, vehicleSpecs.model, vehicleSpecs.year);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(xhr.status);
        console.log(thrownError);
      },
    });
  }


  getVinData();
});

// function getApi() {
//     fetch(vinApi)
//     .then (function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);

//         console.log(info);
//         console.log(vehicleInfo);
//     });

// }

// getApi();
