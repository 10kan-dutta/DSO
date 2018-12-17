
//Gallery
setInterval((function(images)
		    {
			 var index = -1, changeImg;
			 changeImg = function()
			 {
				index = (index + 1) % images.length;
				document.getElementById('div1').style.backgroundImage = 'url(' + images[index] + ')';
				document.getElementById('div2').style.backgroundImage = 'url(' + images[index] + ')';
				document.getElementById('div3').style.backgroundImage = 'url(' + images[index] + ')';
				document.getElementById('div4').style.backgroundImage = 'url(' + images[index] + ')';
			 };
			changeImg();
			return changeImg;
		    }(['img.jpg'])), 3000);

