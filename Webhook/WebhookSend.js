function sendWebhook() {
    const url = document.getElementById('url-input').value;
    const data = { message: document.getElementById('text-input').value };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log('Webhook request successful:', response);
      })
      .catch(error => {
        console.error('Webhook request error:', error);
      });
  }
  