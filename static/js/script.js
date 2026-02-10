document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    document.getElementById("response").innerText = result.message;

    // Clear form after submit
    document.getElementById("contactForm").reset();

  } catch (error) {
    document.getElementById("response").innerText =
      "Error sending message. Make sure backend is running.";
  }
});
