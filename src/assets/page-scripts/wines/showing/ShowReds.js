const ShowReds = () => {
  var winesI;

  const redWines = document.getElementsByClassName("red-wine");

  for (winesI = 0; winesI < redWines.length; winesI++) {
    redWines[winesI].style.display = "grid";
  }
};

export default ShowReds;
