//	Toggle error
function displayErr () {
     if ($("#error").css("display") == "none"){
          $("#error").slideToggle();
     }
}

function displayMessage () {
     if ($("#message").css("display") == "none"){
          $("#message").slideToggle();
     }
}

function hideErrMessage () {
     if ($("#error").css("display") != "none"){
          $("#error").slideToggle();
     }
	 if ($("#message").css("display") != "none"){
          $("#message").slideToggle();
     }
}

//   Turn elements display/visiblity on/off.  (Credit Professor Leinecker)
function show( elementId, showState )
{
	var vis = "visible";
	var dis = "flex";
	if( !showState )
	{
		vis = "hidden";
		dis = "none";
	}

	document.getElementById( elementId ).style.visibility = vis;
	document.getElementById( elementId ).style.display = dis;
}

//   Clear text from previously used text fields.
function clearText(elementId)
{
     document.getElementById(elementId).value = '';
}

/*function loadFiles () {
     hideErrMessage();
     $.get("https://group9-tankgame.herokuapp.com/allfiles", function (res, status) {
          console.log(res);
          var fileselect = document.getElementById("openfile");
          var len = fileselect.length;
          for(var i = 0; i < len; i++){
               fileselect.remove(0);
          }
          for(var i = 0; i < res.length; i++){
               var option = document.createElement("option");
               option.text = res[i];
               fileselect.add(option);
          }
    })
    .fail(function () {
            document.getElementById("error").innerHTML = "Error: Files not Received.";
          displayErr();
     });
}

function openFile(){
     var url_open = "https://group9-tankgame.herokuapp.com/open";
     let fileselect = {
      fileName: document.getElementById("openfile").value
     }
     $.post(url_open, fileselect, function(res, status){
          document.getElementById("filename").value = fileselect.fileName;
          document.getElementById("editor").value = res;
     }).fail(function () {
          document.getElementById("error").innerHTML = "Error: File not Opened.";
          displayErr();
     });
}*/