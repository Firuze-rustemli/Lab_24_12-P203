$(document).ready(function () {

        $("select[name=marka]").change(function () {
            var markaId = $(this).val();
            var modelUrl = "http://localhost:51569/home/getJson/" + markaId;
            //console.log(modelUrl);
            $("select[name=madel]").empty();
            $.ajax({
                url: modelUrl,
                type: 'get',
                //dataType: 'html',
                dataType:"JSON",
                success: function (response) {
                    //console.log("data" + response);
                    //$("select[name=madel]").append(response);
                    
                    for (var i = 0; i < response.length; i++) {
                        $("select[name=madel]").append("<option value='" + response[i].id + "'>" + response[i].name + "</option>");
                    }
                }
            });
        });


    $("select[name=cities]").change(function () {
        var city = $(this).val();
        var prayUrl = "http://api.aladhan.com/timingsByCity?city=" + city + "&country=AZ";
        //console.log(prayUrl);
        $.ajax({
            url: prayUrl,
            type: 'get',
            dataType: 'JSON',
            success: function (response) {
                //console.log(response.data.timings.Asr);
                $(".timing td").eq(0).text(response.data.timings.Fajr);
                $(".timing td").eq(1).text(response.data.timings.Dhuhr);
                $(".timing td").eq(2).text(response.data.timings.Asr);
                $(".timing td").eq(3).text(response.data.timings.Maghrib);
                $(".timing td").eq(4).text(response.data.timings.Isha);
            }

        });
    }); 

  
});