alert("Welcome to my Web ! ");

function fungsi_saya(){
    myOtherFunction();
}
function myOtherFunction(){
    console.trace();
}
function select() 
    {
       var objPilihan = document.getElementById("menu");
       var objInfo = document.getElementById("keterangan");

       var str = "Deskripsi Tempat Makan\n";

       for (var i = 0 ; i < objPilihan.options.length ; i++)
           if (objPilihan.options[i].selected)
             str = str + objPilihan.options[i].value + "\n";

       objInfo.value = str;
    }