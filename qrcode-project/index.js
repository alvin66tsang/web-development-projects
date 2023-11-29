/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image"
import fs from 'fs'

inquirer.prompt({message: 'Enter a link', name: 'URL'}).then(({URL}) => {
    const url = `https://${URL}.com`
    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err
        else 'saved'
    })
    var qrcode = qr.image(url)
    qrcode.pipe(fs.createWriteStream('qr_img.png'))
})
.catch((error) => {
    if(error.isTytError) throw error
    else return "something's wrong"
})