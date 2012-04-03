var running = false;

onmessage = function (evt) {
	if(!running){
		primo(evt.data);
		}
	};


function primo(valor){
	running = true;
	var nv = new Array();
	for (x = 2; x <= valor; x++) {
		if ((x == 2 || x == 3 || x == 5) || (x % 2 != 0 && x % 3 != 0 && x % 5 != 0)) {
			var nPrimo = true;
			var limite = parseInt(Math.sqrt(x));
			var y = 2;
			while (y <= limite && nPrimo) {
				if (x % y == 0) {
					nPrimo = false;
					}
				y++;
			}
			if (nPrimo) {
				nv.push(x);
				}
			}
		}
		running = false;
	postMessage(nv);
	}