export class Employee1 {
  constructor(
    public id: number,
    public employee_no: number,
    public  title: string,
    public  name: string,
    public  addresses_as: string,
    public  first_name: string,
    public  middle_name: string,
    public  initials: string,
    public  gender: string,
    public  date_of_birth: Date,
    public  employee_age: number,
    public  official_phone: number,
    public  personal_mobile: number,
    public  fax: number,
    public  official_email: string,
    public  personnal_email: string,
    public  personnal_email2: string,
    public  personnal_email3: string,
    public  photo_file: string,
    public  birthplace: string,
    public  religion: string,
    public  caste: string,
    public  domicile: string,
    public  nationality: string,
    public  voter_id: string,
    public  pan_no: string,
    public  adhar_no: string,
    public  marital_status: string,
    public  no_of_children: number,
    public  marriage_date: Date,
    public  spouse_name: string,
    public  bank_name: string,
    public  account_type: string,
    public  payment_type: string,
    public  account_no: string,
    public  branch_details: string,
    public  ifsc_code: string,
    public  reimbursement_bank_name: string,
    public  reimbursement_account_no: string,
  ) {}
}



export class Employee2 {
  constructor(
    public id1: number,
public  address_permanent: string,
    public  city: string,
    public  country: string,
    public  state: string,
    public  district: string,
    public  pin: number,
    public  phone1: number,
    public  phone2: number,
    public  fax1: number,
    public  personnal_email_id: string,
    ) {}
  }


  export class Employee3 {
    constructor(
      public id2: number,
    public address_present:  string,
    public city1:  string,
    public country1:  string,
    public  state1 : string,
    public  district1 : string,
    public pin1:  number,
    public phone3:  number,
    public phone4:  number,
    public fax2:  number,
    public personal_email_id:  string,
    ) {}
  }
  export class Employee4 {
    constructor(
      public id3: number,
    public from_date:  Date,
    public to_date:  Date,
    public company:  string,
    public designation:  string,
    public  relevant:  string,
    public  non_relevant:  string,
    ) {}
  }
  export class Employee5 {
    constructor(
      public id4: number,
    public qualification:  string,
    public institute:  string,
    public passing_year:  number,
    public score:  string,
    public qualification_area:  string,
    ) {}
  }


  export class Employee6 {
    constructor(
      public id5: number,
    public skill_category:  string,
    public skill:  string,
    public skill_level:  string,
    public is_current:  string,
    public  experience:  number,
    public  remarks:  string,

    ) {}
  }
