		function kon()
		{
			var formku = document.konversi; //parsing form menajadi sebuah variable formku
			var uang = formku.uangku.value //ambil value dari name 'uangku' jadi variable uang
			var selected = formku.select_kurs.value; //ambil value dari name 'select_kurs' jadi variable selected

			if(uang == "")
			{ 
				document.getElementById('result').innerHTML ="masukkan jumlah uang"
			}

			else
			{
				if(selected == "USD") // jka variable selected mempunyai value USD
				{
					var res = uang/13500
					document.getElementById('result').innerHTML ="hasil konversi mata uang Rp." +uang + " adalah $"+res;

				}
				else if(selected == "IDR")
				{
					var res = uang*13500
					document.getElementById('result').innerHTML ="hasil konversi mata uang $" +uang + " adalah Rp."+res;
				}

				else
				{
					document.getElementById('result').innerHTML ="Pilih mata uang terlebih dahulu!"
				}
			}

			// formku.hasil.value = res;
			
		}