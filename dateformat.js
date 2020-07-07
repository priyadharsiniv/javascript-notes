function get_date_format(date)
    {
        var format ="am";

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var yesterday_dd = String(today.getDate()-1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + '-' + mm + '-' + dd;
        yesterday = yyyy + '-' + mm + '-' + yesterday_dd;
        console.log(yesterday);

        var d = new Date(date);
        var dd = String(d.getDate()).padStart(2, '0');
        var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = d.getFullYear();
        newDate = yyyy + '-' + mm + '-' + dd;
        console.log("new ",newDate);

        var hour=d.getHours();
        var min=d.getMinutes();
        if(hour>11){format="pm";}
        if (hour   > 12) { hour = hour - 12; }
        if (hour   == 0) { hour = 12; }  
        if (min < 10){min = "0" + min;}
        var time = hour+":"+min+""+format;

        if(newDate==today)
            var request_date = "Today, "+time;
        else if(newDate==yesterday)
            var request_date = "Yesterday, "+time;
        else
            var request_date = newDate+", "+time;

        return request_date;
    }
