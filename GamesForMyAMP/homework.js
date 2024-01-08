// let likeCount = 0;
// let dislikeCount = 0;

// const likeButton = document.getElementById("likeButton");
// const dislikeButton = document.getElementById("dislikeButton");

// likeButton.addEventListener("click", handleLike);
// dislikeButton.addEventListener("click", handleDislike);

// function handleLike() {
//     likeCount++;
//     alert(`Liked! Total Likes: ${likeCount}`);
//   }
//   function handleDislike() {
//     dislikeCount++;
//     alert(`Disliked! Total Dislikes: ${dislikeCount}`);
//   }

const grabRatePhotoInput = document.getElementById("ratePhotoInput"); //Your rating
console.log(grabRatePhotoInput);

const grabCommentInput = document.getElementById("commentInput"); //Your comment
console.log(grabCommentInput);
 
const grabSubmitBtn = document.getElementById("submitBtn"); //The submit button
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => { //setting the trigger to clicking
    e.preventDefault();
    // console.log("Love it!");
    // console.log(grabRatePhotoInput.value);
    // console.log(grabCommentInput.value);

    const paragraphElement = document.querySelector(".paragraph") //inputing it in the paragraph
    console.log(paragraphElement);

    paragraphElement.textContent = `You rated ${grabRatePhotoInput.value} and said ${grabCommentInput.value}. Thank you for the input!`;

    // console.log(paragraphElement.textContent);

    grabRatePhotoInput.value = "";
    grabCommentInput.value = ""; //clear values
});

// const grabForm = document.querySelector("form")

// const peopleArrayOfObjects = [];

// grabForm.addEventListener( "submit", (e) => {
// e.preventDefault();
// const formData = newFormData(grabForm)

// const firstName = formData.get("firstName")
// console.log(firstName)

// const lastName = formData.get("lastName")
// console.log(lastName)

// const birthday = formData.get("birthday")
// console.log(birthday)

// const newPerson = new Person(firstName, lastName, birthday)
// console.log(newPerson)

// peopleArrayOfObjects.push(newPerson);
// console.log(peopleArrayOfObjects)



// })