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

var textNodes;

function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}




// translating text in testing phase


    async function requestTranslation(){
        
        const textContents = [];
    
        for (const node of textNodes) {
        textContents.push(node.textContent);
        }

        // Data structure to convert to JSON, and send to the backend:
        const languageElement = document.getElementById('language');        
        const translateParameters = {
            toLanguage: languageElement.options[languageElement.selectedIndex].value,
            stringsToTranslate: textContents
        };

    

        const translateResponse = await fetch('/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(translateParameters)
        });
        const translateResult = await translateResponse.json();

        for (let i = 0; i < textNodes.length; i++) {
        textNodes[i].textContent = translateResult[i];
        }
    }

   
    




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


window.onload = function(){
    document.getElementById('form2').addEventListener('submit', showServerTime);


    const ham = document.querySelector('.ham')

    ham.addEventListener('click', function(){
        this.classList.toggle('is-active');
    })


    function textNodesUnder(node){
        var all = [];
        for (node=node.firstChild;node;node=node.nextSibling){
          if (node.nodeType==3) all.push(node);
          else all = all.concat(textNodesUnder(node));
        }
        return all;
      }

    textNodes = textNodesUnder(document.body);
  };



  //showing messages for step3 of week2
  /** Fetches stats from the server and adds them to the page. */
async function getRandomMessage() {
    const responseFromServer = await fetch('/message');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();
  
    const msgListElement = [];
    
  

    
    msgListElement.push(stats.message1);
    msgListElement.push(stats.message2);
    msgListElement.push(stats.message3);
   
 
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