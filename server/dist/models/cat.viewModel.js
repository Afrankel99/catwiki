"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatViewModel = void 0;
var catMetrics_viewModel_1 = require("./catMetrics.viewModel");
var CatViewModel = /** @class */ (function () {
    function CatViewModel() {
    }
    CatViewModel.fromModel = function (model) {
        var result = new CatViewModel;
        result.name = model.name;
        result.id = model.id;
        result.description = model.description;
        var metrics = new catMetrics_viewModel_1.CatMetrics;
        metrics.adaptability = model.adaptability;
        metrics.affectionLevel = model.affection_level;
        metrics.childFriendly = model.child_friendly;
        metrics.grooming = model.grooming;
        metrics.healthIssues = model.health_issues;
        metrics.intelligence = model.intelligence;
        metrics.socialNeeds = model.social_needs;
        metrics.strangerFriendly = model.stranger_friendly;
        result.metrics = metrics;
        return result;
    };
    return CatViewModel;
}());
exports.CatViewModel = CatViewModel;
