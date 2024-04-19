import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JsonPipe} from "@angular/common";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";

@Component({

  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatList,
    MatListItem,
    MatFormField,
    MatCard,
    MatCardContent,
    MatButton,
    MatInput,
    MatLabel,
    MatFormField
  ],
  templateUrl: './gpt.component.html',
  styleUrl: './gpt.component.css'
})
export class GptComponent implements OnInit {
  queryFormGroup !: FormGroup
  messages = [
    {role: "system", content: "Hello !"}
  ];
  result: any;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.queryFormGroup = this.fb.group({
      query: this.fb.control("")
    })
  }

  handleAskGPT() {
    let url = "https://api.openai.com/v1/chat/completions";
    let httpHeaders = new HttpHeaders()
      .set("Authorization", "Bearer sk-proj-g8KdlAtxBIBjfeERJsQjT3BlbkFJC7qOytXU6W6Q5QQJcBL6")
    let payload = {
      model: "gpt-3.5-turbo",
      messages: this.messages
    }
    this.httpClient.post(url, payload, {headers: httpHeaders})
      .subscribe({
        next: (resp) => {
          this.result = resp;
        },
        error: (err) => {
        }
      })
  }

  HandleAskGPT4() {
    let url = "https://api.openai.com/v1/chat/completions";
    let httpHeaders = new HttpHeaders()
      .set("Authorization", "Bearer API_KEY.txt")
    let payload= {
      model: "gpt-3.5-turbo-1106",
      messages: this.messages
    }
    this.httpClient.post(url,payload, {headers: httpHeaders})
      .subscribe({
        next : (resp) => {
          this.result=resp;
        },
        error : (err) =>{}
      })
  }
}


