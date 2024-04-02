document.getElementById("groupId0")
    .addEventListener("click", function() {
    document.location.href = "varanya/splash.html";
});
document.getElementById("groupId1")
    .addEventListener("click", function() {
    document.location.href = "treya/home.html";
});

document.getElementById("groupId4")
    .addEventListener("click", function() {
    document.location.href = "gallery.html";
});

document.getElementById("groupId5")
    .addEventListener("click", function() {
    document.location.href = "varanya/shop.html";
});

document.getElementById("groupId6")
    .addEventListener("click", function() {
    document.location.href = "profile.html";
});

document.getElementById("groupId7")
    .addEventListener("click", function() {
    document.location.href = "treya/feedback.html";
});

document.getElementById("groupId8")
    .addEventListener("click", function() {
    document.location.href = "sitemap.html";
});

document.getElementById("groupId9")
    .addEventListener("click", function() {
    document.location.href = "team.html";
});
document.getElementById("groupId10").addEventListener("click", function() {
    // Toggle visibility of students
    var students = document.getElementsByClassName("student");
    for (var i = 0; i < students.length; i++) {
        students[i].style.display = (students[i].style.display === "block" ? "none" : "block");
    }
});
document.getElementById("groupId11")
    .addEventListener("click", function() {
    document.location.href = "varanya/content_ST1.html";
});

document.getElementById("groupId12")
    .addEventListener("click", function() {
    document.location.href = "treya/content_ST2.html";
});

document.getElementById("groupId14")
    .addEventListener("click", function() {
    document.location.href = "content.html";
});

document.getElementById('applyChanges').addEventListener('click', function() {
    const colorScheme = document.getElementById('colorScheme').value;
    const fontFamily = document.getElementById('fontFamily').value;
    const textColor = document.getElementById('textColor').value; // Assuming you've added this input

    // Change the background color of the gallery items, not the gallery container
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.style.backgroundColor = colorScheme;
    });

    // Change the font family and text color of the overlay text
    document.querySelectorAll('.overlay p').forEach(text => {
        text.style.fontFamily = fontFamily;
        text.style.color = textColor;
    });
});


/* go to top button*/
document.getElementById("footer-button").addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });