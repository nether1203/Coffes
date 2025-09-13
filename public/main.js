$(document).ready(function () {
    $(".info_input").on("submit", function (e) {
        const email = {
            email: $("#email").val(),
        };
        console.log(email);

        if (email) {
            axios
                .post("/", email)
                .then((response) => {
                    console.log(response.data);
                    alert("Користувач зареєстрований");
                    $(".info_input").trigger("reset");
                })
                .catch((error) => {
                    console.error("Сталася помилка під час реєстрації:", error);
                });
        } else {
            alert("Будь ласка, заповніть усі поля.");
        }
    });

    $(".submiter").on("click", function (e) {
        e.preventDefault();
        const submitter = $(".submiter");
        console.log(submitter["0"]);
        const formData = new FormData($(".modal_form")["0"], submitter["0"]);
        console.log(formData);

        const dataObj = {
            product: $(".selected_product")["0"].innerHTML,
        };
        let isHave = true;
        for (let [key, value] of formData.entries()) {
            console.log(value);
            dataObj[key] = value;
            if (!value) {
                console.log(value);
                isHave = false;
                break;
            }
        }

        console.log(dataObj);

        if (isHave) {
            axios
                .post("/popularProduct", dataObj)
                .then((response) => {
                    console.log(response.data);
                    alert("Дані надіслано");
                    $(".modal_form").trigger("reset");
                })
                .catch((error) => {
                    console.error("Сталася помилка:", error);
                });
        } else {
            alert("Будь ласка, заповніть усі поля.");
        }
    });
});
