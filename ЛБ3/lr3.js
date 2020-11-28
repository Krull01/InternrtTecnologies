(function show() {
    var table = document.getElementsByTagName("table")[0];
    var maxtemperature = +table.rows[1].cells[3].innerHTML;
    var mintemperature = +table.rows[1].cells[7].innerHTML;
    var maxindex = +1;
    var minindex = +1;
    for (var i = 2; i < table.rows.length; i++) {
        var nowmax = +table.rows[i].cells[3].innerHTML;
        var nowmin = +table.rows[i].cells[7].innerHTML;

        if (nowmax > maxtemperature) {
            maxtemperature = nowmax;
            maxindex = i;
        }
        if (nowmin < mintemperature) {
            mintemperature = nowmin;
            minindex = i;
        }
    };

    alert("Date " + table.rows[maxindex].cells[2].innerHTML + " max temperature = " + maxtemperature + " and date " + table.rows[minindex].cells[2].innerHTML + " min temperature = " + mintemperature);
})();