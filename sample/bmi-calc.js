/*hight（身長）*weight(体重)からbmiを算出する*/
function calcBmi() {
    var height = document.getElementById("height").value
    var weight = document.getElementById("weight").value
    var bmi = weight / Math.pow(height / 100, 2)
    document.getElementById("bmi").value = bmi
}
