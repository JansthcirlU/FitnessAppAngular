import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayDirective } from './overlay/dynamic.directive';
import { OverlayService } from './overlay/overlay.service';
import { EmptyComponent } from './empty/empty.component';
import { CardComponent } from './card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { JoinPipe } from './pipes/join.pipe';
import { ShortenPipe } from './pipes/shorten.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    OverlayComponent,
    OverlayDirective,
    EmptyComponent,
    CardComponent,
    JoinPipe,
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverlayComponent,
    OverlayDirective,
    CardComponent,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    JoinPipe,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    OverlayService,
  ]
})
export class SharedModule { }
