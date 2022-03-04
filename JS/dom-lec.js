// get the thing
let navContent = document.getElementById("navContent");

// log the thing to make sure you got the thing
// console.log(navContent);

console.log(navContent.children);

// create an element
let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
nameElement.innerText = getGitHubInfo().name;
nameElement.style["color"] = 'white';
console.log(nameElement)

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar


// navContent.appendChild(nameElement)
// elementNode.insertBefore(new_node,existing_node)
// targetElement.insertAdjacentElement(position, element);
// listy.insertAdjacentElement("beforebegin", nameElement)
navContent.insertBefore(nameElement, navContent.children[1]);
nameElement.style.width = "25rem"
nameElement.style.margin = "0"
nameElement.style.marginTop = "2rem"




// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
function getGitHubInfo(){
    return {
        name: "vegetasrevenge"
    };
}