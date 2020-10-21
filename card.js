
var check = false;
var giohang = 'dandanhsachItemGiohang';
function myfunction(itemGioHang) {
	var danhsach = layDanhSachItemGioHang();
	var sanPham = laySanPhamTheoId(itemGioHang);
	check = true;
	
	var coTonTai = false;
	
	for (var i = 0; i < danhsach.length; i++) {

		if (danhsach[i].idSanPham == itemGioHang) {
			danhsach[i].soluong++;
			var soluong = danhsach[i].soluong;
			var priceTotal = sanPham.price * soluong;
			alert(priceTotal);
			$(document).ready(function () {
				$('#' + itemGioHang).val(soluong);
				$('#price' + itemGioHang).html('<span class="price" id = "price' + itemGioHang + '">' + priceTotal + '$</span>')
			}
			)
			coTonTai = true;
		
		}

	}

	if (coTonTai == false) {
		var item = TaoDoiTuongiTemGioHang(itemGioHang, 1);
		danhsach.push(item);
		for(var i = 0; i< foods.length; i++){
			if(foods[i].id == itemGioHang){
				$("#gio-hang").append('<div class ="carditem" >' +
				'<img class = "foodbought" src="' + foods[i].img + '" alt="">' +
				'<p class = "pcheck">' +
				'<div class = "check"> +</div>' +
				'<p class= "nameItem">' + foods[i].name + '</p>' +
				'</p>' +
				'<br />' +
				'<button class = "buttonMinus">-</button>' +
				'<input class= "numberItem" id = "' + foods[i].id + '" type="text" value="1" >' +
				'<button class = "buttonPlus">+</button>' +
				'<span class="price" id = "price' + foods[i].id + '">' + foods[i].price + '$</span>' +
				'</div>')
			}
		}
		checkout();
		
	}


	saveLocal(danhsach);



}

function giohangcard() {
	var danhsachgiohang = laySanPhamTuLocalStorge();
	var totalPrice = 0
	if (danhsachgiohang != null) {
		var html = htmltong(danhsachgiohang);
		var node = document.getElementById('gio-hang');
	
		node.innerHTML = html;
	}

}

function totalPrice(itemGioHang) {

	var sanPham = laySanPhamTheoId(itemGioHang.idSanPham);
	totalPrice = sanPham.price * sanPham.soluong;

	return totalPrice;


}
function checkout() {
	var danhsachgiohang = laySanPhamTuLocalStorge();
	if (check || danhsachgiohang != null) {
		var html = '<div class ="total">' +
			'<span id = "itemtotal">TotalItems</span>' +
			'<span id = "pricetotal">200</span>' +
			'</div>' +

			'<button class = "col-12 checkout">Check Out</button>' +
			'<button class = "col-5 hold">Hold</button>' +
			'<button class = "col-5 cancel">Cancel</button>'
			;
		var node = document.getElementById('check-out');
		node.innerHTML = html;
	}

}

function htmltong(danhsach) {
	var html = '';
	for (var i = 0; i < danhsach.length; i++) {
		html += chuyensangHTML(danhsach[i]);
	};



	return html;
}
function TaoDoiTuongiTemGioHang(idSanPham, soluong) {
	var itemGioHang = new Object();
	itemGioHang.idSanPham = idSanPham;
	itemGioHang.soluong = soluong;
	return itemGioHang;
}


function layDanhSachItemGioHang() {
	var danhsachItemGiohang = new Array();
	var json = localStorage.getItem(giohang);
	if (json != null) {
		danhsachItemGiohang = JSON.parse(json);
	}

	return danhsachItemGiohang;
}
function chuyensangHTML(itemGioHang) {

	var sanPham = laySanPhamTheoId(itemGioHang.idSanPham);

	Tongtien = sanPham.price * sanPham.soluong;
	var html = '<div class ="carditem" >' +
		'<img class = "foodbought" src="' + sanPham.img + '" alt="">' +
		'<p class = "pcheck">' +
		'<div class = "check"> +</div>' +
		'<p class= "nameItem">' + sanPham.name + '</p>' +
		'</p>' +
		'<br />' +
		'<button class = "buttonMinus">-</button>' +
		'<input class= "numberItem" id = "' + itemGioHang.idSanPham + '" type="text" value="' + sanPham.soluong + '" >' +
		'<button class = "buttonPlus">+</button>' +
		'<span class="price" id = "price' + itemGioHang.idSanPham + '">' + Tongtien + '$</span>' +
		'</div>';
	return html;
}



function renderCard(id) {
	var SanPham = laySanPhamTheoId(id);
	$("#gio-hang").append('<div class ="carditem" >' +
		'<img class = "foodbought" src="' + SanPham.img + '" alt="">' +
		'<p class = "pcheck">' +
		'<div class = "check"> + </div>' +
		'<p class= "nameItem">' + SanPham.name + '</p>' +
		'</p>' +
		'<br />' +
		'<button onclick="MinusItemFunction(' + SanPham.id + ')" class = "buttonMinus">-</button>' +
		'<input class= "numberItem" type="text" id = "SanPham.id" value="' + SanPham.soluong + '" >' +
		'<button class = "buttonPlus">+</button>' +
		'<span class="price">' + SanPham.price + '</span>' +
		'</div>');

}
function saveLocal(danhsach) {
	var jsonDanhSach = JSON.stringify(danhsach);

	localStorage.setItem(giohang, jsonDanhSach);
}
function laySanPhamTheoId(idSanPham) {
	var SanPham = new Object();

	var danhsachSanPham = laySanPhamTuLocalStorge();
	if (danhsachSanPham != null) {
		for (var i = 0; i < danhsachSanPham.length; i++) {
			if (danhsachSanPham[i].idSanPham == idSanPham) {
				SanPham = foods[idSanPham - 1];
				SanPham.soluong = danhsachSanPham[i].soluong;

			}
		}

	}


	return SanPham;
}





function laySanPhamTuLocalStorge() {
	var json = localStorage.getItem(giohang);
	var danhsach = JSON.parse(json);
	return danhsach
}