class Carousel {
    constructor(element){
        this.element = element
        // console.log(this.element)
        this.leftButton = this.element.querySelector('.left-button')
        this.rightButton = this.element.querySelector('.right-button')
        // console.log(this.leftButton)
        // console.log(this.rightButton)
        this.leftButton.addEventListener('click', () => this.clickLeftButton())
        this.rightButton.addEventListener('click', () => this.clickRightButton())

        this.currentIndex = 0;
        this.imagesNodeList = this.element.getElementsByTagName('img')
        this.imagesNodeList[this.currentIndex].style.display = "block"
    }   

    clickLeftButton(){
        this.imagesNodeList[this.currentIndex].style.display = "none"
        this.currentIndex = this.currentIndex - 1
        this.imagesNodeList[this.currentIndex].style.display = "block"
      }
    clickRightButton(){
        this.imagesNodeList[this.currentIndex].style.display = "none"
        this.currentIndex = this.currentIndex + 1
        this.imagesNodeList[this.currentIndex].style.display = "block"
      }

}

let carousel = document.querySelectorAll('.carousel');
console.log(carousel)
carousel.forEach(caro => new Carousel(caro))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
