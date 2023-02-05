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
            { name: 'Adaptability', value: model.adaptability },
            { name: 'Affection level', value: model.affection_level },
            { name: 'Child friendly', value: model.child_friendly },
            { name: 'Grooming', value: model.grooming },
            { name: 'Health issues', value: model.health_issues },
            { name: 'Intelligence', value: model.intelligence },
            { name: 'Social needs', value: model.social_needs },
            { name: 'Stranger friendly', value: model.stranger_friendly }
        ];
        result.metrics = metricsArray;
        return result;
    };
    return CatViewModel;
}());
exports.CatViewModel = CatViewModel;
