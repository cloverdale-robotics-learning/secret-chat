function decrypt (text: string, num: number) {
    decrypted = ""
    for (let index = 0; index <= text.length - 1; index++) {
        decrypted = "" + decrypted + String.fromCharCode(text.charCodeAt(index) - num)
    }
    return decrypted
}
function encrypt (text: string, num: number) {
    encrypted = ""
    for (let index = 0; index <= text.length - 1; index++) {
        encrypted = "" + encrypted + String.fromCharCode(text.charCodeAt(index) + num)
    }
    return encrypted
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (encrypt("Hello world!", 42)))
})
radio.onReceivedString(function (receivedString) {
    basic.showString("" + (decrypt(receivedString, 42)))
})
let encrypted = ""
let decrypted = ""
radio.setGroup(1)
