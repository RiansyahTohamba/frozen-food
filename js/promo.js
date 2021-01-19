(function() {
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("flashDeal").innerHTML = "Berakhir dalam 00:" +
            minutes + ":" + seconds;
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("flashDeal").innerHTML = "EXPIRED";
        }
    }, 1000);

    var promoProducts = [
        {
            price: 'Rp 5.000',
            photoPath: 'breakfast_item.jpg',
            name: 'Nugget Asam Manis',
        },
        {
            price: 'Rp 4.000',
            photoPath: 'lunch_item.jpg',
            name: 'Nugget Karage',
        }
    ];
    promoProducts.forEach(function(pro){
        var item = $("<div>", {"class": "item col-md-12","style":"padding-bottom: 20px"});
        var food = $("<div>", {"class": "food-item"});
        var foodImg = $("<img>", {"src": "img/"+pro.photoPath});
        var foodPrice = $("<div>", {"class": "price"}).append(pro.price);
        var textContent = $("<div>", {"class": "text-content"});
        var urlWa = "https://wa.me/6281295957942?text=Stock "+pro.name+" nya ready Mba ?";
        var linkWa = $("<a>", {"href": urlWa,"class":"btn btn-primary"}).text('Beli');
        $("#promoProducts").append(item);
        item.append(food);
        food.append(foodImg);
        food.append(foodPrice);
        food.append(textContent);
        textContent.append("<h4>"+pro.name+"</h4>");
        textContent.append(linkWa);
    });

})();

