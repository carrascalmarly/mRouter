import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-blog',
  standalone: true,
  imports: [],
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.css'
})
export class EditBlogComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.paramMap.subscribe(params =>{
        console.log(params.get('id'))
      })
  }
}
