/*
* File: ButtonPanel.java
* Author: Barabás Gergő
* Copyright: 2021, Barabás Gergő
* Group: Szoft V
* Date: 2021-01-13
* Github: https://github.com/Narthenon/
* Licenc: GNU GPL
*/

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '315';
  teruletVisible=false;
  trapezForm = new FormGroup( {
    a: new FormControl(''),
    b: new FormControl(''),
    c: new FormControl(''),
    d: new FormControl(''),
    s: new FormControl(''),
    terulet: new FormControl('')
  });

  onClickSzamit(){
    let a = Number(this.trapezForm.value.a);
    let b = Number(this.trapezForm.value.b);
    let c = Number(this.trapezForm.value.c);
    let d = Number(this.trapezForm.value.d);
    let felker = (a+b+c+d)/2;
    let terulet = ((felker-a)*(felker-b)*(felker-c)*(felker-d));
    this.trapezForm.patchValue({terulet:terulet});
    console.log (terulet)
    this.teruletVisible = true;
  }
}

