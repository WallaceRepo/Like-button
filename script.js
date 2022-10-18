//const btn = document.getElementById("like");
//const icon = document.querySelector('button i')
// btn.addEventListener('click', (e) => {
//      e.target.classList.add('clicked')
//      icon.classList.remove('fa-heart','fa-solid')
//      icon.classList.add('fas', 'fa-circle-notch')
//         great()
//    })
// function great() {
//         setTimeout(()=> {
//         icon.classList.remove('fas', 'fa-circle-notch')
//         icon.classList.add('fa-heart', 'fa-solid')
//      }, 2000)
// }

// btn.addEventListener('click', great)
// function great(e){
//         e.target.classList.add('clicked')
//         icon.classList.remove('fa-heart','fa-solid')
//         icon.classList.add('fas', 'fa-circle-notch')
//        setTimeout(()=> {
//         icon.classList.remove('fas', 'fa-circle-notch')
//         icon.classList.add('fa-heart', 'fa-solid')
//      }, 2000)
// }

// oop
// Call function inside event handler oop
function LikeButton() {
     this.init();
 }
 
 const apiInvokeCall = () => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             resolve({
                 data: {
                     "likes": 30,
                     "postId": 1001
                 }
             });
         }, 5000)
     })
 }
 
 LikeButton.prototype.handleClick = function(event) {
     event.target.classList.add('clicked');
     this.buttonIcon.classList.remove('fa-heart');
     this.buttonIcon.classList.add('fa-circle-notch');
     apiInvokeCall().then((response) => {
         //event.target.classList.remove('clicked');
         this.buttonIcon.classList.add('fa-heart');
         this.buttonIcon.classList.remove('fa-circle-notch');
     })
 }
 
 LikeButton.prototype.init = function() {
     this.button = document.querySelector('button');
     this.buttonIcon = document.querySelector('i');
     this.button.addEventListener('click', this.handleClick.bind(this));
 }
 
  new LikeButton();
