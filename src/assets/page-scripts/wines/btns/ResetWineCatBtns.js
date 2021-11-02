const ResetWineCatBtns = () => {
  var wineCatI;
  const allWineCategoryBtns =
    document.getElementsByClassName("wines-category-btn");
  for (wineCatI = 0; wineCatI < allWineCategoryBtns.length; wineCatI++) {
    allWineCategoryBtns[wineCatI].classList.remove("disable-btn");
  }
};

export default ResetWineCatBtns;
