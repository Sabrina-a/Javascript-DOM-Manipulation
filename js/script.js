const current_date = document.getElementById("view-date");
const element_name = document.getElementById("element-name");
const element_price = document.getElementById("element-price");
const add_element = document.getElementById("add-element");
const name_alert = document.getElementById("element-name-alert");
const price_alert = document.getElementById("element-price-alert");
let element_list = [];
//-------------------view date-----------------------------
let today = new Date();
let date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
current_date.innerHTML = `${date}`;
// -------------------------add elements-------------------
function addElement() {
  const element = {
    name: element_name.value,
    price: element_price.value,
  };
  element_list.push(element);
  displayElements(element_list);
  sumAllPrices(element_list);
  clearInputs();
}
//---------------------display elements----------------------------
function displayElements(arrName) {
  let box = "";
  for (var i = 0; i < arrName.length; i++) {
    box += `<tr>
          <td> ${i}</td>
          <td>${arrName[i].name}</td>
          <td> ${arrName[i].price}</td>
         
          <td><button id="delete-element"  onClick="deleteElement(${i})" class="btn btn-danger">X</button> </td>
         
    </tr>
  `;
  }
  document.getElementById("table-body").innerHTML = box;
}
//------------------clear inputs-------------------------------
function clearInputs() {
  element_name.value = "";
  element_price.value = "";
}
//--------------------delete elements-------------------------

function deleteElement(index) {
  element_list.splice(index, 1);
  displayElements(element_list);
  sumAllPrices(element_list);
}

//--------------------sum prices-------------------------------
function sumAllPrices(elementArr) {
  let sum_val = 0;
  for (let i = 0; i < elementArr.length; i++) {
    sum_val = sum_val + parseInt(elementArr[i].price);
  }
  document.getElementById("view-sum").innerHTML = `Sum : ${sum_val}`;

  console.log(sum_val);
}

//-------------------validate inputs value---------------------

function nameValidation(nameValue) {
  const regex = /^[a-z]{3,15}/;
  if (regex.test(nameValue)) {
    name_alert.classList.replace("d-block", "d-none");
    name_alert.classList.add("is-valid");
    name_alert.classList.remove("is-invalid");
   
  } else {
    name_alert.classList.replace("d-none", "d-block");
    name_alert.classList.add("is-invalid");
    name_alert.classList.remove("is-valid");
  }
}

function priceValidation(priceValue) {
  const regex = /[1-9]/;
  if (regex.test(priceValue)) {
    price_alert.classList.replace("d-block", "d-none");
    price_alert.classList.add("is-valid");
    price_alert.classList.remove("is-valid");
 
  } else {
    price_alert.classList.replace("d-none", "d-block");
    price_alert.classList.add("is-invalid");
    price_alert.classList.remove("is-valid");
  }
}

element_name.addEventListener("focusout", function () {
  nameValidation(element_name.value);
});
element_price.addEventListener("focusout", function () {
  priceValidation(element_price.value);
});

element_name.addEventListener("keyup", function () {
  nameValidation(element_name.value);
});
element_price.addEventListener("keyup", function () {
  priceValidation(element_price.value);
});

add_element.addEventListener("click", addElement);

// element_name.addEventListener("keyup", function () {
//   nameValidation(element_name.value);
// });

// element_price.addEventListener("keyup", function () {
//   priceValidation(element_price.value);
// });
