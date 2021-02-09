import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  result:string = '';
  prev:number = 0;
  current:string = '';
  op_last:string = '';

  ngOnInit(): void {
  }

  btnClick(val:number): void {
    this.result += val;
  }

  reset():void {
    this.result = '';
    this.prev = 0;
    this.op_last = '';
  }

  op(op:string): void {
    const ops = ['+', '-', '*', '/', '='];
    if (!ops.includes(op)){
      return;
    }

    if(this.op_last != ''){
      this.prev = eval(this.prev + this.op_last + parseInt(this.result));
      this.result = '';
    }else if (this.op_last == ''){
      this.prev = parseInt(this.result);
      this.op_last = op;
      this.result = '';
    }
    if (op === '='){
      this.result = this.prev + '';
    }
    console.log('prev', this.prev);
    console.log('op_last', this.op_last);
  }

}
