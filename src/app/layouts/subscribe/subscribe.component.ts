import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscribeData : FormGroup
  constructor(private http : HttpClient) {
    this.subscribeData = new FormGroup({
      email : new FormControl(Validators.email)
    })
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.subscribeData.valid){
      this.http.post('https://example.com/api/subscribe',this.subscribeData.value)
    }
  }

}
