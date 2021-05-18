

document.querySelectorAll('.share-icon').forEach(item => {
  item.addEventListener('click', function() {
    //handle click
    var hiddenText = document.getElementById("hidden-text");
    hiddenText.classList.toggle("hidden-div");

    var hiddenProfile = document.getElementById("hidden-profile");
    hiddenProfile.classList.toggle("hidden-profile");

    var hiddenIcon = document.getElementById("hidden-icon");

    if (hiddenIcon.classList.contains("show-icon")) {
      hiddenIcon.classList.remove("show-icon");
    } else{
      hiddenIcon.classList.add("show-icon");
    }

  })
});
