"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatViewModel = void 0;
var CatViewModel = /** @class */ (function () {
    function CatViewModel() {
    }
    CatViewModel.fromModel = function (model) {
        var result = new CatViewModel;
        result.name = model.name;
        result.id = model.id;
        result.description = model.description;
        var metricsArray = [
            { argument: 'Adaptability', value: model.adaptability },
            { argument: 'Affection level', value: model.affection_level },
            { argument: 'Child friendly', value: model.child_friendly },
            { argument: 'Grooming', value: model.grooming },
            { argument: 'Health issues', value: model.health_issues },
            { argument: 'Intelligence', value: model.intelligence },
            { argument: 'Social needs', value: model.social_needs },
            { argument: 'Stranger friendly', value: model.stranger_friendly }
        ];
        result.metrics = metricsArray;
        return result;
    };
    return CatViewModel;
}());
exports.CatViewModel = CatViewModel;
