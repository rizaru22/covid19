$(function(){
    $.ajax({
        url : "https://api.kawalcorona.com/indonesia/provinsi/",
        dataType:"JSON",
        success : function(data){
            //console.log(data);
            var tb,no=1;
        for(var i=0;i<data.length;i++){
            tb +="<tr><td>"+ no +"</td><td>"+ data[i].attributes.Provinsi+"</td><td>"+ data[i].attributes.Kasus_Posi +"</td><td>"+ data[i].attributes.Kasus_Semb +"</td><td>"+ data[i].attributes.Kasus_Meni +"</td></tr>";
        if(data[i].attributes.Provinsi=="Aceh"){
            document.getElementById('p').innerHTML="Positif :" + data[i].attributes.Kasus_Posi;
            document.getElementById('m').innerHTML="Meninggal :" + data[i].attributes.Kasus_Meni;
            document.getElementById('s').innerHTML="Sembuh :" + data[i].attributes.Kasus_Semb;
            //console.log(data[i].attributes.Kasus_Posi);
        }   
        no++;
    }
    $("tbody").append(tb);
     },
        error :function(jqXHR, textStatus, errorThrown){
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
     });	
     
  
});
