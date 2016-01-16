function calculate() {
    var day_start=document.getElementById('datepicker1');
    var day_end=document.getElementById('datepicker2');
    var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
    document.getElementById("result").innerHTML=Math.round(total_days);

}
