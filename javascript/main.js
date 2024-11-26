const originalInput = ["salt", "dirt", "calcite", "uranium", "rubber"]
let input = [...originalInput]
const filter = ["uranium", "dirt"]

const contentDiv = document.getElementById("mix");
let ul = document.createElement("ul");
const colorBox = document.getElementById("changeColorBox")


const renderList = () => {
  ul.innerHTML = "";
  let count = 0;
  input.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item
    ul.appendChild(li)
  })
  contentDiv.appendChild(ul)

}

renderList();

const filterWater = () => {
  
  console.log("Before Filtering:", input)

  input = originalInput.filter(item => !filter.includes(item));

  setTimeout( 
    colorBox.style.backgroundColor = "lightblue"
    , 5000
  )
  

  console.log("After Filtering:", input)
  renderList();
}


