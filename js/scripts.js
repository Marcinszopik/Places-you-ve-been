// Business Logic for AddressBook ---------
function VisittedPlaces() {
    this.places = [],
    this.currentId = 0
  }

VisittedPlaces.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places.push(place);
  }


VisittedPlaces.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

VisittedPlaces.prototype.findPlace = function(id) {
    for (var i=0; i< this.places.length; i++) {
      if (this.places[i]) {
        if (this.places[i].id == id) {
          return this.places[i];
        }
      }
    };
    return false;
  }

  VisittedPlaces.prototype.deletePlace = function(id) {
    for (var i=0; i< this.places.length; i++) {
      if (this.places[i]) {
        if (this.places[i].id == id) {
          delete this.places[i];
          return true;
        }
      }
    };
    return false;
  }

// Business Logic for Contacts ---------
function Place(location, landmark, year, note) {
    this.location = location,
    this.landmar = landmark,
    this.year = year
    this.note = note
  }
  
  Place.prototype.locationYear= function() {
    return this.location + " " + this.year;
  }


// User Interface Logic ---------








var visitPlace= new VisittedPlaces();

function displayPlaceDetails(visitPlaceToDisplay) {
    var placesList = $("ul#places");
    var htmlForPlaceInfo = "";
    visitPlaceToDisplay.places.forEach(function(place) {
      htmlForPlaceInfo += "<li id=" + place.id + ">" + place.location + " " + place.year + "</li>";
    });
    placesList.html(htmlForPlaceInfo);
  };

$(document).ready(function () {
    $("form.places").submit(function (event) {
        event.preventDefault();

        let input1 = $("#location").val();
        let input2 = $("#landmark").val();
        let input3 = $("#time").val();
        let input4 = $("#note").val();

        var newPlace = new Place(input1, input2, input3, input4);
       visitPlace.addPlace(newPlace);
        //console.log(visitPlace.places);
        displayPlaceDetails(visitPlace);




       


        

    });
});


































