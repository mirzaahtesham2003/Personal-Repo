import { StickyDirection } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    divOne : boolean = true;

    divOneTrue(){
      this.divOne = true;
    }
    divOneFalse(){
      this.divOne = false;
    }

    divTwo : boolean = true;

    divTwoToggle(){
      this.divTwo = !this.divTwo
    }

    num1 : number =0;
    num2 : number =0;

    divThreeSame() : boolean{
      if(this.num1==this.num2){
        return true;
      } else{return false};
    }

    divFour : boolean = true;

    states : string[] = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"]  

    cities : string[] = [
    "Ahmedabad",
    "Bengaluru",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Indore",
    "Thane",
    "Bhopal",
    "Vadodara",
    "Coimbatore",
    "Nashik",
    "Patna",
    "Agra",
    "Meerut",
    "Vijayawada",
    "Raipur",
    "Guwahati",
    "Chandigarh",
    "Mysuru",
    "Aurangabad",
    "Dehradun"
    ]

    studentList : any[] = [
      { id: 1, name :"Ahtesham", PhNo : "9391451065", age : 21, profession : "Student", married : false },
      { id: 2, name :"Mirza", PhNo : "9734529065", age : 21, profession : "Student", married : false },
      { id: 3, name :"Baig", PhNo : "9392789415", age : 21, profession : "Student", married : false },
      { id: 4, name :"Mohd", PhNo : "9762348905", age : 21, profession : "Student", married : false },
      { id: 5, name :"Yousuf", PhNo : "9373927394", age : 21, profession : "Student", married : false },
      { id: 6, name :"Musaddiq", PhNo : "9637458219", age : 21, profession : "Student", married : true },
    ]

    colorDiv : string = '';
    changeColorRed(){
      if (this.colorDiv=="changeRed") {
        this.colorDiv = "box";
      } else(this.colorDiv = "changeRed")
      
    }
    changeColorBlue(){
      this.colorDiv = "changeBlue";
    }
}
