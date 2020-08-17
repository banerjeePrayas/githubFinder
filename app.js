// Initialize Github
const github = new Github;

// Initialize UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search input event listenen
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});