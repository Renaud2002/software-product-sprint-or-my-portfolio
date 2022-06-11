// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

//var myBody = getElementByTagName('body');


// translating text in testing phase
/*
function requestTranslation() {
    const text = document.getElementById('text').value;
    const languageCode = document.getElementById('language').value;

    const resultContainer = document.getElementById('result');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
      method: 'POST',
      body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
      resultContainer.innerText = translatedMessage;
    });
  }
*/

// time bottom for fetch
async function showServerTime(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());


    const responseFromServer = await fetch('/hello' , {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(value),
      });
    const textFromResponse = await responseFromServer.text();
  
    const helloPara = document.getElementById('name-container');
    helloPara.innerText = `Hello ${textFromResponse} `;
}
// document.getElementById('form2').addEventListener('submit', showServerTime);


// const ham = document.querySelector('.ham')

// ham.addEventListener('click', function(){
//    this.classList.toggle('is-active');
// })

window.onload = function(){
    document.getElementById('form2').addEventListener('submit', showServerTime);


    const ham = document.querySelector('.ham')

    ham.addEventListener('click', function(){
        this.classList.toggle('is-active');
    })
  };