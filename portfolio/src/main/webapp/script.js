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



  //showing messages for step3 of week2
  /** Fetches stats from the server and adds them to the page. */
async function getRandomMessage() {
    const responseFromServer = await fetch('/message');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();
  
    const msgListElement = [];
    //statsListElement.innerHTML = '';
  

    // msgListElement.push(JSON.parse(stats).data[0].message1);
    // msgListElement.push(JSON.parse(stats).data[0].message2);
    // msgListElement.push(JSON.parse(stats).data[0].message3);
    
    msgListElement.push(stats.message1);
    msgListElement.push(stats.message2);
    msgListElement.push(stats.message3);
   
    // msgListElement.appendChild(
    //     createListElement('m1: ' + stats.message1));
    // msgListElement.appendChild(
    //     createListElement('m2: ' + stats.message2));
    // msgListElement.appendChild(
    //     createListElement('m3: ' + stats.message3));

     // Pick a random greeting.
    const messages = msgListElement[Math.floor(Math.random() * msgListElement.length)];

    // Add it to the page.
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = messages;
  }
  
  /** Creates an <li> element containing text. */
  function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
  }