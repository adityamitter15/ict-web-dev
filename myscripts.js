document.getElementById("groupId1")
    .addEventListener("click", function() {
    document.location.href = "index.html";
});

document.getElementById("groupId4")
    .addEventListener("click", function() {
    document.location.href = "gallery.html";
});

document.getElementById("groupId5")
    .addEventListener("click", function() {
    document.location.href = "shop.html";
});

document.getElementById("groupId6")
    .addEventListener("click", function() {
    document.location.href = "profile.html";
});

document.getElementById("groupId7")
    .addEventListener("click", function() {
    document.location.href = "feedback.html";
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
        students[i].style.display = (students[i].style.display === "none" ? "block" : "none");
    }
});


// // Expanded view for gallery items 
// function expandThumbnail(thumbnail) {
//     thumbnail.classList.toggle('expanded');

//     // Close other expanded thumbnails
//     const expandedThumbnails = document.querySelectorAll('.gallery-item.expanded');
//     expandedThumbnails.forEach(item => {
//         if (item !== thumbnail) {
//             item.classList.remove('expanded');
//         }
//     });
// }





// function showDescription(description) {
//     var extendedView = document.querySelector('.extended-view');
//     var descriptionElement = document.getElementById('description');
//     descriptionElement.innerHTML = description;
//     extendedView.style.display = 'block';
// }

// function hideDescription() {
//     document.querySelector('.extended-view').style.display = 'none';
// }
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




// $(function(){
//     $("#navbar-placeholder").load("path/to/HeaderFooter.html");
// });

document.addEventListener("DOMContentLoaded", function() {
    // Fetch the header content
    fetch('treya/header.html')
        .then(response => response.text())
        .then(data => {
            // Insert the header content into the DOM
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => console.error('Error fetching header:', error));
});
