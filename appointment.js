const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    fullName: document.getElementById("fullName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    altPhone: document.getElementById("altPhone").value,
    patientName: document.getElementById("patientName").value,
    gender: document.getElementById("gender").value,
    dob: document.getElementById("dob").value,
    maritalStatus: document.getElementById("maritalStatus").value,
    department: document.getElementById("department").value,
    doctor: document.getElementById("doctor").value,
    appDate: document.getElementById("appDate").value,
    appTime: document.getElementById("appTime").value,
    symptoms: document.getElementById("symptoms").value
  };

fetch("https://script.google.com/macros/s/AKfycbx-poNYngr7S0hbHY_BTnlUvj273Ws-0NNnjXmS8E975E0kGImgxicmxiWYVaBarevSWQ/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})

    .then(res => res.json())
    .then(response => {
      alert("Appointment submitted successfully!");
      form.reset();
    })
    .catch(err => {
      alert("Error submitting form");
      console.error(err);
    });
});
