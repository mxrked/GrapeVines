const HideReds = () => {
  var winesI;

  const redWines = document.getElementsByClassName("red-wine");

  for (winesI = 0; winesI < redWines.length; winesI++) {
    redWines[winesI].style.display = "none";
  }
};

export default HideReds;
