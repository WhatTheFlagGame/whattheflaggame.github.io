function clearCache(){
  if (sessionStorage.getItem("selectedButton")) {
console.log("selctedButton: ", sessionStorage.getItem("selectedButton"));
sessionStorage.removeItem("selectedButton");
}

}