const HideWhites = () => {
  var winesI;

  const whiteWines = document.getElementsByClassName("white-wine");

  for (winesI = 0; winesI < whiteWines.length; winesI++) {
    whiteWines[winesI].style.display = "none";
  }
};

export default HideWhites;
