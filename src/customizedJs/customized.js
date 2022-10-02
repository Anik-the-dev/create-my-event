export default function a() {
  if (document.querySelector(".calender-modal")) {
    console.log("customized");
    return (document.querySelector(".calender-modal").style.bottom = "");
  } else {
    console.log("no customized");
  }
}
