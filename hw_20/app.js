
function addRow(event) {
  event.preventDefault();
  let name = document.querySelector("#productName").value,
  quantity = document.querySelector("#quantity").value,
  price = document.querySelector("#price").value;

  if(name && quantity && price){
    const thead = document.querySelector("thead");
    row = `<tr>
              <th>${name}</th>
              <th>${quantity}</th>
              <th>${price}</th>
              <th><button class="deleteBtn">Delete</button></th>
            </tr>`
  
    thead.insertAdjacentHTML("afterend", row);

    document.querySelector("#productName").value = "";
    document.querySelector("#quantity").value = "";
    document.querySelector("#price").value = "";

  } else {
    alert("Enter correct value!");
  }
}

btn = document.querySelector("#btn");
btn.addEventListener("click", addRow);

function deleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  let btn = e.target;
  btn.closest("tr").remove();
}

let removeEl = document.querySelector("table");
removeEl.addEventListener("click", deleteRow );


