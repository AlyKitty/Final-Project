function ShowHideDiv() {
  var customGender = document.getElementById("customGender");
  var customGenTxt = document.getElementById("customGenTxt");
  var referral = document.getElementById("referral");
  customGenTxt.style.display = customGender.checked ? "block" : "none";
  referral.style.display = customGender.checked ? "block" : "none";
  if (customGender.checked) {
    showEvents({ events: [{ gender: "" }] });
  }
}

function IsFemale() {
  ShowHideDiv();

  showEvents({ events: [{ gender: "Female" }] });
}

function IsMale() {
  ShowHideDiv();

  showEvents({ events: [{ gender: "Male" }] });
}

function IsOther() {
  ShowHideDiv();

  showEvents({ events: [{ gender: "Other" }] });
}

function IsCustom(ele) {
  if (event.key === "Enter") {
    ShowHideDiv();

    showEvents({ events: [{ gender: ele.value }] });
  }
}

function showEvents(data) {
  // Callback when JSON loads
  var newContent = ""; // Variable to hold HTML

  //BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
  for (var i = 0; i < data.events.length; i++) {
    // Loop through object
    newContent += '<div class="event">';
    newContent += "<p>" + data.events[i].gender + "</p>";
    newContent += "</div>";
  }

  // Update the page with the new content
  document.getElementById("content").innerHTML = newContent;
}