
let bodyElement = document.querySelector("body")
console.log("yy")
let coin = {
    state: 0,
    flip: function () {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let randumNum = Math.round(Math.random())
        //  console.log(randumNum)
        this.state = randumNum
        return this.state
    },
    toString: function () {
        if (this.state == 1) {
            return "Tails"
        }
        else {
            return "Head"
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */

    },
    toHTML: function () {
        let ImagElement = document.createElement('img');
        ImagElement.style.width= '100px';  
        if (this.state === 0) {
            ImagElement.src = "https://previews.123rf.com/images/derejeb/derejeb1307/derejeb130700002/20708686-lion-on-the-face-of-the-ethiopian-ten-cent-coin.jpg"
            return ImagElement
        }
        else {
            ImagElement.src = "https://d9nvuahg4xykp.cloudfront.net/-7544103533708064342/-4324028167212393499.jpg"
            return ImagElement
        }

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        // return image;
    }
};

function display20Flips() {
    for (let i = 0; i < 20; i++) {
         coin.flip()
         console.log(coin.toString()) // to compare the flip results with html output
         bodyElement.append(coin.toString() +" ")
         bodyElement.append(document.createElement("div"))
        bodyElement.append(document.createElement("div"))
    }
}
function display20images() {
    for (let i = 0; i < 20; i++) {
         coin.flip()
        coin.toHTML()
        console.log(coin.toString()) // to watch the resilt and compare it with the output
         bodyElement.append(document.createElement("div"))// to make break line 
        bodyElement.append(coin.toString() +" ")
        bodyElement.append(document.createElement("div"))
        bodyElement.append(coin.toHTML())
    }
}

console.log(display20Flips())
console.log(display20images())

