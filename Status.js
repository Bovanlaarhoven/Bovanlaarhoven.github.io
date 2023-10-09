function fetchAndDisplayStatus() {
    const userId = '607614967625023488';
    const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
        const discordStatus = data.data.discord_status;
        const p2Element = document.querySelector('p2');
        
        if (p2Element) {
            p2Element.textContent = `Status: ${discordStatus}`;
        } else {
            console.error('p2 element not found.');
        }
        } else {
        console.error('Error:', data);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

window.addEventListener('load', fetchAndDisplayStatus);
    