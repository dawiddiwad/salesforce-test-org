import { LightningElement} from 'lwc';
export default class HelloWorld extends LightningElement {
  showWebsite = true;
  greeting = 'bardzo!';
  frameSource = "https://recipes.lwc.dev/#hello";
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}