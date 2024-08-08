var clicker = document.querySelector('.button'), 
	money = document.querySelector('.money'),
	plus = document.querySelectorAll('.plus'),
	dollars = 0,
	clicked = false,
	has = false;

function color() {
	var input = document.querySelector('input');
	if(dollars >= event.target.getAttribute('data-cost') && event.target.getAttribute('data-used') == 'false'){
		soundClick('audio/Sound_02599 (online-audio-converter.com).mp3');
		event.target.setAttribute('data-used','true');
		dollars -= event.target.getAttribute('data-cost');
		money.innerHTML = `${dollars}$`;
		event.target.setAttribute('data-used', 'true');
		clicker.style.background = input.value;
		event.target.style.background = '#23DB39FF';
	}else if(event.target.getAttribute('data-used') == 'true')clicker.style.background = input.value;
	else alert('not money enough');
}

function soundClick(sound) {
	var audio = new Audio();
	audio.src = `${sound}`;
	audio.autoplay = true; 
}

function checkMoneysPosition(){
	var img = $(".img_money");
	for(var i = img.length - 1; i > 0;i--)
		if(img[i].getBoundingClientRect().y > innerHeight-200)img[i].remove();
	requestAnimationFrame(checkMoneysPosition);
}

requestAnimationFrame(checkMoneysPosition);

clicker.onclick = ()=>{
	var quant = Math.floor(Math.random()*11);
	for(var j = 0; j < quant;j++){
		var el = document.createElement('img');
		var x = Math.floor(Math.random()*innerWidth);
		var delay = Math.floor(Math.random());
		var time = Math.floor(Math.random()*5)+1;
		var rotate = Math.floor(Math.random() * 361)
		el.setAttribute('src','img/—Pngtree—vector dollar icon_4183947.png');
		el.classList.add('img_money');
		el.style.left = x+'px';
		el.style.animation = `fall ${time+1}s ${delay}s linear`;
		el.style.transform = `rotate(${rotate}deg)`;
		document.body.appendChild(el);

	} 
	if(has == false)dollars++;
	else 
		for(var i = 0; i < plus.length;i++)if(plus[i].getAttribute('data-used') == 'true')dollars += Number(plus[i].getAttribute('data-plus'));
	money.innerHTML = `${dollars}$`;
}

document.onclick = (event)=>{
	var button = document.querySelector('.button');
	if(event.target.className == 'plus'){
		if(dollars >= event.target.getAttribute('data-cost') && event.target.getAttribute('data-used') == 'false'){
				soundClick('audio/Sound_02599 (online-audio-converter.com).mp3');
				event.target.setAttribute('data-used','true');
				dollars -= event.target.getAttribute('data-cost');
				money.innerHTML = `${dollars}$`;
				event.target.classList.add('def');
				has = true;
		}else alert('not money enough');
	}
	if(event.target.className == 'feat_butt'){
		if(dollars >= event.target.getAttribute('data-cost') && event.target.getAttribute('data-used') == 'false'){
				soundClick('audio/Sound_02599 (online-audio-converter.com).mp3');
				event.target.setAttribute('data-used','true');
				dollars -= event.target.getAttribute('data-cost');
				money.innerHTML = `${dollars}$`;
				clicker.style.background = event.target.getAttribute('data-src');
				event.target.style.background = '#23DB39FF';
		}else if(event.target.getAttribute('data-used') == 'true')clicker.style.background = event.target.getAttribute('data-src');
		else alert('not money enough');
	}
	if(event.target.className == 'feat_butt_img'){
		if(dollars >= event.target.getAttribute('data-cost') && event.target.getAttribute('data-used') == 'false'){
				soundClick('audio/Sound_02599 (online-audio-converter.com).mp3');
				event.target.setAttribute('data-used','true');
				dollars -= event.target.getAttribute('data-cost');
				money.innerHTML = `${dollars}$`;
				clicker.style.backgroundImage =  `url(${event.target.getAttribute('data-src')})`;
				clicker.style.backgroundSize = `cover`;
				event.target.style.background = '#23DB39FF';
		}else if(event.target.getAttribute('data-used') == 'true')clicker.style.backgroundImage =  `url(${event.target.getAttribute('data-src')})`;
		else alert('not money enough');
	}	
}
document.onmousemove = (event)=>{
	event = event || window.event;
	var x = event.clientX; 
	var dev = document.querySelector('.develops');
	var fet = document.querySelector('.features');
	var d = dev.getBoundingClientRect();
	var f = fet.getBoundingClientRect();
	if(x <= 100 || x < d.right && x > d.left)dev.style.left = '0px';
	else dev.style.left = '-300px';
	if(x >= 1830 || x < f.right && x > f.left) fet.style.right = '0';
	else fet.style.right = '-300px';
}