import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  initialText ='Taking care for your pets !'
  letterSpacing = ''
  fontSize = ''
  leftText = ''
  textLineHeight = ''
  whiteSpaceText =''
  widthTextDiv = ''
  

  // Initial values for the CSS properties
  greenHeight: string = '50%';
  greenRight: string = '2%';
  greenBottom:string = '1%'

  // for green
  green2Right: string = '2%';
  green2Bottom: string = '13%';
  green2Height: string = '38%' // Example initial height
  green2Trans = 0;

  //for title
  textLeft : string = '21%';

  //for kitten
  rightKitten : string ='28%'
  bottomKitten = '';
  transformKitten = 0;

  //for yellow
  yellowLeft ='';
  yellowTop = '';
  yellowRotate = 0;

  //for black
  blackTop = '';
  blackLeft ='';
  blackTransform = 0;

  //for puppy
  puppyLeft =''
  puppyTrans=0
  puppyBottom ='' 

  //for purple paw
  purpleRight =''
  purpleTop=''

  
  

  ngOnInit() {
    setTimeout(() => {
      this.updateStyles();
    }, 2000);
    // setTimeout(()=>{
    //    this.updateStyles2();
    // },3000);
    setTimeout(()=>{
      this.updateStyle3();
    },4500)
    // setTimeout(()=>{
    //   this.updateStyle4();
    // },7000)
  }

  // Method to update the CSS properties
  updateStyles() {
  this.green2Bottom = '30%',
  this.textLeft = '-18%'
  console.log("hi")
  }

  updateStyles2(){
    this.textLeft = '-37%'
    this.rightKitten = '22%'
    this.yellowLeft ='1288px'
    this.yellowTop = '5%'
    this.blackTop = '25%'
  }

  updateStyle3(){
    // this.yellowLeft ='1050px'
    // this.yellowTop = '7%'
    // this.yellowRotate = 9;
    // this.rightKitten = '15%'
    // this.bottomKitten = '52%'
    // this.transformKitten = -9;
    // this.blackTop ='22%'
    // this.blackTransform = 12
    // this.blackLeft = '71%'
    // this.green2Bottom ='32%'
    // this.green2Trans = -7;
    // this.green2Right = '9.5%'
    this.initialText = 'Get various services personalized for your pets like'
    this.letterSpacing = '0px'
    this.fontSize ='50px'
    this.textLeft = '10%'
    this.textLineHeight = 'normal'
    this.whiteSpaceText = 'normal'
    this.widthTextDiv ='750px'
  }

  updateStyle4(){
    this.puppyLeft ='37%'
    this.puppyTrans = -11
    this.puppyBottom ='10%'
    this.rightKitten ='36%'
    this.blackTop ='20%'
    this.blackLeft ='58%'
    this.blackTransform = -8;
    this.yellowLeft ='836px'
    this.yellowRotate =12
    this.yellowTop = '44%'
    this.green2Bottom='25%'
    this.green2Right='21.5%'
    this.green2Trans = 3
  }

}
