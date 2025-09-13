
 $(document).ready(function() {
            $('#send').on('click', function(e) {

                const message_text = {
                    message_text: $("#administration_message").val()
                }
                console.log(message_text)

                if (message_text) {
                    axios.post('/administration', message_text)
                        .then(response => {
                            console.log(response.data)
                            alert("Дані надіслено")
                            $('#administration_message').trigger('reset');
                        })
                        .catch(error => {
                            console.error('Сталася помилка:', error);
                        });
                } else {
                    alert('Будь ласка, заповніть усі поля.');
                }
            });
        });