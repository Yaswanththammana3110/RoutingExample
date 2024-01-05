sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("yasRoutingEx.controller.Screen3", {
		handleHome: function(){
			this.getOwnerComponent().getRouter().navTo("screen1Route");
		},
		handlePrevious: function(){
			this.getOwnerComponent().getRouter().navTo("screen2Route");
		}

	});
});