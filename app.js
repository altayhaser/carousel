let images = [];

// instead of images array, use api call to get list of images and put inside of carousel

// $.ajax({
//     url:"https://api.unsplash.com/photos/random?count=4"
// })


$.get("https://api.unsplash.com/photos/random?count=4/client_id=XnQBN0J8doda1sfaiTMm5jtQ1gfKdW438ElAHkjNXUg", (data) => {
    console.log(data.results);
    data.results.forEach(image => {
        let card = $(`<div><img src=${image.photos}></div>`)
        $("#img-carousel").append(card);
    })
})







let index = 0;

function showImage() {
    $("#img-carousel").attr("src", images[index]);
}

function nextImage() {
    index++;
    if(index >= images.length) {
        index = 0;
    }
    showImage();
}

function prevImage(){
    index--;
    if(index < 0){
       index = images.length - 1; 
    }
    showImage();
}

$("#next").click(() => nextImage())

$("#prev").click(() => prevImage())








