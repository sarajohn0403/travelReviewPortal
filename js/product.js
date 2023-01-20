let products = {
  data: [
      {
          name: "Roy",
          titleName: "Great day",
          date: "October",
          rating: "4",
          image: "../images/details1.jpg",
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",
          description: "Really beautiful place, will definitely be going again, a truly wonderful experience and seeing the deer so close was"
      },
      {
          name: "Suji",
          titleName: "Total relaxation exists and is within reach",
          date: "January",
          rating: "3",
          image: "../images/activity-det1.jpg",
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",          
          description: "Fantastic afternoon, thoroughly enjoyed it. The bloke that showed us around was very knowledgeable and went out of his way to make sure we had a good experience."
      },
      {
          name: "Aneesh",
          titleName: "Reboot your mind and body",
          date: "December",
          rating: "4",
          image: "../images/details2.jpg",  
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",          
          description: "We just wanted to record our appreciation for your time and for a really interesting, informative and enjoyable tour around and amongst your deer."
      },
      {
          name: "Sara",
          titleName: "Highly recommended",
          date: "December",
          rating: "4",
          image: "../images/details3.jpg",
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",
                    description: "Thanks to you, we have learnt more about deer than in the whole of our previous lives!"
      },
      {
          name: "Soji",
          titleName: "Great day out!",
          date: "October",
          rating: "4",
          image: "../images/details2.jpg",
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",
                    description: "Towards spring/summer (when there will hopefully be less water around!) we will definitely visit again C"
      },
      {
          name: "John",
          titleName: "Awsome one",
          date: "November",
          rating: "3",
          image: "../images/details1.jpg",
          comment: "Thanks - lovely to have enthusiastic guests join us for our tours.",
          commntedby: "Edward G",
                    description: "Towards spring/summer (when there will hopefully be less water around!) we will definitely visit again C"
      }
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have date and should stay hidden initially
  card.classList.add("card", i.date, "hide");



  //container
  let container = document.createElement("div");
  container.classList.add("search-container");
  //name
  let creater = document.createElement("h5");
  creater.classList.add("name");
  creater.innerText = i.name.toUpperCase();
  container.appendChild(creater);

  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.titleName.toUpperCase();
  container.appendChild(name);
  //rating
  let date = document.createElement("h6");
  date.innerText = "Posted in: " +  i.date;
  container.appendChild(date);

  //description
  let description = document.createElement("h6");
  description.classList.add("product-dec");
  description.innerText = i.description;
  container.appendChild(description);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

   //comment div
   let commentContainer = document.createElement("div");
   commentContainer.classList.add("comment-sec");
   //comment tag
     //name
  let commntedby = document.createElement("h5");
  commntedby.classList.add("commntedby");
  commntedby.innerText = i.commntedby.toUpperCase();
  commentContainer.appendChild(commntedby);

   let comment = document.createElement("comment");
   comment.innerText = i.comment;
   commentContainer.appendChild(comment);
   card.appendChild(commentContainer);
}

//parameter passed from button (Parameter same as date)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
          button.classList.add("active");
      } else {
          button.classList.remove("active");
      }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
          element.classList.remove("hide");
      } else {
          //Check if element contains date class
          if (element.classList.contains(value)) {
              //display element based on date
              element.classList.remove("hide");
          } else {
              //hide other elements
              element.classList.add("hide");
          }
      }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove("hide");
      } else {
          //hide others
          cards[index].classList.add("hide");
      }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};