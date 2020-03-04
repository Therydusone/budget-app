
// BUDDGET CONTROLLER
var budgetController = (function() {

    // something

})();


// UI CONTROLLER
var UIController = (function() {

        //something
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UiCtrl) {

    var ctrlAddItem = function() {
         // 1. Get data from input

        // 2. Add item to budget controller

        // 3. Add item to the UI

        // 4. Calculate budget

        // 5. Display the budget
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
