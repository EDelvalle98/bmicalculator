document.getElementById("mySubmit").onclick = function(){
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let heightFeet = parseInt(document.getElementById("heightFeet").value);
    let heightInches = parseInt(document.getElementById("heightInches").value);
    let weight = parseInt(document.getElementById("weight").value);

let totalInches = heightFeet * 12 + heightInches;

let bmi = (weight * 703) / (totalInches * totalInches);
document.getElementById("result").innerHTML = "Your BMI is: " + bmi.toFixed(2);

}

document.getElementById("myClear").onclick = function() {
    document.getElementById("age").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("heightFeet").value = "";
    document.getElementById("heightInches").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}