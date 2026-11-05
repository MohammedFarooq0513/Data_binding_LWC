import { LightningElement } from 'lwc';

export default class Data_binding extends LightningElement {
    personname = 'Farooq'
    companyname = ''
    companyAddress = ''
    Phone = ''
    Inputvalue = ""

constructor(){
    super();
    console.log('1.constructor executed..!')
    this.companyname='Skillforces Hub';
}
    connectedCallback(){
    console.log('2. connectedCallback executed..!')
    this.companyAddress='Warangal';
}
    handleButtonFuntion(){
    console.log('3.handleButtonFuntion  executed..!')
    this.Phone='1234567890';
    }

    captureInput(event){
    console.log('4.captureInput  executed..!')
    this.Inputvalue=event.target.value;
    }


}

