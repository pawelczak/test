
var koszyk = [];



var Item = function(name, ilosc, cena){
		this.name = name
		this.ilosc = ilosc
		this.cena = cena
	}

var tabela = document.getElementsByTagName('table')[0];
	
function dokoszyka(name,ilosc, cena) {

    clear();

	for (var i in koszyk){
		if (koszyk[i].name === name)	{
            koszyk[i].ilosc ++;
            render();
			return;
		}
	}

	var item = new Item(name, ilosc, cena);
    koszyk.push(item);
    
    
    render();
};

function clear() {
    for (var i = 0; i < koszyk.length; i += 1 ) {
        tabela.deleteRow(0);
    }
}

function render() {

    for (var i = 0; i < koszyk.length; i += 1 ) {

        var newRow = tabela.insertRow(tabela.rows.length);

            var cel1 = newRow.insertCell(0);
            var cel2 = newRow.insertCell(1) ;
            var cel3 = newRow.insertCell(2);
            var cel4 = newRow.insertCell(3);

            
            cel1.innerHTML = koszyk[i].name;
            cel2.innerHTML = koszyk[i].ilosc;
            cel3.innerHTML = koszyk[i].cena;
            cel4.innerHTML = "<button>usuń</bu`tton>"
    }
}


function dokoszyka1(){

	dokoszyka("okulary",1,199);

	

	

	for (var i in koszyk){

		if (koszyk[i].name === "okulary"){

			if ( koszyk[i].ilosc > 1) {

		//	document.getElementById("ilosc").value = koszyk[i].ilosc
		
			
			
			} else {		

			var newRow = tabela.insertRow(tabela.rows.length);

			var cel1 = newRow.insertCell(0);
			var cel2 = newRow.insertCell(1) ;
			var cel3 = newRow.insertCell(2);
			var cel4 = newRow.insertCell(3);

			
			cel1.innerHTML = koszyk[i].name;
			cel2.innerHTML = koszyk[i].ilosc;
			cel3.innerHTML = koszyk[i].cena;
			cel4.innerHTML = "<button>usuń</button>"

		//	cel2.innerHTML= document.getElementById("ilosc").value;
		
			}
	

	}
	/*for (koszyk[i].ilosc>1) {
		ilosc.id=koszyk[i].ilosc
	}*/

			console.log(koszyk);
	}	
/*	for ( var i = 1; i < tabela.rows.length; i++) 
					{
 			tabela.rows[i].cells[3].onclick = function(){

 		index=this.parentElement.rowIndex;
 		tabela.deleteRow(index);
 		suma();
 														}

			suma();
					}*/
				};
function dokoszyka2() {
	dokoszyka("koszulka",1,499);
	for ( var i in koszyk){
		if (koszyk[i].name === "koszulka"){
			var newRow = tabela.insertRow(tabela.rows.length);

			var cel1 = newRow.insertCell(0);
			var cel2 = newRow.insertCell(1);
			var cel3 = newRow.insertCell(2);
			var cel4 = newRow.insertCell(3);

			

			cel1.innerHTML = koszyk[i].name;
			cel2.innerHTML = koszyk[i].ilosc;
			cel3.innerHTML = koszyk[i].cena;
			cel4.innerHTML = "<button>usuń</button>"
}

			console.log(koszyk);
			}
	for ( var i = 1; i < tabela.rows.length; i++) 
					{
 			tabela.rows[i].cells[3].onclick = function(){

 		index=this.parentElement.rowIndex;
 		tabela.deleteRow(index);
 		suma();
 														}

			suma();
					}
				};

/*
	var x = "koszulka";
	var y = "499.99";



	

for (var i=0; i<tabela.rows.length; i++)
			{
		if (tabela.rows[i].cells[0].innerHTML == "koszulka")
				{
			
				tabela.rows[i].cells[1].innerHTML = 2

								
					}
		else {

			var newRow = tabela.insertRow(tabela.rows.length);

			var cel1 = newRow.insertCell(0);
			var cel2 = newRow.insertCell(1);
			var cel3 = newRow.insertCell(2);
			var cel4 = newRow.insertCell(3);

			

			cel1.innerHTML = x;
			cel2.innerHTML = 1;
			cel3.innerHTML = y;
			cel4.innerHTML = "<button>usuń</button>"
				
					}
		
			};
		


 for ( var i = 1; i < tabela.rows.length; i++) {
 	tabela.rows[i].cells[3].onclick = function()
 	{
 		index=this.parentElement.rowIndex;
 		tabela.deleteRow(index);
 		suma();
 	}
 }
suma();
};*/


function suma(){

	var suma = 0;

	for (var i = 1; i < tabela.rows.length; i++){
		suma +=parseInt(tabela.rows[i].cells[2].innerHTML);
    }
    
    document.getElementById('suma').innerHTML= "Do zapłaty" + " " +suma;
};



	
/*	for (var i=1; i<tabela.rows.length; i++)
			{
		if (tabela.rows[i].cells[0].innerHTML == "okulary")
				{
		//		document.getElementById("ilosc").value=2;
				
			
				tabela.rows[i].cells[1].innerHTML = 2
								
					}
		
			};
		} */