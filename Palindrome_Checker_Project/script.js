const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// Function to check if a string is a palindrome
const isPalindrome = (str) => {
  // console.log(str)
  const regex = /[^A-Za-z0-9]/g;
  const cleanStr = str.replace(regex, "").toLowerCase();
  
  return cleanStr === cleanStr.split('').reverse().join('');
}

checkBtn.addEventListener('click', ()=>{
  const inputText = document.getElementById("text-input").value;
  if (!inputText) {
    alert("Please input a value");
    return;
  }

  const isPalin = isPalindrome(inputText);
  if (isPalin) {
    result.textContent = inputText + " is a palindrome";
  } else {
    result.textContent = inputText + " is not a palindrome";
  }
})