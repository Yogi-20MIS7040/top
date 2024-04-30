$("div[class='btn-group dropend']").hover(
  function () {
    if (!isTouchScreendevice()) {
      $(this).find(".SideBarMenuBtn").trigger("click");
    }
  },
  function (event) {}
);

function isTouchScreendevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints ||
    navigator.msMaxTouchPoints > 0
  );
}

//$(this).find(".dropdown-menu.show").removeClass('show');
//$(this).find(".dropdown-menu").addClass('show');
//var x = event.currentTarget;
//$(this).find(".dropdown-menu,dropdownMenuBoxWidth, SideBarMenuDropDown").removeClass('show');
//$(this).find(".SideBarMenuBtn").removeClass('show');
