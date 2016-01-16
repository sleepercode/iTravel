function calculate() {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        //var firstDate = new Date(2008,01,12);
        //var secondDate = new Date(2008,01,22);
        var firstDate = new Date( $('#datepicker1').val());
        var secondDate = new Date( $('#datepicker2').val());
        var diffDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)));
        result.value = diffDays;
        //result.value = secondDate;
    
	}