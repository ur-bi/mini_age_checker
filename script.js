    const totalYear = document.getElementById("age");
    const d1 = document.getElementById("date").value;
    const m1 = document.getElementById("month").value;
    const y1 = document.getElementById("year").value;

function calculate(){
    
    const totalYear = document.getElementById("age");
    const d1 = document.getElementById("date").value;
    const m1 = document.getElementById("month").value;
    const y1 = document.getElementById("year").value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

    if(d1 > d2){
        d2 = d2 + month[m2-1];
        m2 = m2-1;
    }
    if(m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    totalYear.textContent = `Your age is ${y} Years ${m} Month ${d} Days`;

}