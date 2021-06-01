import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = []

  constructor() { }

  addMessage(title: string) {
    this.messages.push(`Grade updated for ${title}`)
    setTimeout(() => this.messages.shift(), env.MESSAGE_TIME)
  }

  getMessages() {
    return this.messages;
  }
}
