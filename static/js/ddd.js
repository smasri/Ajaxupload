$(function() {
    $('#submit').click(function() {
        event.preventDefault();
        //var form_data = new FormData($('#uploadform')[0]);
        var form_data= new FormData();
        var fileInput = document.getElementById('filex');
            //Iterating through each files selected in fileInput
            for (i = 0; i < fileInput.files.length; i++) {
                //Appending each file to FormData object
                form_data.append(fileInput.files[i].name, fileInput.files[i]);
            }
        form_data.append("Jobtype","Contract");
        form_data.append("Mainid","5");
        $.ajax({
            type: 'POST',
            url: '/uploadajax',
            data: form_data,
            contentType: false,
            processData: false,
            dataType: 'json'
        }).done(function(data, textStatus, jqXHR){
            console.log(data);
            console.log(textStatus);
            console.log(jqXHR);
            console.log('Success!');
            $("#resultFilename").text(data['name']);
            $("#resultFilesize").text(data['size']);
        }).fail(function(data){
            alert('error!');
        });
    });
}); 