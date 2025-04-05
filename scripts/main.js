console.log("script loaded!! so sigma!!")

//base vars

let milk = 0;
let targetId = 0;
let addition = 0;
let multiplier = 1;

//shop stuffs

const shopContainer = document.getElementById("shopContainer");

//template: [name, description, icon, id, cost]
let strawberryArray = ["strawberry milk", "+1 milk per click", "strawberryIcon", "strawberry", 30];
let chocolateArray = ["chocolate milk", "+5 milk per click", "chocolateIcon", "chocolate", 105];

let shopButtons = [strawberryArray, chocolateArray]

//functions

function createShopButton(name, description, icon, id, cost)
{
    //setup variables
    let shopContainer = document.getElementById("shopContainer")
    let button = document.createElement("button")
    
    //text stuff
    let tempText = name
    let nameText = document.createElement("p")
    nameText.innerHTML = name

    //cost stuff
    let tempCostText = name
    let costText = document.createElement("p")
    costText.innerHTML = "$" + cost

    //icon stuff
    let tempIcon = "images/icons/" + (icon) + ".png"
    let iconImg = document.createElement("IMG")
    iconImg.src = tempIcon
    
    button.id = id
    button.className = "shopButton"

    //actually add button to container
    button.appendChild(iconImg)
    button.appendChild(nameText)
    button.appendChild(costText)
    shopContainer.appendChild(button)

    button.addEventListener("click", function(){
        if (milk >= cost)
        {
            updateNumber(-cost)
            if (button.id == "strawberry")
            {
                cost = Math.round(cost ** 1.2)
                costText.innerHTML = "$" + cost
                addition += 1
            }

            if (button.id == "chocolate")
            {
                cost = Math.round(cost ** 1.15)
                costText.innerHTML = "$" + cost
                addition += 5
            }
        }
    })

}

function createShopButtons()
{
    for (let i = 0; i < shopButtons.length; i++)
    {
        console.log("added shop button")
        let tempArray = shopButtons[i]
        createShopButton(tempArray[0],tempArray[1],tempArray[2],tempArray[3],tempArray[4])
    }
}

function updateNumber(number)
{
    milk += number;
    document.getElementById("milk#").innerHTML = 'milk: ' + milk
}

function clickMilk()
{
    updateNumber((1 + addition))
}