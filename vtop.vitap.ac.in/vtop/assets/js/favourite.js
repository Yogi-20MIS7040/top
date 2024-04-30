function addToFavourite() {
  ajaxDynamicTargetCall("/vtop/add/to/favourite", params, "quickLinks");
}
function deleteFavourite() {
  var linkid = this.dataset.linkid;
  var dataToSend = params + "&linkid=" + linkid;
  ajaxDynamicTargetCall(
    "/vtop/delete/from/favourite",
    dataToSend,
    "quickLinks"
  );
}

function executeQuickMenu() {
  var authorizedID = $("#authorizedIDX").val();
  var dataText =
    "verifyMenu=true&authorizedID=" +
    authorizedID +
    "&" +
    csrfName +
    "=" +
    csrfValue +
    "&nocache=@(new Date().getTime())";
  let url = this.dataset.url;
  ajaxCall(url, dataText);
}

function executeB5QuickMenu() {
  var authorizedID = $("#authorizedIDX").val();
  var dataText =
    "verifyMenu=true&authorizedID=" +
    authorizedID +
    "&" +
    csrfName +
    "=" +
    csrfValue +
    "&nocache=@(new Date().getTime())";
  let url = this.dataset.url;
  ajaxB5Call(url, dataText);
}

var deleteQLBtn = document.getElementsByClassName("deleteQuickLinkBtn");
for (let i = 0; i < deleteQLBtn.length; i++) {
  deleteQLBtn[i].addEventListener("click", deleteFavourite, false);
}

var favouriteBtn = document.getElementById("favouriteBtn");
favouriteBtn.addEventListener("click", addToFavourite);

var actionButton = document.getElementsByClassName("quickMainMenu");
for (let i = 0; i < actionButton.length; i++) {
  actionButton[i].addEventListener("click", executeQuickMenu, false);
}

var actionButton2 = document.getElementsByClassName("quickB5MainMenu");
for (let i = 0; i < actionButton2.length; i++) {
  actionButton2[i].addEventListener("click", executeB5QuickMenu, false);
}
