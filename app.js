// app.js
document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("text_area");
  const separatorInput = document.getElementById("separator");
  const reformatButton = document.getElementById("reformat_button");

  reformatButton.addEventListener("click", () => {
    const text = textArea.value;
    const separator = separatorInput.value;

    // Check if separator is provided
    if (!separator) {
      alert("Please enter a separator.");
      return;
    }

    // remove any empty characters and \n with "; "
    let reformattedText = text.replace(/\n/g, separator);

    // Display the reformatted text in the textarea
    textArea.value = reformattedText;
  });
});
