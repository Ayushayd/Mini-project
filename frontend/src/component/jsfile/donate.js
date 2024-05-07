document.addEventListener("DOMContentLoaded", function () {
            const donationForm = document.getElementById("donationForm");

            donationForm.addEventListener("submit", function (event) {
                event.preventDefault();

                // Retrieve form data
                const formData = new FormData(donationForm);
                const donationData = {};
                formData.forEach((value, key) => {
                    donationData[key] = value;
                });

                // You can send the donation data to a server or process it as needed.
                // For this example, we'll simply display an alert.
                alert("Thank you for your donation! \n\n" + JSON.stringify(donationData));

                // Reset the form
                donationForm.reset();
            });
        });