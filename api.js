/**
 * Created by aroja on 11/04/2016.
 */


var socket = io();
//<!-- <>   Client  JavaScript API<>  -->
function sendPic() {

    //<!-- <>   socket.emit  calling index.js(socket.on('tomar-foto', function (data) {..... <>  -->
    socket.emit('tomar-foto', "toma-foto-cliente");


    setTimeout(function(){

            // <!-- <>   socket.emit  calling index.js(socket.on('send-foto', function (data) {)..... <>  -->
            socket.emit('send-foto', "cliente-solicita-foto");

            /* <!-- <>   socket.on response
             * @data : base64 from index.ljs
             *  var imageB64 = bufx.toString('base64');
             *  socket.emit('camara', imageB64);
             .... <>  -->
             */
            socket.on('camara', function (data) {


                var image = new Image();
                image.src = 'data:image/png;base64,' +data  ;
                //image.class.add("responsive-img");
                $("#div_image").html( image );
                $("#div_image").addClass("")
                SaveToDisk(image);
            });
            sendPic();

        },
        // <!-- <>   Camera Main Problem Wait for calling ..... <>  -->
        3000);
}
