AFRAME.registerComponent("markerhandler", {
  init: async function() {
    this.el.addEventListener("markerFound", () => {
      console.log("marker is found");
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      console.log("marker is lost");
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function() {
    // Change visibility of button div
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButtton = document.getElementById("order-button");
    var orderSummaryButtton = document.getElementById("order-summary-button");

    // Handle Click Events
    orderButtton.addEventListener("click", ()=> {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Thanks for Ordering!",
        text: "  ",
        timer: 2000,
        buttons: false
      });
    });

    orderSummaryButtton.addEventListener("click", ()=> {
      swal({
        icon: "Warning!!",
        title: "Order Summary",
        text: "Work is in Progress..."
      });
    });
  },

  handleMarkerLost: function() {
    // Change button div visibility
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  }
});
