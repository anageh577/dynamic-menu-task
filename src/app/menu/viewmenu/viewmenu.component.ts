import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallapisService } from 'src/app/services/call-api.service';
import { HelperMethodService } from 'src/app/services/helpermethod.service';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrls: ['./viewmenu.component.scss']
})
export class ViewmenuComponent implements OnInit {
  panelOpenState = true;
  type;
  recipeForm: FormGroup;
  recipe;
  allData;
  update = false;
  cateogries: any[] = []
  constructor(
    public apiService: CallapisService,
    private formBuilder: FormBuilder,
    private helperMethod: HelperMethodService) {
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      available: [false, Validators.required],
    });
  }

  ngOnInit(): void {
    this.apiService.allrecipes.subscribe((res: any) => {
      this.allData = res;
      for (let category in this.allData) {
        this.cateogries.push(category)
      }
    }, err => {
    })
  }


  choose(type, name) {
    this.type = type;
    this.update = true;
    this.apiService.getItemByName(type, name).subscribe(res => {
      this.recipeForm.patchValue(res);
      this.recipe = res;
    })
  }
  updateRecipe() {
    this.apiService.updateRecipe(this.type, this.recipe.name, this.recipeForm.value);
    this.recipe = this.recipeForm.value;
    this.helperMethod.openSnackBar('Recipe Updated');
    this.update = false;
  }

}
