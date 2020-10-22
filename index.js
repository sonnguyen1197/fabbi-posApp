
var foods = [
    {
        id: 1,
        name: 'Cafe',
        img: 'anh/download.jpeg',
        price: '50',
        status: '',
    },
    {
        id: 2,
        name: 'Cafe',
        img: 'anh/download (1).jpeg',
        price: '100',
        status: 'sdfsdf',
    },
    {
        id: 3,
        name: 'Dark Cafe',
        img: 'anh/download (2).jpeg',
        price: '100',
        status: 'sdfsdf',
    },
    {
        id: 4,
        name: 'Sashimi',
        img: 'anh/images.jpeg',
        price: '100',
        status: 'sdfsdf',
    },
    {
        id: 5,
        name: 'Sushi',
        img: 'anh/images (1).jpeg',
        price: '100',
        status: 'sdfsdf',
    },
    {
        id: 6,
        name: 'Sushi',
        img: 'anh/images (2).jpeg',
        price: '100',
        status: 'sdfsdf',
    },
    {
        id: 7,
        name: 'Sushi',
        img: 'anh/images (3).jpeg',
        price: '1000',
        status: 'sdfsdf',
    },
    {
        id: 8,
        name: 'Cake',
        img: 'anh/images (4).jpeg',
        price: '1000',
     
        status: 'sdfsdf',
    },
        




];

function hienthi(){
    var html= chuyendangsachsangHTML(foods);
    var node = document.getElementById('san-pham');
    node.innerHTML = html;
}


function chuyendangsachsangHTML(danhsachgiohang){
    var html = '';
    for(var i = 0; i<danhsachgiohang.length; i++){
        html += chuyendoisangHTML(danhsachgiohang[i]);
    };

    return html;


}

function chuyendoisangHTML(itemGioHang){
    var html = '<div onclick = "myfunction('+itemGioHang.id+')">' +
    '<img src="' + itemGioHang.img + '" class= "imagefood" alt="">' +
    '<div>'+
    '<div class = "plus"> +</div>' +
    '<p class = "foodname" id="name" >'+ itemGioHang.name +'</p>' +
    '</div>'+
    
    '<p class = "foodprice">' +itemGioHang.price +'$</p>' +
'</div>';

return html;
}




