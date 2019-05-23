class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".drop-content");
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => this.toggleContent());
  }

  toggleContent() {
    
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle("dropdown-hidden");
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdown = document.querySelectorAll('.more-content').forEach( dropdown => new Dropdown(dropdown));


// class component for About page


class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement

    this.tabData = this.tabElement.dataset.person;

    if(this.tabData === "all"){
      this.persons = document.querySelectorAll(".person")

    } else {
      this.persons = document.querySelectorAll(`.person[data-person="${this.tabData}"]`);

    }
    // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.persons = Array.from(this.persons).map(element => new TabCard(element));

    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab(){

    const tabs = document.querySelectorAll(".tab");
    
    tabs.forEach(element => {
      element.classList.remove("active-tab")
    })

    const persons = document.querySelectorAll(".person")

    persons.forEach(element => {
      element.style.display = "none"
    })
    
    this.tabElement.classList.add("active-tab");
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.persons.forEach(person => person.selectPerson());
  }
}

class TabCard {
  constructor(cardElement){
  
    this.cardElement = cardElement;
  }
  selectPerson(){
    this.cardElement.style.display = "flex";
  }

}

let tabs = document.querySelectorAll(".tab").forEach( element => new TabLink(element) )