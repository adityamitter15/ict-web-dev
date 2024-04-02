

function validateEmail(email) {
    // Regular expression for email validation
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//////////////////////////////////////////////////////////////////////////
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    if (name.trim() === '' || !email.trim() === '' ) {
        alert('Feedback form is incomplete. Name and Email are required.');
        return false;
    }

    // simple email validation
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    showPreview();
}

//////////////////////////////////////////////////////////////////////////
function showPreview() {
    // Hide the form block
    document.getElementById("feedbackForm").style.display = "none";

    // Get the values of the name and email fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Get the selected values of radio buttons
    var visiting = document.querySelector('input[name="visiting"]:checked').value;
    var navigation = document.querySelector('input[name="navigation"]:checked').value;
       
    var satisfactionRadio = document.querySelector('input[name="satisfaction"]:checked');
    var satisfaction = satisfactionRadio ? satisfactionRadio.value : null;
    
    //var notifications = document.querySelector('input[name="notifications"]:checked').value;

    var additionalNotes = document.getElementById('AdditionalNotes').value;

    // Update the content of the preview section with the retrieved values
    document.getElementById('preview-name').textContent = name;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-visiting').textContent = visiting;
    document.getElementById('preview-navigation').textContent = navigation;
    document.getElementById('preview-satisfaction').textContent = satisfaction;
    //document.getElementById('preview-notifications').textContent = notifications;
    document.getElementById('preview-AdditionalNotes').textContent = additionalNotes;
    
    document.getElementById("preview").style.display = "block";
}

//////////////////////////////////////////////////////////////////////////////////
function submitForm() {
   alert('thank you for your submission.');

    document.getElementById('feedbackForm').reset();

    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("preview").style.display = "none";
}

//////////////////////////////////////////////////////////////////////////
function editForm() {
    document.getElementById("feedbackForm").style.display = "block";
    document.getElementById("preview").style.display = "none";
}

//////////////////////////////////////////////////////////////////////////
/*
    document.getElementById('buttonTop').addEventListener('click', function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
*/