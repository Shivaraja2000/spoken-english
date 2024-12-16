// Function to add English and Tamil words to local storage
function addWords() {
    const englishWord = document.getElementById('englishWord').value.trim();
    const tamilWord = document.getElementById('tamilWord').value.trim();
  
    if (englishWord === "" || tamilWord === "") {
      alert("Please enter both English and Tamil words.");
      return;
    }
  
    const words = getWordsFromLocalStorage();
  
    // Add new words
    words.push({ english: englishWord, tamil: tamilWord });
  
    // Save to local storage
    localStorage.setItem('words', JSON.stringify(words));
  
    // Clear inputs
    document.getElementById('englishWord').value = '';
    document.getElementById('tamilWord').value = '';
  
    // Update word list display
    displayWords();
  }
  
  // Function to get words from local storage
  function getWordsFromLocalStorage() {
    const words = localStorage.getItem('words');
    return words ? JSON.parse(words) : [];
  }
  
  // Function to display words from local storage
  function displayWords() {
    const words = getWordsFromLocalStorage();
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';
  
    words.forEach((wordObj, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `<strong>${wordObj.english}</strong> - ${wordObj.tamil} 
        <span class="action-icons" onclick="editWord(${index})">&#9998; Edit</span>
        <span class="action-icons" onclick="deleteWord(${index})">&#10006; Delete</span>`;
      wordList.appendChild(listItem);
    });
  }
  
  // Function to edit a word
  function editWord(index) {
    const words = getWordsFromLocalStorage();
    const word = words[index];
  
    // Populate the input fields with the word to be edited
    document.getElementById('englishWord').value = word.english;
    document.getElementById('tamilWord').value = word.tamil;
  
    // Remove the word from the list to allow for replacement
    words.splice(index, 1);
    localStorage.setItem('words', JSON.stringify(words));
  
    // Update the list display
    displayWords();
  }
  
  // Function to delete a word with confirmation
  function deleteWord(index) {
    const confirmDelete = confirm("Are you sure you want to delete this word?");
    if (confirmDelete) {
      const words = getWordsFromLocalStorage();
  
      // Remove the word from the list
      words.splice(index, 1);
  
      // Save updated list to local storage
      localStorage.setItem('words', JSON.stringify(words));
  
      // Update the word list display
      displayWords();
    }
  }
  
  // Display words when the page loads
  document.addEventListener('DOMContentLoaded', displayWords);
  
