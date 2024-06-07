import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  paragraph ='Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.'

  clickedButton: string = 'Pet Grooming';
imageUrl='assets/girlWithDogF.png';
imageUrl2='assets/bone.png'
imageUrl3='assets/purplePaw.png'
imageUrl4='assets/smallOrangePaw.png'
imageUrl5='assets/transPaw.png'

  onButtonClick(buttonName: string){
    this.clickedButton = buttonName;
    switch(this.clickedButton){
      case 'Pet Grooming':
        this.imageUrl='assets/girlWithDogF.png';
        this.paragraph ='Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.'
        this.imageUrl2='assets/bone.png'
        this.imageUrl3='assets/purplePaw.png'
        this.imageUrl4='assets/smallOrangePaw.png'
        this.imageUrl5='assets/transPaw.png'
        break;
      case 'Pet Clinic':
        this.imageUrl='assets/clinic.png';
        this.paragraph='The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.'
        this.imageUrl2='assets/purplePaw.png'
        this.imageUrl3='assets/smallOrangePaw.png'
        this.imageUrl4='assets/food.png'
        this.imageUrl5='assets/pinkPaw.png'
        break;
      case 'Pet Daycare':
        this.imageUrl='assets/greenCircle.png';
        this.paragraph='Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage'
        this.imageUrl2='assets/smallOrangePaw.png'
        this.imageUrl3='assets/food.png'
        this.imageUrl4='assets/purplePaw.png'
        this.imageUrl5='assets/belt.png'
        break;
      case 'Pet Training':
        this.imageUrl='assets/yellowCircle.png'
        this.paragraph='Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.'
        this.imageUrl2='assets/pinkPaw.png'
        this.imageUrl3='assets/transPaw.png'
        this.imageUrl4='assets/purplePaw.png'
        this.imageUrl5='assets/smallOrangePaw.png'
        break
      default:
        this.imageUrl='assets/girlWithDogF.png';
        this.paragraph ='Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.'
        this.imageUrl2='assets/pinkPaw.png'    
        this.imageUrl3='assets/food.png'
        this.imageUrl4='assets/smallOrangePaw.png'
        this.imageUrl5='assets/smallOrangePaw.png'
      }
  }
}
