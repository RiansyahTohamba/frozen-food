$(document).ready(function() {
    var products = [
        {
            price: 'Rp 30.000',
            photoPath: 'breakfast_item.jpg',
            name: 'Nugget Asam Manis',
            desc: 'Rasa asam manis nya bikin nyam nyam',
        },
        {
            price: 'Rp 50.000',
            photoPath: 'lunch_item.jpg',
            name: 'Nugget Karage',
            desc: 'Enak sekali loh coba saja beli nyam nyam',
        },
        {
            price: 'Rp 25.000',
            photoPath: 'dinner_item.jpg',
            name: 'Sayap Ayam',
            desc: 'Sayap sayap patah',
        },
    ];
    products.forEach(function(pro){
        var item = $("<div>", {"class": "item col-md-12","style":"padding-bottom: 20px"});
        var food = $("<div>", {"class": "food-item"});
        var foodImg = $("<img>", {"src": "img/"+pro.photoPath});
        var foodPrice = $("<div>", {"class": "price"}).append(pro.price);
        var textContent = $("<div>", {"class": "text-content"});
        var urlWa = "https://wa.me/6281295957942?text=Stock "+pro.name+" nya ready Mba ?";
        var linkWa = $("<a>", {"href": urlWa,"class":"btn btn-primary"}).text('Beli');
        $("#products").append(item);
        item.append(food);
        food.append(foodImg);
        food.append(foodPrice);
        food.append(textContent);
        textContent.append("<h4>"+pro.name+"</h4><p>"+pro.desc+"</p>");
        textContent.append(linkWa);
    });

    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    // scroll to top action
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop:0}, 'slow');         
    });
    // mobile nav toggle
    $('#nav-toggle').on('click', function (event) {
        event.preventDefault();
        $('#main-nav').toggleClass("open");
    });
});
// scroll function
function scrollToID(id, speed){
    var offSet = 0;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
        mainNav.css("height", "1px").removeClass("in").addClass("collapse");
        mainNav.removeClass("open");
    }
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}