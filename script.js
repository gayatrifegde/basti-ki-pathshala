document.getElementById("volunteerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for volunteering with us!");
    this.reset();
});