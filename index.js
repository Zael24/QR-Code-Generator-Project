/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const question = [
    {
        name: 'userInput',
        message: 'Enter whichever URL you want to here:',
    },
]
//1.Use the inquirer npm package to get user input.
inquirer
    .prompt(question)
    .then(answer => {
        const url = answer.userInput;
        
        //2.Use the qr-image npm package to turn the user entered URL into a QR code image.
        var qrImage = qr.image(url, { type: 'png' });
        qrImage.pipe(fs.createWriteStream('url.png'));
 

        //3.Create a txt file to save the user input using the native fs node module.
        fs.writeFile('userInput.txt', url,function (err) {
            if (err) throw err;
            console.log('Saved!');
          });
    });

