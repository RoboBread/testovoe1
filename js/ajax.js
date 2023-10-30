
function setLimitedText(text, maxLength) {
    let par = '';
    if (text.length > maxLength) {
      par = text.substring(0, maxLength) + "…"; 
    } else {
      par = text;
    }
    return par
  }


let xhr = new XMLHttpRequest();
let paragraph = document.getElementById("paragraph");
  
xhr.open("GET", "https://baconipsum.com/api/?type=lucky", true);
  
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        let responseData = JSON.parse(xhr.responseText);
        paragraph.textContent = setLimitedText(responseData[0], 150);; 
      } catch (e) {
        paragraph.textContent = "Ошибка при разборе JSON.";
        }
      } else {
        paragraph.textContent = "Произошла ошибка при загрузке данных.";
      }
    }
  };
  
xhr.send();
  
