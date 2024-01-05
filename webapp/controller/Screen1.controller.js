sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("yasRoutingEx.controller.Screen1", {
		handleNext: function(){
			// alert("Hii");
			var routerObj = this.getOwnerComponent().getRouter();
			routerObj.navTo("screen2Route", {sampleText: "This is data from screen1"});
		}

	});
});