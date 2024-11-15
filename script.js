// Sample data with English words/sentences and their Tamil meanings
const data = [
    { english: "Hello", tamil: "வணக்கம்" },
    { english: "How are you?", tamil: "நீங்கள் எப்படி இருக்கிறீர்கள்?" },
    { english: "Good Morning", tamil: "காலை வணக்கம்" },
    { english: "Thank you", tamil: "நன்றி" },
    { english: "I am learning English", tamil: "நான் ஆங்கிலம் கற்றுக்கொள்கிறேன்" },
    { english: "How was your day?", tamil: "உங்கள் நாள் எப்படி இருந்தது?" },
    { english: "Good Night", tamil: "இரவு வணக்கம்" },
    { english: "See you later", tamil: "பிறகு பார்க்கலாம்" },
    { english: "Take care", tamil: "கவனமாக இருங்கள்" },
    { english: "What are you doing?", tamil: "நீங்கள் என்ன செய்கிறீர்கள்?" },
    { english: "I'm doing fine", tamil: "நான் நன்றாக இருக்கிறேன்" },
    { english: "Where are you going?", tamil: "நீங்கள் எங்கு போகின்றீர்கள்?" },
    { english: "I am going home", tamil: "நான் வீட்டிற்கு போகிறேன்" },
    { english: "How old are you?", tamil: "நீங்கள் எவ்வளவு வயதாகின்றீர்கள்?" },
    { english: "I am 25 years old", tamil: "நான் 25 வயதாகின்றேன்" },
    { english: "Where are you from?", tamil: "நீங்கள் எங்கு இருந்து வந்தீர்கள்?" },
    { english: "I am from India", tamil: "நான் இந்தியாவிலிருந்து வந்தேன்" },
    { english: "What is your name?", tamil: "உங்களின் பெயர் என்ன?" },
    { english: "My name is Shivaraja", tamil: "என் பெயர் சிவராஜா" },
    { english: "I don't understand", tamil: "எனக்கு புரியவில்லை" },
    { english: "Can you repeat that?", tamil: "அதை மீண்டும் சொல்ல முடியுமா?" },
    { english: "Please speak slowly", tamil: "தயவுசெய்து மெதுவாக பேசவும்" },
    { english: "I am hungry", tamil: "நான் பசிக்கிறேன்" },
    { english: "Let's eat", tamil: "நாம் சாப்பிடுவோம்" },
    { english: "I am thirsty", tamil: "நான் தண்ணீர் குடிக்க விரும்புகிறேன்" },
    { english: "I am sorry", tamil: "மன்னிக்கவும்" },
    { english: "Excuse me", tamil: "மன்னிக்கவும்" },
    { english: "It's okay", tamil: "சரி" },
    { english: "Can you help me?", tamil: "நான் உங்களுக்கு உதவி செய்ய முடியுமா?" },
    { english: "Yes, I can help", tamil: "ஆம், நான் உதவி செய்ய முடியும்" },
    { english: "No, I can't help", tamil: "இல்லை, நான் உதவி செய்ய முடியாது" },
    { english: "What time is it?", tamil: "நேரம் எவ்வளவு?" },
    { english: "It’s 5 o’clock", tamil: "அது 5 மணிக்குள்" },
    { english: "Where is the bathroom?", tamil: "குளியலறை எங்கு?" },
    { english: "It’s over there", tamil: "அது அங்கே உள்ளது" },
    { english: "I like this", tamil: "இதை நான் விரும்புகிறேன்" },
    { english: "I don’t like this", tamil: "இதை நான் விரும்பவில்லை" },
    { english: "Can I sit here?", tamil: "நான் இங்கே உட்காரலாமா?" },
    { english: "What is this?", tamil: "இதென்ன?" },
    { english: "I don’t know", tamil: "எனக்கு தெரியாது" },
    { english: "How much is this?", tamil: "இது எவ்வளவு?" },
    { english: "It’s expensive", tamil: "அது துக்கமாக இருக்கிறது" },
    { english: "It’s cheap", tamil: "அது சிக்கனமானது" },
    { english: "Is it safe?", tamil: "இது பாதுகாப்பானதா?" },
    { english: "Yes, it’s safe", tamil: "ஆம், இது பாதுகாப்பானது" },
    { english: "No, it’s not safe", tamil: "இல்லை, இது பாதுகாப்பானது அல்ல" },
    { english: "Is this correct?", tamil: "இது சரியா?" },
    { english: "Yes, it’s correct", tamil: "ஆம், இது சரியானது" },
    { english: "No, it’s not correct", tamil: "இல்லை, இது சரியானது அல்ல" },
    { english: "I am tired", tamil: "நான் சோர்வாக இருக்கிறேன்" },
    { english: "Can you speak English?", tamil: "நீங்கள் ஆங்கிலம் பேச முடியுமா?" },
    { english: "A little", tamil: "சிறிது" },
    { english: "I don’t speak English", tamil: "நான் ஆங்கிலம் பேச முடியாது" },
    { english: "I understand", tamil: "நான் புரிந்தேன்" },
    { english: "I don’t understand", tamil: "நான் புரிந்துகொள்ளவில்லை" },
    { english: "Could you say that again?", tamil: "அதை மீண்டும் சொல்ல முடியுமா?" },
    { english: "I am lost", tamil: "நான் இழந்துவிட்டேன்" },
    { english: "Can I use your phone?", tamil: "நான் உங்கள் தொலைபேசியில் பயன்படுத்தலாமா?" },
    { english: "Where are we?", tamil: "நாம் எங்கு இருக்கிறோம்?" },
    { english: "We are at the mall", tamil: "நாம் மாலில் இருக்கிறோம்" },
    { english: "What do you do?", tamil: "நீங்கள் என்ன செய்கிறீர்கள்?" },
    { english: "I am a student", tamil: "நான் ஒரு மாணவன்" },
    { english: "I work in a company", tamil: "நான் ஒரு நிறுவனத்தில் வேலை செய்கிறேன்" },
    { english: "What is your profession?", tamil: "உங்களின் தொழில் என்ன?" },
    { english: "I am a teacher", tamil: "நான் ஒரு ஆசான்" },
    { english: "What’s the weather like?", tamil: "வானிலை எப்படி இருக்கிறது?" },
    { english: "It’s sunny", tamil: "சூரியன் கதிர்கள்" },
    { english: "It’s raining", tamil: "மழை பெய்கிறது" },
    { english: "It’s cold", tamil: "சூடு இருக்கிறது" },
    { english: "It’s hot", tamil: "வெப்பம் இருக்கிறது" },
    { english: "It’s windy", tamil: "காற்று வீசுகிறது" },
    { english: "It’s cloudy", tamil: "மேகமூட்டம் உள்ளது" },
    { english: "It’s snowing", tamil: "பனிக்கட்டுதல்" },
    { english: "I like the rain", tamil: "நான் மழையை விரும்புகிறேன்" },
    { english: "I like the sun", tamil: "நான் சூரியன் விரும்புகிறேன்" },
    { english: "It’s very hot today", tamil: "இன்று மிகவும் வெப்பமாக இருக்கிறது" },
    { english: "It’s a beautiful day", tamil: "இது ஒரு அழகான நாள்" },
    { english: "It’s a nice evening", tamil: "இது ஒரு நன்றான மாலை" },
    { english: "It’s a perfect day", tamil: "இது ஒரு பரபரப்பான நாள்" },
    { english: "The sky is clear", tamil: "வானம் தெளிவாக உள்ளது" },
    { english: "There’s a storm", tamil: "ஒரு புயல் உள்ளது" },
    { english: "I need a break", tamil: "நான் ஓய்வு தேவை" },
    { english: "Let’s go for a walk", tamil: "நாம் சவாரி செல்லலாம்" },
    { english: "What’s your plan?", tamil: "உங்கள் திட்டம் என்ன?" },
    { english: "I have no plan", tamil: "எனக்கு திட்டம் இல்லை" },
    { english: "I’m planning to rest", tamil: "நான் ஓய்வு எடுத்துக்கொள்கிறேன்" },
    { english: "I’m just relaxing", tamil: "நான் சோம்பலாக இருக்கிறேன்" },
    { english: "Let’s meet later", tamil: "நாம் பிறகு சந்திப்போம்" },
    { english: "It’s time to go", tamil: "போக நேரம் ஆயிடுச்சு" },
    { english: "See you soon", tamil: "பிறகு சந்திப்போம்" },
    { english: "I need to leave", tamil: "நான் போவேன்" },



    { english: "to run", tamil: "ஓடுதல்" },
    { english: "to eat", tamil: "சாப்பிடுதல்" },
    { english: "to drink", tamil: "குடித்தல்" },
    { english: "to sleep", tamil: "தூங்குதல்" },
    { english: "to speak", tamil: "பேசுதல்" },
    { english: "to write", tamil: "எழுதுதல்" },
    { english: "to read", tamil: "படித்தல்" },
    { english: "to study", tamil: "கற்குதல்" },
    { english: "to sing", tamil: "பாடுதல்" },
    { english: "to dance", tamil: "நடுத்தல்" },
    { english: "to work", tamil: "வேலை செய்யுதல்" },
    { english: "to play", tamil: " விளையாடுதல்" },
    { english: "to listen", tamil: "கேட்குதல்" },
    { english: "to watch", tamil: "பார்ப்பது" },
    { english: "to help", tamil: "உதவி செய்வது" },
    { english: "to love", tamil: "காதல் செய்வது" },
    { english: "to hate", tamil: "வெறுப்பது" },
    { english: "to open", tamil: "திறக்குதல்" },
    { english: "to close", tamil: "மூடுதல்" },
    { english: "to walk", tamil: "நடத்தல்" },
    { english: "to talk", tamil: "பேசுதல்" },
    { english: "to laugh", tamil: "சிரிக்குதல்" },
    { english: "to cry", tamil: "அழுதல்" },
    { english: "to sit", tamil: "உட்காருதல்" },
    { english: "to stand", tamil: "நிறுத்துதல்" },
    { english: "to jump", tamil: "குதிக்குதல்" },
    { english: "to swim", tamil: "அழகாக நீச்சல் செய்யுதல்" },
    { english: "to run", tamil: "ஓடுதல்" },
    { english: "to drive", tamil: "ஓட்டுதல்" },
    { english: "to ride", tamil: "ஓடுதல்" },
    { english: "to talk", tamil: "பேசுதல்" },
    { english: "to show", tamil: "காட்டுதல்" },
    { english: "to teach", tamil: "பாடிக்கூறுதல்" },
    { english: "to learn", tamil: "கற்றுக்கொள்ளுதல்" },
    { english: "to remember", tamil: "நினைவில் வைக்கவும்" },
    { english: "to forget", tamil: "போக்கில் வைக்கவும்" },
    { english: "to be", tamil: "ஆக" },
    { english: "to have", tamil: "இருக்க வேண்டும்" },
    { english: "to become", tamil: "ஆக வேண்டும்" },
    { english: "to feel", tamil: "உணர்வு" },
    { english: "to make", tamil: "செய்யுதல்" },
    { english: "to say", tamil: "சொல்லுதல்" },
    { english: "to ask", tamil: "கேள்வி கேட்குதல்" },
    { english: "to answer", tamil: "பதில் அளித்தல்" },
    { english: "to search", tamil: "தேடுதல்" },
    { english: "to find", tamil: "கண்டுபிடித்தல்" },
    { english: "to lose", tamil: "நழுவுதல்" },
    { english: "to call", tamil: "அழைத்தல்" },
    { english: "to visit", tamil: "போய்தல்" },
    { english: "to stay", tamil: "தங்குதல்" },
    { english: "to go", tamil: "போவதற்காக" },
    { english: "to come", tamil: "வருதல்" },
    { english: "to take", tamil: "எடுத்தல்" },
    { english: "to give", tamil: "கொடுக்கும்" },
    { english: "to send", tamil: "அனுப்புதல்" },
    { english: "to buy", tamil: "வாங்குதல்" },
    { english: "to sell", tamil: "விற்குதல்" },
    { english: "to help", tamil: "உதவி செய்வது" },
    { english: "to meet", tamil: "சந்திப்பது" },
    { english: "to speak", tamil: "பேசுதல்" },
    { english: "to play", tamil: "விளையாடுதல்" },
    { english: "to enjoy", tamil: "பாராட்டுதல்" },
    { english: "to think", tamil: "பரிசீலனை" },
    { english: "to believe", tamil: "நம்புதல்" },
    { english: "to dream", tamil: "கனவு காண்தல்" },
    { english: "to clean", tamil: "சுத்தம் செய்வது" },
    { english: "to wash", tamil: "கழுவுதல்" },
    { english: "to dry", tamil: "உலர்த்துதல்" },
    { english: "to cook", tamil: "சமைத்தல்" },
    { english: "to bake", tamil: "உறுதி செய்தல்" },
    { english: "to chop", tamil: "செருக்கு" },
    { english: "to cut", tamil: "வெட்டுதல்" },
    { english: "to boil", tamil: "கொட்டுதல்" },
    { english: "to burn", tamil: "செய்யுதல்" },
    { english: "to freeze", tamil: "பரிசுக்கு பரிசுக்கு" },
    { english: "to fry", tamil: "கொள்ளும்" }
];


// Function to display words and sentences
function displayWords(words) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = ''; // Clear existing content

    words.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('word-card');
        
        const englishText = document.createElement('h3');
        englishText.textContent = item.english;
        
        const tamilText = document.createElement('p');
        tamilText.textContent = item.tamil;
        
        card.appendChild(englishText);
        card.appendChild(tamilText);
        wordList.appendChild(card);
    });
}

// Initial display of all data
displayWords(data);

// Search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredData = data.filter(item =>
        item.english.toLowerCase().includes(query) || item.tamil.includes(query)
    );
    displayWords(filteredData);
});
