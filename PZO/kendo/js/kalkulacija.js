function calculate() {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        //var firstDate = new Date(2008,01,12);
        //var secondDate = new Date(2008,01,22);
        var firstDate = new Date( $('#datepicker1').val());
        var secondDate = new Date( $('#datepicker2').val());
        var diffDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)));
        //var retro = $("#switch").val();
        
        //if(retro.value == "DA"){
         //   var diffDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)+3));
        //}
       // else if(retro.value == "NE"){
		//     var diffDays = Math.round(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)));
       // }   
        //var sw = $('#switch').val();
        //result.value = diffDays;
        result.value = diffDays;
        
    
        //result.value = sw;
        //alert($("#switch").val()); 

    
	}