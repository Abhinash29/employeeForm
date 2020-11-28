import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  MinLengthValidator,
  ValidatorFn,
  ReactiveFormsModule
} from '@angular/forms';
import { Employee1dataService } from "./employee1data.service";
import { Employee1 } from './employee1';
@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

  employeeForm: FormGroup;
  employeeForm1:FormGroup;
  employeeForm2:FormGroup;
  employeeForm3:FormGroup;
  flag1:boolean=true;
  flag2:boolean=false;
  flag3:boolean=false;
  flag4:boolean=false;
  flag5:boolean=false;
  flag6:boolean=false;
  flag7:boolean=false;
  flag8:boolean=false;

  arremployee: Employee1[]=[];
  qualificationform:FormGroup;
  arrquali: any[]=[];
  invalidNamesArr: any[] = [];
  qualification;
  institute;
  passing_year;
  score;
  onChange;
  qualification_area;
  signupForm: FormGroup;
  res;

  arremployee1: any[]=[];
  fromDate;
  toDate;
  company;
  designation;
  relevant;
  nrelevant;
  duration;
  signupForm1: FormGroup;

  skillForm:FormGroup;
  arrskill: any[]=[];
  invalidNamesArr1: any[] = [];
  skillCategory;
  skill;
  skillLevel;
  isCurrent;
  Experience;
  Remarks;
  flag:boolean = true;
  res1;


  constructor(private ang:FormBuilder, private  data:Employee1dataService) {}
  Caddress_permanent:string;
  CCity:string;
  CCountry:string;
  CState:string;
  CDistrict:string;
  CPin:string;
  age:number;
  ngOnInit(): void {
    this.signupForm =  this.ang.group
    ({
      qualification_details: this.ang.array([this.qualification_Group()]),
    });
    this.signupForm.controls['qualification_details'].valueChanges.subscribe(value => {});

    this.signupForm1 =  this.ang.group({

      employment_details: this.ang.array([this.employment_Group()]),
    });

    this.skillForm =  this.ang.group
    ({
        skill_details: this.ang.array([this.SkillSetDetail()]),
    });
    this.skillForm.controls['skill_details'].valueChanges.subscribe(value => {});


    this.employeeForm = new FormGroup({
      employee_no:new FormControl(null,[Validators.required,Validators.minLength(5),]),
      title:new FormControl(null,[Validators.required,Validators.minLength(4),]),
      name:new FormControl(null,[Validators.required,Validators.minLength(5),]),
      addresses_as:new FormControl(),
      first_name:new FormControl(null,[Validators.required,Validators.minLength(5),]),
      middle_name:new FormControl(),
      last_name:new FormControl(),
      initials: new FormControl(),
      gender : new FormControl(),
      date_of_birth:new FormControl(),
      employee_age : new FormControl(),
      official_phone: new FormControl(),
      personal_mobile:new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),]),
      fax: new FormControl(),
      official_email: new FormControl(),
      personnal_email :new FormControl(null,[Validators.required,Validators.email,]),
      personnal_email2 : new FormControl(),
      personnal_email3 : new FormControl(),
      photo_file : new FormControl(),

      birthplace :new FormControl(null,[Validators.required,Validators.minLength(4),]),
      religion :new FormControl(),
      caste:new FormControl(),
      domicile :new FormControl(),
      nationality :new FormControl(),
      voter_id:new FormControl(),
      pan_no :new FormControl(null,[Validators.required,Validators.minLength(8),]),
      adhar_no :new FormControl(null,[Validators.required,Validators.minLength(12),]),
      marital_status :new FormControl(),
      no_of_children:new FormControl(),
      marriage_date :new FormControl(),
      spouse_name :new FormControl(),

      bank_name :new FormControl(null,[Validators.required,Validators.minLength(3),]),
      account_type:new FormControl(),
      payment_type:new FormControl(null,[Validators.required,]),
      account_no:new FormControl(null,[Validators.required,Validators.minLength(13),]),
      branch_details:new FormControl(),
      ifsc_code:new FormControl(null,[Validators.required,Validators.minLength(8),]),
      reimbursement_bank_name:new FormControl(),
      reimbursement_account_no:new FormControl()
    });
   function onAddemployeeForm()
      {
        const control = <FormArray>this.employeeForm.get('employee_details');
        // console.log('Qualification Details',this.signupForm.get('qualification_details').controls['qualification'].value);
      }

      this.employeeForm1=new FormGroup({
     address_permanent:new FormControl(null,[Validators.required,Validators.minLength(5),]),
      City:new FormControl(null,[Validators.required,Validators.minLength(4),]),
      Country:new FormControl(),
      State:new FormControl(),
      District:new FormControl(),
      Pin:new FormControl(),
      Phone1:new FormControl(),
      Phone2:new FormControl(),
      fax:new FormControl(),
      personalEmailId:new FormControl(),

      address:new FormControl(),
      address_present:new FormControl(null,[Validators.required,Validators.minLength(5),]),
      pCity:new FormControl(null,[Validators.required,Validators.minLength(4),]),
      pCountry:new FormControl(),
      pState:new FormControl(),
      pDistrict:new FormControl(),
      pPin:new FormControl(),
      pPhone1:new FormControl(),
      pPhone2:new FormControl(),
      pfax:new FormControl(),
      ppersonalEmailId:new FormControl(),
      });

      this.employeeForm2=new FormGroup({

    });
    this.employeeForm3=new FormGroup({

      });


      //this.employeeForm.get('basicInfo').get('dob').valueChanges.subscribe((x)=>this.updateEmpAge(x));
     this.employeeForm1.get('address').valueChanges.subscribe((x) => this.setAddress(x));
        this.employeeForm.get('date_of_birth').valueChanges.subscribe((x) => this.setAge(x));
        //this.employeeForm.get('dob').valueChanges.subscribe((x)=>this.updateEmpAge(x));
    }

onEmployee()
 {
   this.data.addbasic_tbl(this.employeeForm.value).subscribe((x)=>
    {
      this.arremployee.push(this.employeeForm.value);
      alert("Data Added successfully!....");
      console.log('Basic Information', JSON.stringify(this.employeeForm.value));
    });
 }


   setAddress(val:boolean){
      if(val){
        this.Caddress_permanent=this.employeeForm1.get('address_permanent').value;
        this.CCity=this.employeeForm1.get('City').value;
        this.CCountry=this.employeeForm1.get('Country').value;
        this.CState=this.employeeForm1.get('State').value;
        this.CDistrict=this.employeeForm1.get('District').value;
        this.CPin=this.employeeForm1.get('Pin').value;
      }
      else{
        this.Caddress_permanent=null;
        this.CCity=null;
        this.CCountry=null;
        this.CState=null;
        this.CDistrict=null;
        this.CPin=null;
      }
    }
    onEmployeee(){
      this.flag1=false;
      this.flag2=true;
      this.flag3=false;
      this.flag4=false;
      this.flag5=false;
      this.flag6=false;
      this.flag7=false;

    }
    onEmpPre(){
      this.flag1=true;
      this.flag2=false;
      this.flag3=false;
      this.flag4=false;
      this.flag5=false;
      this.flag6=false;
      this.flag7=false;
    }
    onEmployee1(){
      this.flag1=false;
      this.flag2=false;
      this.flag3=true;
      this.flag4=false;
      this.flag5=false;
      this.flag6=false;
      this.flag7=false;
  }
    onEmpPre1(){
    this.flag1=false;
    this.flag2=true;
    this.flag3=false;
    this.flag4=false;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }
  onEmployee2(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }
  onEmpPre2(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=true;
    this.flag4=false;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }
  onEmployee3(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=true;
    this.flag6=false;
    this.flag7=false;

  }
  onEmpPre3(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }

  onEmployee4(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=false;
    this.flag6=true;
    this.flag7=false;
  }
  onEmpPre4(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }

  onEmployee5(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=false;
    this.flag6=false;
    this.flag7=true;

  }
  onEmpPre55(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=true;
    this.flag6=false;
    this.flag7=false;
  }
  onEmployee6(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
    this.flag8=true;
  }
  onEmpPre6(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=false;
    this.flag6=true;
    this.flag7=false;
    this.flag8=false;
  }

  next(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=true;
    this.flag5=false;
    this.flag6=false;
    this.flag7=false;
  }
  nextt(){
    this.flag1=false;
    this.flag2=false;
    this.flag3=false;
    this.flag4=false;
    this.flag5=true;
    this.flag6=false;
    this.flag7=false;

  }
  qualification_Group()
  {
      return this.ang.group
      ({
        qualification: new FormControl(null,[Validators.required]),
        institute:new FormControl (null,[Validators.required]),
        passing_year: new FormControl (null,[Validators.required]),
        score: new FormControl (null,[Validators.required]),
        qualification_area: new FormControl (null,[Validators.required]),

      });
     // this.signupForm.get('qualification').valueChanges.subscribe((x)=>this.nameInvalid(x));
    // this.signupForm.controls['qualification'].valueChanges.subscribe(value => {
   // });

  }
//for show and hide button
  onclickFlag5(){
    this.flag5= !this.flag5;
  }

//start here
onAddDetail2(): void
      {
        this.arrquali.push(this.signupForm.value);
        console.log('Qualification Details',this.arrquali);
        // console.log('Qualification Details',this.signupForm.get('qualification_details').controls['qualification'].value);
      }

  get qualiArray()
  {
    return<FormArray>this.signupForm.get('qualification_details');
  }


//add the qualicatin box
  addqualification()
  {
    this.qualiArray.push(this.qualification_Group());
  }

//delete the item from Qualification table
  deletequalification(index)
  {
  this.qualiArray.removeAt(index);
  }

  //for clear data
  onEdit1()
  {
  this.qualiArray.reset();
  }

//end  here

addang1() {
  const control = <FormArray>this.signupForm.get('qualification_details');
  control.push(this.qualification_Group());
}
//get details from Qualifications
getang2(form): Array<any> {
  return form.controls.qualification_details.controls;
}
Duplicate3(quali): boolean {
  let myArray = this.getang2(this.signupForm);
  let test = myArray.filter(data => data.controls.qualification.value == quali && quali != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}
//this is for save button
 onSaveDetail(control: AbstractControl)
  {
     if (this.arrquali.length == 0)
     {
       alert("Data is not Added...") ;
     }
     alert("Data Added Successfully!...");
   }


  //this for hiding next button
   OnClickAdd2()
   {
    if( this.arrquali.length ==0)
    {
      return true;
    }
   }

   employment_Group()
{
    return this.ang.group
    ({
      fromto: new FormGroup({
        fromDate: new  FormControl( null, [Validators.required ]),
        toDate: new  FormControl( null, [Validators.required ]),
      },  [this.fromToDate('fromDate', 'toDate').bind(this)]
      ),
      company: new  FormControl(null, [Validators.required]),
      designation: new  FormControl(null, [Validators.required]),
      relevant: new  FormControl(null, [Validators.required]),
      nrelevant: new  FormControl(null, [Validators.required]),
    });
  }
  fromToDate(fromDate: string, toDate: string)//2020 -->fromdate 2022-->todate
  {
    return (group: FormGroup): {[key: string]: any} => {
      let f = group.controls[fromDate];
      let t = group.controls[toDate];
      if (f.value > t.value) {
        return {
          dates: "From Date should be less than to Date"
        };
      }
      return {};
    }
  }
//get details from employee
getang1(form): Array<any> {
  return form.controls.employment_details.controls;
}
Duplicate2(fromDate): boolean {
  let myArray = this.getang1(this.signupForm1);
  let test = myArray.filter(data => data.controls.fromto.get('toDate').value >= fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false;
  }
}
Duplicate1(fromDate): boolean {
  let myArray = this.getang1(this.signupForm1);
  let test = myArray.filter(data => data.controls.fromto.get('fromDate').value == fromDate && fromDate != null)
  if (test.length > 1) {
    return true;
  } else {
    return false
  }
}
//start here
onAddDetail1(): void {

  this.arremployee.push(this.signupForm1.get('employment_details').value);

  for (let entry of this.arremployee) {
    console.log('Employment Details', entry);}
  }

get EmployeeArray()
{
return<FormArray>this.signupForm1.get('employment_details');
}

addemployment()
{
this.EmployeeArray.push(this.employment_Group());
}

deleteemployment(index)
{
this.EmployeeArray.removeAt(index);
}

myReset(index)
{
this.EmployeeArray.reset(index);
}
 //end data
   onSaveDetail1(control: AbstractControl)
    {
      if (this.arremployee.indexOf(control.value) >= 0)
       {
         alert("Data is not Added...") ;
       }
       alert("Data is Added Successfully!...");
     }
    OnClickAdd1()
    {
     if( this.arremployee.length ==0)
     {
       return true;
     }
    }


SkillSetDetail()
    {
        return this.ang.group
        ({
          skillCategory: new FormControl(null,[Validators.required]),
          skill:new FormControl (null,[Validators.required]),
          skillLevel: new FormControl (null,[Validators.required]),
          isCurrent: new FormControl (null,[Validators.required]),
          Experience: new FormControl (null,[Validators.required]),
          Remarks: new FormControl (null,[Validators.required]),
        });

    }
  //for show and hide button
    onclickFlag(){
      this.flag= !this.flag;
    }

  //start here
  onAddDetail(): void
        {
          this.arrskill.push(this.skillForm.value);
          console.log('SkillDetail',this.arrskill);
          // console.log('Qualification Details',this.signupForm.get('qualification_details').controls['qualification'].value);
        }

    get skillSetDetailArray()
    {
      return<FormArray>this.skillForm.get('skill_details');
    }



  //add the skillset box
      addSkillCategory()
    {
      this.skillSetDetailArray.push(this.SkillSetDetail());
    }

  //delete the item from skillSet table
    deleteSkill(index)
    {
    this.skillSetDetailArray.removeAt(index);
    }

    //for clear data
    onEdit()
    {
    this.skillSetDetailArray.reset();
    }

  //end  here

  addang() {
    const control = <FormArray>this.skillForm.get('skillSetDetail');
    control.push(this.skillLevel());
  }


  //get details from SkillSet
  getang(form): Array<any> {
    return form.controls.skill_details.controls;
  }

  Duplicate(skill): boolean {
    let myArray = this.getang(this.skillForm);
    let test = myArray.filter(data => data.controls.skill.value == skill && skill != null)
    if (test.length > 1) {
      return true;
    } else {
      return false
    }
  }


  //this is for save button
   onSkillDetail(control: AbstractControl)
    {
       if (this.arrskill.length == 0)
       {
         alert("Data is not Added...") ;
       }
       alert("Data Added Successfully!...");
     }


    //this for hinding next button
     OnClickAdd()
     {
      if( this.arrskill.length ==0)
      {
        return true;
      }
     }


 setAge(val : Date){
    var td=new Date();
    var py=td.getFullYear();
      var doby = new Date(val).getFullYear();
        var ans=py-doby;
        console.log(ans);
        this.age=ans;
 }
}









