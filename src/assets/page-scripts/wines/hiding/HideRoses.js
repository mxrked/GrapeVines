const HideRoses = () => {
  var winesI;

  const roseWines = document.getElementsByClassName("rose-wine");

  for (winesI = 0; winesI < roseWines.length; winesI++) {
    roseWines[winesI].style.display = "none";
  }
};

export default HideRoses;
