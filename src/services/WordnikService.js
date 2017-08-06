import React from 'react';
import axios from 'axios';

var WordnikService = (function () {
    const basePath = 'http://api.wordnik.com/v4';
    const apiKey = 'a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

    function getRandomWord() {
        const url = `${basePath}/words.json/randomWords`;
        const options = {
            params: {
                minLength: 5,
                maxLength: 10,
                limit: 1,
                api_key: apiKey
            }
        };

        return new Promise((resolve, reject) => {
            axios(url, options)
                .then((response) => {
                    resolve(response.data[0]);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    }

    return {
        getRandomWord: getRandomWord
    }
})();

export default WordnikService;
