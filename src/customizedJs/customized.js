export default function changeStyleCalender() {
  if (document.querySelector(".calender-modal")) {
    return (document.querySelector(".calender-modal").style.bottom = "");
  } else {
    console.log("no customized");
  }
}
