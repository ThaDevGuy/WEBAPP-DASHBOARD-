import * as data from "./data.js";
import {updateLineChart} from "./lineChart.js";



const lineChartNav = document.querySelector('.line-chart-box .nav ul');

const mobileMenuButtonFront = document.querySelector('.header-mobile-menu button.front');
const mobileMenuButtonBack = document.querySelector('.header-mobile-menu button.back');
const mainNav = document.querySelector('.side-nav');
const header = document.querySelector('.sec-grid');
const dashBoard = document.querySelector('.dashboard');
const mobileSearchIcon = document.querySelector('.mobile-search-iconbox');
const searchInputDashboard = document.querySelector('.search-box .search-input');
const notificationList = document.createElement('ul');
notificationList.className = 'notificationList hide';
const messageSearchInput  = document.getElementById('search-user');
const messageForm  =  document.querySelector('.message-form');




const UpdateLinkedLineChart = (event) => {
    if(event.target.className.includes('nav__item')){
        //extract the  text of nav item
        const active = event.target.textContent.toLowerCase();
        //remove any active class and then put .active on selected nav item
        for(let i = 0; i < lineChartNav.children.length;  i++) {
            lineChartNav.children[i].className = "nav__item";
        }
        event.target.className = "nav__item active";
        //up
        updateLineChart(data.chartsData[active], data.chartsLabels[active], data.chartsMaxTicks[active]);
    }
}

const toggleMenuButton = () => {
    if(event.target.matches('.front')){
        mobileMenuButtonFront.style.display = 'none';
        mobileMenuButtonBack.style.display = 'block';
        mainNav.style.display = 'block';
    }
    if(event.target.matches('.back')){
        mobileMenuButtonBack.style.display = 'none';
        mobileMenuButtonFront.style.display = 'block';
        mainNav.style.display = 'none';
    }
}


const hideSearchIcon = () => {
    mobileSearchIcon.style.display = 'none';
    searchInputDashboard.style.display = 'block';
    searchInputDashboard.focus();
}

const showSearchIcon = () => {
    if(screen.width <= 550) {
        if(searchInputDashboard.value.length < 1) {
            searchInputDashboard.style.display = 'none';
            mobileSearchIcon.style.display = 'block';
        }
    }
}

const createNotification = () => {
    for(let i = 0; i < data.notificationArray.length; i++) {
        const notificationListItem = document.createElement('li');
        const crossButton = document.createElement('button');
        crossButton.className = 'crossButton';
        crossButton.textContent = 'X';
        notificationListItem.className = 'notificationListItem';
        notificationListItem.textContent = data.notificationArray[i];
        notificationListItem.appendChild(crossButton);
        notificationList.appendChild(notificationListItem);
    }
    header.insertBefore(notificationList, dashBoard);
}

const toggleDotSign = () => {
    notificationList.classList.toggle('hide')
    const dotSign = document.querySelector('.hasnotification');
    dotSign.classList.toggle('hide');
    if(!document.querySelector('.notificationList')){
        dotSign.className = 'hide hasnotification';
    }
}

const removeNotificationItem = () => {
    if(event.target.matches('.crossButton')){
        event.target.parentNode.remove();
        if(document.querySelector('.notificationList').children.length < 1) {
            document.querySelector('.notificationList').remove();
        }
    }
}

const searchMembers = () => {
    const inputValue =  messageSearchInput.value.toLowerCase();
    const memberSearchResults = document.querySelector('.searchResult');
    if(inputValue.length > 0) {
        const searchResultList = document.createElement('ul');
        searchResultList.className = 'searchResult';
        data.memberList.forEach((item, index)=>{
            if(item.toLowerCase().includes(inputValue)) {
                const searchResultItem = document.createElement('li');
                searchResultItem.className = 'searchResultItem';
                searchResultItem.textContent = item;
                searchResultList.appendChild(searchResultItem);
            }
        });
         if(memberSearchResults) {
             memberSearchResults.remove();
         }
         messageForm.insertBefore(searchResultList, document.getElementById('user-message'));
    }
    else {
        if(memberSearchResults) {
            memberSearchResults.remove();
        }
    }
}

const selectMemberForMessage = () =>  {
    if(event.target.matches('.searchResultItem')) {
        messageSearchInput.value = event.target.textContent;
        document.querySelector('.searchResult').remove();
    }
}

const createConfirmation = (message, target, confirmType) => {
    const confirmation = document.createElement('p');
    confirmation.className = `confirmation ${confirmType}`;
    confirmation.textContent = message;
    target.insertBefore(confirmation, target.children[0]);
    window.setTimeout(() => document.querySelector('.confirmation').remove(), 3000);
}

const saveSettings = (event) => {
    const notificationCheckBox = document.querySelector('.email-notification').checked;
    const profilePublicCheckbox = document.querySelector('.profile-public').checked;
    const timezone = document.querySelector('.timezone-select').value;
    console.log(notificationCheckBox,profilePublicCheckbox, timezone);
    localStorage.setItem('email-notification',notificationCheckBox);
    localStorage.setItem('profile-public', profilePublicCheckbox);
    localStorage.setItem('timezone', timezone);
    createConfirmation('Settings have been saved', document.querySelector('.settings-form'), 'success');
    event.preventDefault();
}
 

const getSaveSettings = () => {
    document.querySelector('.email-notification').checked  = (localStorage.getItem('email-notification') == 'true');
    document.querySelector('.profile-public').checked = (localStorage.getItem('profile-public') == 'true');
    document.querySelector('.timezone-select').value = localStorage.getItem('timezone');
}


const cancelSettings = () => {
    localStorage.removeItem('email-notification');
    localStorage.removeItem('profile-public');
    localStorage.removeItem('timezone');
    document.querySelector('.email-notification').checked = false;
    document.querySelector('.profile-public').checked = false;
    document.querySelector('.timezone-select').value = "";
}


const validateForm = (event) => {
    const searchInput = document.querySelector('.message-form .search-input');
    const textareaInput = document.querySelector('.message-form .textarea');
    const memberListcpy = data.memberList.map(item => item.toLowerCase());
    // console.log(memberListcpy, searchInput.value, textareaInput.value);
    if(searchInput.value.length < 1 || !memberListcpy.includes(searchInput.value.toLowerCase()) || textareaInput.value.length < 3) {
        createConfirmation('User not found or not a valid message', document.querySelector('.message-form'), 'error'); 
    }
    else {
        createConfirmation('Message Has been sent', document.querySelector('.message-form'), 'success');
        textareaInput.value  = '';
        searchInput.value = '';
    }
    event.preventDefault();
}

export {validateForm,cancelSettings,createConfirmation,getSaveSettings,saveSettings,selectMemberForMessage, searchMembers, removeNotificationItem,toggleDotSign,createNotification,showSearchIcon,hideSearchIcon, toggleMenuButton, UpdateLinkedLineChart}