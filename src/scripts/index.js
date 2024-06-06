const popupEditProfile = document.querySelector('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const descriptionInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const submitEditProfilePopup = document.querySelector('.popup__form');

buttonEditProfile.addEventListener('click', function () {
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    popupEditProfile.classList.add('popup_opened');
});

buttonClosePopup.addEventListener('click', function () {
    popupEditProfile.classList.remove('popup_opened');
});

function handleclick(event) {
    event.preventDefault();

    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    popupEditProfile.classList.remove('popup_opened');
}

submitEditProfilePopup.addEventListener('submit', handleclick);

console.log(submitEditProfilePopup);
