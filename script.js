function calculate() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    let total = s1 + s2 + s3 + s4 + s5;
    let avg = total / 5;

    let grade;

    if (avg >= 90) {
        grade = "A";
    } else if (avg >= 75) {
        grade = "B";
    } else if (avg >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total: " + total + " | Average: " + avg + " | Grade: " + grade;

}