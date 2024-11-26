if (
  localStorage.getItem("Amount") == undefined ||
  localStorage.getItem("Amount") == null
) {
  localStorage.setItem("Amount", 400.0);
}
let totalLoad = parseInt(localStorage.getItem("Amount"));

document.getElementById("total1").innerHTML = localStorage.getItem("Amount");

function sendLoad() {
  if (
    document.getElementById("loadamount").value != null &&
    document.getElementById("loadamount").value != undefined &&
    document.getElementById("loadamount").value != 0 &&
    document.getElementById("monum").value != null &&
    document.getElementById("monum").value != undefined &&
    document.getElementById("monum").value != 0
  ) {
    let x = document.getElementById("loadamount").value;
    let res = totalLoad - x;
    if (res >= 0) {
      let successtxt =
        x + " amount of load sent to " + document.getElementById("monum").value;
      localStorage.setItem("Amount", res);
      document.getElementById("result").innerHTML = successtxt;
      document.getElementById("total1").innerHTML =
        localStorage.getItem("Amount");
    } else {
      document.getElementById("result").innerHTML = "Insufficient Balance";
    }
  } else {
    document.getElementById("result").innerHTML =
      "Cannot leave field blank or 0";
  }
}

function getLoad() {
  if (
    document.getElementById("loadamount2").value != null &&
    document.getElementById("loadamount2").value != undefined &&
    document.getElementById("loadamount2").value != 0
  ) {
    let x = parseInt(document.getElementById("loadamount2").value);
    let res = totalLoad + x;
    let successtxt2 = x + " amount of loaded to your account";
    localStorage.setItem("Amount", res);
    document.getElementById("total1").innerHTML =
      localStorage.getItem("Amount");
    document.getElementById("result2").innerHTML = successtxt2;
  } else {
    document.getElementById("result2").innerHTML =
      "Cannot leave field blank or 0";
  }
}
