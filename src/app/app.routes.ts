import { Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MessageListComponent } from './components/message-list/message-list.component';
 
export const routes: Routes = [
    {path : "contact-form", component:ContactFormComponent},
    {path : "messages" , component:MessageListComponent}
];