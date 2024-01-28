class Phones {
    noOfIphone = 10
    noOfWindows = 20
    noOfAndroid = 50
    noOfElectronics = 10
    iPhoneColor = 'black'

    static noOfLaptops = 5

    purchase (){
        console.log ('Try to make a purchase')
    }

    accessFunction (){
        console.log (this)
    }

    displayPurchase (){
        console.log (this.purchase)
    }

    accessStatic (){
        Phones.noOfLaptops

    }
  
}

const phone = new Phones ()
//console.log (phone)
phone.noOfAndroid = 100

phone.iPhoneColor = 'Red'
phone.noOfLaptops = 20

console.log (phone, Phones)

phone.purchase ()
phone.accessFunction ()

