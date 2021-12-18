
export const getRandomString = (stringLength: number) => {
    const alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()~`{}:".split('')
    let counter = 0
    let generatedString: string = ""
    
    while (counter <= stringLength) {
        let randomNumber = Math.floor(Math.random() * alphaNum.length)
        generatedString += alphaNum[randomNumber]
        counter++
    }

    return generatedString
}

