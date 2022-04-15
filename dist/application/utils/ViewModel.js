"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ViewModelAction;
(function (ViewModelAction) {
    ViewModelAction[ViewModelAction["assign"] = 1] = "assign";
    ViewModelAction[ViewModelAction["rename"] = 2] = "rename";
    ViewModelAction[ViewModelAction["remove"] = 3] = "remove";
})(ViewModelAction || (ViewModelAction = {}));
class ViewModelBuilder {
    constructor() {
        this.rules = [];
    }
    remove(key) {
        this.rules.push({
            action: ViewModelAction.remove,
            keyOne: key,
        });
        return this;
    }
    rename(keyOne, keyTwo) {
        this.rules.push({
            keyOne,
            keyTwo,
            action: ViewModelAction.rename,
        });
        return this;
    }
    assign(key, fn) {
        this.rules.push({
            fn,
            action: ViewModelAction.assign,
            keyOne: key,
        });
        return this;
    }
    build() {
        return new ViewModel(this.rules);
    }
}
exports.ViewModelBuilder = ViewModelBuilder;
class ViewModel {
    constructor(rules) {
        this.rules = rules;
    }
    transform(model) {
        let viewModel = model;
        for (const rule of this.rules) {
            switch (rule.action) {
                case ViewModelAction.remove:
                    viewModel = this.remove(viewModel, rule);
                    break;
                case ViewModelAction.rename:
                    viewModel = this.rename(viewModel, rule);
                    break;
                case ViewModelAction.assign:
                    viewModel = this.assign(viewModel, rule);
                    break;
            }
        }
        return viewModel;
    }
    assign(model, rule) {
        model[rule.keyOne] = rule.fn ? rule.fn(model) : model[rule.keyOne];
        return model;
    }
    remove(model, rule) {
        delete model[rule.keyOne];
        return model;
    }
    rename(model, rule) {
        model[rule.keyTwo] = model[rule.keyOne];
        delete model[rule.keyOne];
        return model;
    }
    transformAll(models) {
        const viewModels = [];
        for (const model of models) {
            viewModels.push(this.transform(model));
        }
        return viewModels;
    }
}
exports.ViewModel = ViewModel;
//# sourceMappingURL=ViewModel.js.map