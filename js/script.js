var intervalID = window.setInterval(drawStuff, 1);
var X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
var Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
var width = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var height = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
var MouseX;
var MouseY;
    //Gets Mouse Positions
	function getPositions(ev) {
		if (ev == null) { ev = window.event }
   			MouseX = ev.offsetX;
   			MouseY = ev.offsetY;
		};
    
    var canvas = document.getElementById("canvas")
    var cx = canvas.getContext("2d");

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
        
            drawStuff();
		}
        
    resizeCanvas();

    function drawStuff() {
    

    	var squareloop = document.getElementById('squareloop');
    
    	if (squareloop.checked) {
    
    		for (i = 0; i < 51; i++) {
                   
            	X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            	Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
            	width = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
            	height = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
 				cx.strokeStyle = randomColor();
  				cx.strokeRect(X, Y, width, height);
            
            	};
           
			};
        
        var circleloop = document.getElementById('circleloop');
        
        if (circleloop.checked) {
        
        	for (i = 0; i < 51; i++) {
            
            	X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            	Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
            	radius = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                
                cx.beginPath();
                cx.strokeStyle = randomColor();
				cx.arc(X, Y, radius, 0, Math.PI*2, true); 
                cx.stroke();
            
            	};
                
         };
         
         var imageloop = document.getElementById('imageloop');
         
         if (imageloop.checked) {
         	
            var img = new Image();
         	var f = document.getElementById('input').files[0];
         	var url = window.URL || window.webkitURL;
    	 	var src = url.createObjectURL(f);
         	img.src = src;
            
            img.onload = function () {
 
            	for (i = 0; i < 51; i++) {
                

            		X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            		Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
            		width = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                	height = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
                
                	cx.drawImage(img,X,Y,width,height);
            
            		};
                
                };
              
          };
           
           var followmouseloop = document.getElementById('followmouse');
           
           if (followmouseloop.checked) {
           
           		for (i = 0; i < 51; i++) {
                

            		X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            		Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
                
               	 	cx.beginPath();
                	cx.strokeStyle = randomColor();
					cx.moveTo(MouseX,MouseY);
					cx.lineTo(X,Y);
                	cx.stroke();
            
            		};
                
                };
                
           var lineloop = document.getElementById('lineloop');
           
           if (lineloop.checked) {
           
           		for (i = 0; i < 51; i++) {
                

            		X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            		Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
            		
                
                	cx.beginPath();
                	cx.strokeStyle = randomColor();
					cx.moveTo(X,Y);
                    
                    X = Math.floor(Math.random() * (2000 - 0 + 1)) + 0;
            		Y = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;
                    
					cx.lineTo(X,Y);
                	cx.stroke();
            
            	};
                
           };  
    };