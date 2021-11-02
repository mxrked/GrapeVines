const HideSparkling = () => {
  var winesI;

  const sparklingWines = document.getElementsByClassName("sparkling-wine");

  for (winesI = 0; winesI < sparklingWines.length; winesI++) {
    sparklingWines[winesI].style.display = "none";
  }
};

export default HideSparkling;
