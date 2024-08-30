//-----------------------------Functions--------------------------------

function inputWord(element) {
  word = element.innerText;
  replaceFirstPlaceholder();
  console.log(word);
}

function replaceFirstPlaceholder() {
  const placeholders = document.getElementsByClassName("blank");

  if (placeholders.length > 0) {
    const placeholder = placeholders[0];
    placeholder.textContent = word;
    placeholder.classList.remove("blank");
  }
  console.log(placeholders);
}
