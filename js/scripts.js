function fill_template() {
    var data = {
        title: "Adopt a Pet"
        list: [
            {name: "you can generate stuff"},
            {name: "like this"},
            {name: "and it will be"},
            {name: "inserted into the template"}
        ],
        footer: "this is the footer"
    };
    var template = Handlebars.compile(document.querySelector('#template').innerHTML);
    var filled = template(data);
    document.querySelector('#content').innerHTML = filled;
}
    
    
    
    
    // code for carousel

// petImages=[];
//     for (var i=0; i<data.data[0].images.length; i++){
//       petImages.push({images: data.data[0].images[i].url, altText: data.data[0].images[i].altText});
//     }
//     console.log(petImages)
//     //store carousel items in array
//     var slideOne=document.getElementById('first-slide');
//     var slideTwo=document.getElementById('second-slide');
//     var slideThree=document.getElementById('third-slide');
//     var slideFour=document.getElementById('fourth-slide');
//     var slides=[slideOne, slideTwo, slideThree, slideFour];
//     for (var i=0; i<slides.length; i++){
//         slides[i].setAttribute("src", petImages[i].url);
//         slides[i].setAttribute("alt", petImages[i].altText);
//       } 
   
      
     