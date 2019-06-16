
//Imports

import {barChart} from "./barChart.js";
import {doughnutChart} from "./doughnutChart.js";
import * as methods from "./functions.js";



//Variables
const alertboxCancelButton = document.querySelector('.cross');
const lineChartNav = document.querySelector('.line-chart-box .nav ul');
const mobileMenuButton = document.querySelector('.header-mobile-menu');
const mobileMenuButtonFront = document.querySelector('.header-mobile-menu button.front');
const mobileMenuButtonBack = document.querySelector('.header-mobile-menu button.back');
const notificationBell = document.querySelector('.header-notification__bell');
const mobileSearchIcon = document.querySelector('.mobile-search-iconbox');
const searchInputDashboard = document.querySelector('.search-box .search-input');
const messageSearchInput  = document.getElementById('search-user');
const messageForm  =  document.querySelector('.message-form');
const saveButton = document.querySelector('.saveSettings');
const cancelButton = document.querySelector('.cancelSettings');
const sendButton = document.querySelector('.message-form .form-button');






//Event Handlers//

// Close Alertbox  when cross sign clicked
alertboxCancelButton.addEventListener('click', (e) => {
    document.querySelector('.alert-box').remove();
});


//change linechart to match navigation
lineChartNav.addEventListener('click', methods.UpdateLinkedLineChart);


// toggle Mobile Menu Button to toggle Navigation
mobileMenuButton.addEventListener('click', methods.toggleMenuButton);

//Hide Mobile Search Icon
mobileSearchIcon.addEventListener('click', methods.hideSearchIcon);

//Show Search Icon
searchInputDashboard.addEventListener('focusout', methods.showSearchIcon);

methods.createNotification();

//toggle DotSign on Bell Icon if there's notification
notificationBell.addEventListener('click', methods.toggleDotSign);



document.addEventListener('click', methods.removeNotificationItem);


messageSearchInput.addEventListener('keyup', methods.searchMembers);

messageForm.addEventListener('click', methods.selectMemberForMessage);
saveButton.addEventListener('click', methods.saveSettings);
cancelButton.addEventListener('click', methods.cancelSettings);

sendButton.addEventListener('click', methods.validateForm);


methods.getSaveSettings();

window.onresize = function () {
    if(screen.width <= 550) {
        searchInputDashboard.style.display = 'none';
        mobileSearchIcon.style.display = 'block';
    }
    else {
        mobileSearchIcon.style.display = 'none';
        searchInputDashboard.style.display = 'block';
    }

    if(screen.width >= 769) {
        mobileMenuButtonBack.style.display = 'none';
        mobileMenuButtonFront.style.display = 'none';
    }
    else {
        mobileMenuButtonFront.style.display = 'block';
    }
}