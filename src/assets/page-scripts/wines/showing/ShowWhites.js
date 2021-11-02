const ShowWhites = () => {
  var winesI;

  const whiteWines = document.getElementsByClassName("white-wine");

  for (winesI = 0; winesI < whiteWines.length; winesI++) {
    whiteWines[winesI].style.display = "grid";
  }
};

export default ShowWhites;
