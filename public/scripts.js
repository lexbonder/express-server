const form = document.querySelector('form');
const buttonResponse = document.querySelector('.response')
const dataButton = document.querySelector('.data-button')
const dataHolder = document.querySelector('.data-holder')

const doTheThing = async event => {
  event.preventDefault()
  const initialFetch = await fetch('http://localhost:3000/', {
    method: 'POST'
  });
  const response = await initialFetch.json();
  buttonResponse.innerText = response.words
}

const getTheData = async event => {
  event.preventDefault()
  const initialFetch = await fetch('http://localhost:3000/json')
  const response = await initialFetch.json();
  dataHolder.innerText = `{${Object.keys(response)[0]}: ${response.name}}`;
}

form.addEventListener('submit', doTheThing);
dataButton.addEventListener('click', getTheData)