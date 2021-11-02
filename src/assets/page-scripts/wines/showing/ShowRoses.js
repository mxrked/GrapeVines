const ShowRoses = () => {
  var winesI;

  const roseWines = document.getElementsByClassName("rose-wine");

  for (winesI = 0; winesI < roseWines.length; winesI++) {
    roseWines[winesI].style.display = "grid";
  }
};

export default ShowRoses;
