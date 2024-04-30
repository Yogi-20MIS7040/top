function printCoreDocument(evt) {
  var htmlConfigs = document.getElementById("configHead").innerHTML;
  // var cssDocs = document.getElementById('cssLinks').innerHTML
  // var userid = evt.currentTarget.userid;
  // var userrole = evt.currentTarget.userrole;

  var divElements = document.getElementById("core-container").innerHTML;
  var printWindow = window.open("", "_blank", "");
  printWindow.document.open();
  printWindow.document.write(
    '<html style="overflow:scroll;"><head><title> VTOP </title> ' +
      htmlConfigs +
      "</head><body>"
  );
  //printWindow.document.write(getPrintButton());
  printWindow.document.write("");
  printWindow.document.write(divElements);
  //printWindow.document.write(attachListener());
  printWindow.document.write(removeScrollBar());
  printWindow.document.write("</body></html>");

  printWindow.document.close();
  printWindow.focus();

  //The Timeout is ONLY to make Safari work, but it still works with FF, IE & Chrome.
  // setTimeout(function () {
  // 	printWindow.print();
  // 	printWindow.close();
  // }, 100);
}

var anchorLinkBtn = document.getElementById("printVTOPCoreDocument");
anchorLinkBtn.addEventListener("click", printCoreDocument);
//anchorLinkBtn.userid =/*[[${session.user.getUserDetails().getUserId()}]]*/'';
//anchorLinkBtn.userrole =/*[[${session.user.loginRole}]]*/'';

function getButtonBar() {
  var btnBarElem = document.getElementById("sidePanel");
  if (btnBarElem.classList.contains("d-none")) {
    btnBarElem.classList.remove("d-none");
  } else {
    btnBarElem.classList.add("d-none");
  }
}

function getPrintButton() {
  return (
    "<div class='container-fluid'>" +
    "<div class='row'>" +
    "<div class='col-12 text-right'>" +
    "  <a class='btn btn-lg btn-primary' href='javascript:void(0);' id='printPreviewDoc'>" +
    "<i class='bi bi-printer text-light ps-sm-3 h2' aria-hidden='true'></i> PRINT </a>" +
    "</div>"
  );
}

function attachListener() {
  return (
    "<script>var anchorLinkBtn=document.getElementById('printPreviewDoc'); " +
    "anchorLinkBtn.addEventListener('click',printDoc); " +
    "</script>"
  );
}

function printDocScript() {
  return (
    "<script> function printDoc() { " +
    " document.body.style.overflow = 'hidden'; " +
    " document.getElementById('b3wrapper').classList.remove('overflow-auto');" +
    " document.getElementById('b3wrapper').classList.add('overflow-hidden');" +
    // " document.getElementById('b5wrapper').classList.remove('overflow-auto');" +
    // " document.getElementById('b5wrapper').classList.add('overflow-hidden');" +
    " document.getElementById('printPreviewDoc').style.display = 'none'; " +
    " setTimeout(function () {" +
    " window.print();" +
    " window.close();" +
    " }, 100); " +
    "}</script> "
  );
}

function removeScrollBar() {
  return (
    "<script> " +
    //" document.body.style.overflow = 'scroll' " +
    " document.getElementById('b3wrapper').classList.remove('overflow-auto');" +
    " document.getElementById('b3wrapper').classList.remove('vh-100');" +
    " document.getElementById('b3wrapper').classList.remove('noshow');" +
    " document.getElementById('b3wrapper').classList.remove('showBlock');" +
    " </script>"
  );
}
