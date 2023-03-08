import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { NoteComponent } from './note/note.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path: 'bookmarks', component: BookmarkComponent},
  {path: 'todos', component: TodoComponent},
  {path: 'notes', component: NoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
