import { ContactService } from './../../services/contact.service';
import { MessageService } from './../../services/message.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
 
 
interface Message{
  _id : string,
  name : string,
  email :string,
  mobile : string,
  message : string
}
@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule, ContactFormComponent],
  providers:[MessageService,ContactService],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit{
 
  messages : Message[]=[];
  id : any='';
  showAlert: boolean= false;
  showSuccessModal : boolean=false;
  showFailureModal : boolean=false;
  edit : boolean = false;
  editMessage : Message | null=null;
  dataModified : boolean = false;

  constructor(private MessageService:MessageService,private ContactService:ContactService) {}
 
  ngOnInit(): void {
    this.MessageService.getMessages().subscribe((data) =>{
      this.messages = data;
    },(error) =>{
      console.log('Error fetching messages',error)
    });
  }
 
  deleteMessage(id : string){
    this.id = id;
    this.showAlert = true;
  }
 
  confirm(){
    if(this.id){
      this.ContactService.deleteContact(this.id).subscribe((res)=>{

        this.messages =this.messages.filter(item =>item._id !==this.id);      
        this.id = null;      
        this.showAlert=false; 

        this.showSuccessModal=true;
        setTimeout(() => {
          this.showSuccessModal=false;
        }, 2000);
      },(error: any)=>{
        this.showFailureModal = false;
        setTimeout(() => {
          this.showFailureModal=false;
        }, 2000);
        console.error('Error deleting the data',error)
      })
    }
  }
 
  cancel(){
    this.id = null;
    this.showAlert=false;
  }

  onEditMessage(message : Message) {
    this.edit = true;
    this.editMessage = message;
  }

  onEditClose(message : null | Message) {
    this.edit = false;
  }

}