import { Component, computed, inject, OnInit } from '@angular/core';
import { DadenHeaderComponent } from '../../shared/components/daden-header/daden-header.component';
import { DadenPageFooterComponent } from '../../shared/components/daden-page-footer/daden-page-footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DadenGroupHeaderComponent } from '../../shared/components/daden-group-header/daden-group-header.component';
import { DadenDetailComponent } from '../../shared/components/daden-detail/daden-detail.component';
import { DadenLabelComponent } from '../../shared/components/daden-label/daden-label.component';
import { DadenDropdownComponent } from "../../shared/components/daden-dropdown/daden-dropdown.component";
import { TargetAudienceService } from './services/target-audience.service';
import { DadenDropdown } from '../../shared/components/daden-dropdown/models/daden-dropdown';
import { CommonModule } from '@angular/common';
import { TargetAudience } from './models/target-audience-interface';

@Component({
  selector: 'app-target-audience',
  imports: [
    DadenHeaderComponent,
    CommonModule,
    DadenPageFooterComponent,
    TranslateModule,
    DadenGroupHeaderComponent,
    DadenDetailComponent,
    DadenLabelComponent,
    DadenDropdownComponent
  ],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss',
  standalone: true
})
export class TargetAudienceComponent implements OnInit {
  private readonly translate = inject(TranslateService);
  private readonly targetAudienceService = inject(TargetAudienceService);

  targetAudience = this.targetAudienceService.getTargetAudience();
  targetAudienceWatch = computed(() => this.targetAudience());

  groupHeaderTitleTargetAudience: string = "";
  groupHeaderSubTitleargetAudience: string = "";
  groupHeaderTitlePreview: string = "";
  groupHeaderSubTitlePreview: string ="";

  dropDownAgeGroupsConfig: DadenDropdown = {
    placeholder: "Select age range",
    items: [],
    selectedItem: '',
    disabled: false,
  }

  dropDownLocationConfig: DadenDropdown = {
    placeholder: "Select location",
    items: [],
    selectedItem: '',
    disabled: false,
  }

  ngOnInit(): void {
    this.groupHeaderTitleTargetAudience = this.translate.instant("target-audience.form-area.group-title-audience");
    this.groupHeaderSubTitleargetAudience = this.translate.instant("target-audience.form-area.group-subTitle-audience");
    this.groupHeaderTitlePreview = this.translate.instant("target-audience.preview-area.preview-title");
    this.groupHeaderSubTitlePreview = this.translate.instant("target-audience.preview-area.preview-description");

    this.targetAudienceService.loadAgeGroups().subscribe((data) => {
      console.log(data.ageGroups, " <--- AgeGroups GET PARENT");
      this.dropDownAgeGroupsConfig.items = data.ageGroups;
    });

    this.targetAudienceService.loadLocations().subscribe((data) => {
      console.log(data.locations, " <--- Locations GET PARENT");
      this.dropDownLocationConfig.items = data.locations;
    });
  }

    triggerAudiencePreview(event: string | undefined, prop: keyof TargetAudience) {
      if (event) {
        const audienceProp: Partial<TargetAudience> = {};
        audienceProp[prop] = [event] as any;
        this.updateTargetAudienceCollection(audienceProp);
      }
    }
  
    updateTargetAudienceCollection(updates: Partial<ReturnType<typeof this.targetAudience>>){
      this.targetAudience.update(curr => ({...curr, ...updates}));
      console.log(updates, " hier moet ik generic updaten!!");
    }
}
