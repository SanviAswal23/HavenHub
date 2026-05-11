const sections = document.querySelectorAll(".hh-search-section");

sections.forEach(section => {

    section.addEventListener("click",(e)=>{
  
      e.stopPropagation();
  
      sections.forEach(s=>{
  
        if(s!==section){
          s.classList.remove("active");
        }
  
      });
  
      section.classList.add("active");
  
    });
  
  });
  
  document.addEventListener("click",()=>{
  
    sections.forEach(section=>{
      section.classList.remove("active");
    });
  
  });
  
  document.querySelectorAll(".hh-search-dropdown")
  .forEach(drop=>{
  
    drop.addEventListener("click",(e)=>{
      e.stopPropagation();
    });
  
  });


let adults = 0;
let children = 0;

const adultCount = document.getElementById("adultCount");
const childCount = document.getElementById("childCount");
const guestInput = document.getElementById("guestInput");

function updateGuests(){

  guestInput.value =
    `${adults + children} Guests`;

}

document.querySelector(".plus").onclick = () => {
  adults++;
  adultCount.innerText = adults;
  updateGuests();
};

document.querySelector(".minus").onclick = () => {
  if(adults > 0){
    adults--;
    adultCount.innerText = adults;
    updateGuests();
  }
};

document.querySelector(".plus-child").onclick = () => {
  children++;
  childCount.innerText = children;
  updateGuests();
};

document.querySelector(".minus-child").onclick = () => {
  if(children > 0){
    children--;
    childCount.innerText = children;
    updateGuests();
  }
};
const locationItems =
  document.querySelectorAll(".location-item");

const locationInput =
  document.getElementById("locationInput");

locationItems.forEach(item=>{

  item.addEventListener("click", ()=>{

    const value =
      item.dataset.location;

    locationInput.value = value;

    document
      .getElementById("whereSection")
      .classList.remove("active");

  });

});