document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll("input"),
    passwordInput = document.getElementById("password"),
    indicator = document.getElementById("password-strength-indicator");

  function updateIndicator() {
    var strength = zxcvbn(this.value);

    if (
      this.value.length > 0 &&
      (!containsNumber(this.value) ||
        !containsCapitalLetter(this.value) ||
        !containsSmallLetter(this.value) ||
        !hasSufficientLength(this.value))
    ) {
      strength = { score: 1 };
    }

    indicator.dataset.strength = strength.score;
  }

  function containsNumber(value) {
    let pattern = /[1-4]/g;
    let result = value.match(pattern);
    return result != null;
  }

  function containsCapitalLetter(value) {
    let pattern = /[A-Z]/g;
    let result = value.match(pattern);
    return result != null;
  }

  function containsSmallLetter(value) {
    let pattern = /[a-z]/g;
    let result = value.match(pattern);
    return result != null;
  }

  function hasSufficientLength(value) {
    return value.length > 7;
  }

  passwordInput.addEventListener("input", updateIndicator);
});
