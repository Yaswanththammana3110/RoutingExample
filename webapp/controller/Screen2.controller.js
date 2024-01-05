sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("yasRoutingEx.controller.Screen2", {
		onInit: function(){
			var routerObj = this.getOwnerComponent().getRouter();
			routerObj.attachRouteMatched(this.handleParameters, this);
		},
		handlePrevious: function(){
			var routerObj = this.getOwnerComponent().getRouter();
			routerObj.navTo("screen1Route");
		},
		handleNext: function(){
			var routerObj = this.getOwnerComponent().getRouter();
			routerObj.navTo("screen3Route");
		},
		handleParameters: function(oEvent){
			var parameters = oEvent.getParameter("arguments");
			var jsonModel = new JSONModel();
			jsonModel.setData(parameters);
			this.getView().setModel(jsonModel, "paraModel");
			console.log(parameters);
		}

	});
});