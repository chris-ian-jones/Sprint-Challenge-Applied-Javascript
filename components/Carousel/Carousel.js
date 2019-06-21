class Carousel {
    constructor(element){
        // assign this.element to the element DOM reference
        this.element = element
        // console.log(this.element)

        // assign the left and right buttons
        this.leftButton = this.element.querySelector('.left-button')
        this.rightButton = this.element.querySelector('.right-button')
        // console.log(this.leftButton)
        // console.log(this.rightButton)

        // add event listeners for clicks of buttons, calling click methods
        this.leftButton.addEventListener('click', () => this.clickLeftButton())
        this.rightButton.addEventListener('click', () => this.clickRightButton())

        // set current index for image
        this.currentIndex = 0;

        // create NodeList of images
        this.imagesNodeList = this.element.getElementsByTagName('img')
        
        // set index of NodeLists images to display the image
        this.imagesNodeList[this.currentIndex].style.display = "block"
    }   

    clickLeftButton(){

        // remove the display property of the current image
        this.imagesNodeList[this.currentIndex].style.display = "none"
        
        // decrease the current index
        this.currentIndex = this.currentIndex - 1

        // add display property to current index of NodeList of images
        this.imagesNodeList[this.currentIndex].style.display = "block"
      }
    clickRightButton(){

        // remove the display property of the current image
        this.imagesNodeList[this.currentIndex].style.display = "none"

        // decrease the current index
        this.currentIndex = this.currentIndex + 1

        // add display property to current index of NodeList of images
        this.imagesNodeList[this.currentIndex].style.display = "block"
      }

}

// Grab reference to carousel
let carousel = document.querySelectorAll('.carousel');
// console.log(carousel)

// Return a new instance of Carousel for each (Nodelist of 1)
carousel.forEach(caro => new Carousel(caro))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
