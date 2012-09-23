(function() {
  Bacon.UI = {}
  Bacon.UI.textFieldValue = function(textfield) {
    function getValue() { return textfield.val() }
    return $(textfield).asEventStream("keyup").map(getValue).toProperty(getValue())
  }
  Bacon.UI.click = function(element) {
    return element.asEventStream("click")
  }
})();