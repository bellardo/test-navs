import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { CrudService } from '../../../crud.service';
import { ErrorHanlderService } from '../../../error-hanlder.service';

import { Enum } from '../enum';

@Component({
  selector: 'app-enum-detail',
  templateUrl: './enum-detail.component.html',
  styleUrls: ['./enum-detail.component.css']
})
export class EnumDetailComponent implements OnInit {

  errorMessage: string = '';

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Enum(1, 'Hello world !!!', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor(private crud: CrudService, private errorHanler: ErrorHanlderService) { }

  ngOnInit() {
  }

  newHero() {
    this.model = new Enum(42, '', '-');
  }

  onSubmit(myForm) { 
    this.submitted = true;
    //console.log(myForm.value);
    this.crud.login(myForm.value.name, myForm.value.alterEgo)
      .subscribe(
        (data) => {console.log('Ok', data)},
        (err) => {
          console.log('Error*', err);
          this.errorHanler.handleError(err);
          this.errorMessage = this.errorHanler.errorMessage;

        },
        () => {console.log('Final')}
        );

  }  

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
