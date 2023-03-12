import { Component, OnInit } from '@angular/core';


interface EquationTerm {
  type: 'variable' | 'constant' | 'operator';
  name: string | undefined,
  value: string;
}

interface Equation {
  terms: EquationTerm[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.equation = {terms: [
      {
        type: 'variable',
        value: "12",
        name: "abc"
      },
      {
        type: 'operator',
        value: "*",
        name: undefined
      },
      {
        type: 'variable',
        value: "120",
        name: "BCD"
      },
    ]}
  }
  title = 'equationGenerator';

  equation: Equation = {terms: []}

  operators = [
    { symbol: "*", precedence: 3 },
    { symbol: "/", precedence: 3 },
    { symbol: "+", precedence: 2 },
    { symbol: "-", precedence: 2 },
  ];
  

  generateEquation() {
    let equationString = '';
  
    for (let i = 0; i < this.equation.terms.length; i++) {
      const term = this.equation.terms[i];
  
      if (term.type === 'variable') {
        equationString += " " + term.name + " ";
      } else {
        equationString += term.value;
      }
    }

    console.log(equationString)
    equationString = equationString.replace("abc", "32")
    equationString = equationString.replace("BCD", "2")
    console.log(equationString)
    let numerator = eval(equationString);
    console.log(numerator)
  }


}
