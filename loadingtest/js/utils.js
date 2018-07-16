function beginLoading(content){
	var mask = '<div id="mask" style="position:fixed;left:0;top:0;right:0;bottom:0;background-color:rgb(0,0,0,.5);z-index:9999;">'+
					'<div style="position:fixed;left: calc(50% - 50px);top:50%;">'+
						'<div style="width:100px;height:100px;background:url(img/loader.png) 0 0;animation:loader 1s infinite steps(8,start);text-indent:200%;white-space:nowrap;overflow:hidden"></div>'+
							'<div id="savetext" style="color:#fff;text-align:center;">'+content+'</div>'+
					'</div>'+
				'</div>'
	$("html").append(mask);
}
function hideLoading(){
	$("#mask").remove();
}

function  beginLoading1(content){
	var mask='<div id="mask" style="position:fixed;top: 0;right: 0;bottom: 0;left: 0;background-color:rgb(0,0,0,.5);z-index: 99999;padding-top:20%;"><div style="text-align: center;"><img src="img/loading.gif"><p>'+content+'</p></div></div>'
	$("html").append(mask);
}


function hideLoading1(){
	$("#mask").remove();
}

/*
 * loader.png  loading.gif
 * @-webkit-keyframes loader
			 Safari 和 Chrome 
			
			to {
				background-position: -800px 0;
			}
			
			@-o-keyframes loader{
				to {
				background-position: -800px 0;
			}
			}
			 Opera 
			
			@keyframes loader {
				to {
					background-position: -800px 0;
				}
			}
*/