import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { CalendarModule } from 'primeng/calendar';

import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { PaginatorModule } from 'primeng/paginator';
import { PickListModule } from 'primeng/picklist';
import { TimelineModule } from 'primeng/timeline';
import { TreeModule } from 'primeng/tree';
import { VirtualScrollerModule } from 'primeng/virtualscroller';

// data display components
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';

// overlay components
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';

// file upload
import { FileUploadModule } from 'primeng/fileupload';

// menu components
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';

// chart components
import { ChartModule } from 'primeng/chart';

// messages and notification components
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';

// media components
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
// drag and drop components
import { DragDropModule } from 'primeng/dragdrop';
// miscellaneous components
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BadgeModule } from 'primeng/badge';
import { BlockUIModule } from 'primeng/blockui';
import { ChipModule } from 'primeng/chip';
import { InplaceModule } from 'primeng/inplace';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { GMapModule } from 'primeng/gmap';
import { SpeedDialModule } from 'primeng/speeddial';
export const PrimengModules: any[] = [
  // form input components
  ButtonModule,
  SplitButtonModule,
  AutoCompleteModule,
  CalendarModule,
  CascadeSelectModule,
  CheckboxModule,
  ChipsModule,
  ColorPickerModule,
  DropdownModule,
  InputMaskModule,
  InputNumberModule,
  InputSwitchModule,
  InputTextareaModule,
  KeyFilterModule,
  KnobModule,
  ListboxModule,
  MultiSelectModule,
  PasswordModule,
  RadioButtonModule,
  RatingModule,
  SliderModule,
  SelectButtonModule,
  ToggleButtonModule,
  TriStateCheckboxModule,
  // data displaycomponents
  DataViewModule,
  TableModule,
  OrderListModule,
  OrganizationChartModule,
  PaginatorModule,
  PickListModule,
  TimelineModule,
  TreeModule,
  VirtualScrollerModule,

  // panel components
  AccordionModule,
  CardModule,
  DividerModule,
  FieldsetModule,
  PanelModule,
  SplitterModule,
  ScrollPanelModule,
  TabViewModule,
  ToolbarModule,

  // overlay components
  ConfirmDialogModule,
  ConfirmPopupModule,
  DialogModule,
  DynamicDialogModule,
  OverlayPanelModule,
  SidebarModule,
  TooltipModule,

  // file upload section
  FileUploadModule,
  // menu components
  MenuModule,
  BreadcrumbModule,
  ContextMenuModule,
  MenubarModule,
  PanelMenuModule,
  SlideMenuModule,
  StepsModule,
  TabMenuModule,
  TieredMenuModule,
  // charts components
  ChartModule,
  GMapModule,
  // messages components
  MessageModule,
  MessagesModule,
  ToastModule,
  // media and drag and rop components
  CarouselModule,
  GalleriaModule,
  DragDropModule,
  // miscellaneous components
  AvatarModule,
  AvatarGroupModule,
  BadgeModule,
  BlockUIModule,
  ChipModule,
  InplaceModule,
  ProgressBarModule,
  ProgressSpinnerModule,
  ScrollTopModule,
  SkeletonModule,
  TagModule,
  SpeedDialModule,
];

@NgModule({
  declarations: [],
  imports: [PrimengModules],
  exports: [PrimengModules],
})
export class PrimengModule {}
