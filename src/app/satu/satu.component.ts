import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satu',
  templateUrl: './satu.component.html',
  styleUrls: ['./satu.component.css']
})
export class SatuComponent implements OnInit {

  nama: string;
  jurusan: string;
  semester: number;
  hobby:any;
  constructor() {
    this.nama='wiwik listiyarini';
    this.jurusan='teknik informatika';
    this.semester=5;
    this.hobby=["baca","olahraga","makan"];
   }

  ngOnInit(): void {
  }

}
