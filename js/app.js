$('.gallery-form').on('submit', function () {
	var list = [];
	var startValue = document.getElementById("start").value;
	var endValue = document.getElementById("end").value;
	for (var i = startValue; i <= endValue; i++) {
		list.push(i);
	}
	document.getElementById("result").value = "[gallery link='file' size='medium' ids= " + list.toString() + "]";
	return false;
});

$('.sidebar-form').on('submit', function () {
	var articleLink = document.getElementById("link").value;
	var articleTitle = document.getElementById("title").value;
	var articleDate = document.getElementById("date").value;
	var articleImg = document.getElementById("image").value;
	document.getElementById("result").value = '<a href="' + articleLink + '"><img class="alignleft wp-image-25193 size-thumbnail" src="' +
		articleImg + '" alt="Link to article: ' + articleTitle + '" width="150" height="150" /></a><a class="widget-link" href="' +
		articleLink + '" target="_blank">' + articleTitle + '</a><small>' + articleDate + '</small>';
	return false;
});

$('.format-form').on('submit', function () {
	let accord = `[accordion name='']\n[section title='More stories']\n`;
	let text = document.getElementById("result").value;
	text = text.split('[box]').join('');
	text = text.split('[/box]').join('');
	text = text.split(`[accordion name='']`).join('');
	text = text.split(`[section title='More stories']`).join('');
	text = text.trim() // do inside loop
	tArray = text.split('[tile]');
	tArray.shift();
	res = `[box] \n`;
	arch = "";
	for (let i = 0; i < tArray.length; i++) {
		if (i < 24) {
			if (i % 3 == 0 && i != 0 && i != 6) {
				res += `[/box] \n[box] \n\n`;
			}
			tArray[i] = tArray[i].trim();
			res += `[tile] \n`;
			res += tArray[i];
			res += `\n\n`;
			if (i == 5) {
				res += '[/box]\n\n';
				res += accord;
				res += '\n[box]\n';
			}
			if (i == 23) {
				res += '[/box]';
			}
		} else {
			arch += '[tile]\n';
			arch += tArray[i];
			arch += '\n\n';
		}
	}
	document.getElementById("result").value = res;
	document.getElementById("extra").value = arch;
	return false;
});

$('.equity-form').on('submit', function () {
	let articleTitle = document.getElementById("title").value;
	let articleCaption = document.getElementById("caption").value;
	let articleImg = document.getElementById("image").value;
	let articleLink = document.getElementById("link").value;
	let buttonTitle = document.getElementById("button").value;

	document.getElementById("result").value = "[tile] \n" +
	`<div><img class="alignnone wp-image-5597 size-full" src="${articleImg}" alt="${articleTitle}" width="504" height="337" /></div> \n` +
	`<h3><a href="${articleLink}" target="_blank" rel="noopener noreferrer">${articleTitle}</a></h3> \n` + 
	`${articleCaption} \n\n` +
	`[button url="${articleLink}" color="purple" small="true"] ${buttonTitle} [/button] \n` + 
	`[/tile]`;
	return false;
});
