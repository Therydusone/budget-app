
// BUDDGET CONTROLLER
var budgetController = (function() {

    // something

})();


// UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

        return {
            getInput: function() {
                return {
                     type: document.querySelector(DOMstrings.inputType).value,
                     description: document.querySelector(DOMstrings.inputDescription).value,
                     value: document.querySelector(DOMstrings.inputValue).value
                }    
            },

            getDOMStrings: function() {
                return DOMstrings
            }
        }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UiCtrl) {
    var DOM = UiCtrl.getDOMStrings();

    var ctrlAddItem = function() {
         // 1. Get data from input
            var input = UiCtrl.getInput();
            console.log(input)
        // 2. Add item to budget controller

        // 3. Add item to the UI

        // 4. Calculate budget

        // 5. Display the budget
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
