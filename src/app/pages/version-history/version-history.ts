import { Component, signal } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import versionsData from './angular-versions.json';

ModuleRegistry.registerModules([AllCommunityModule]);

interface AngularVersion {
  version: string;
  year: number;
  feature: string;
  rendering: string;
  moduleSystem: string;
  changeDetection: string;
  status: string;
}

@Component({
  selector: 'app-version-history',
  imports: [AgGridAngular],
  templateUrl: './version-history.html',
  styleUrl: './version-history.scss'
})
export class VersionHistoryComponent {
  quickFilter = signal('');

  readonly colDefs: ColDef<AngularVersion>[] = [
    { field: 'version',         headerName: 'Version',          flex: 1, minWidth: 150 },
    { field: 'year',            headerName: 'Year',             flex: 0, minWidth: 80,  maxWidth: 90 },
    { field: 'feature',         headerName: 'Key Feature',      flex: 2, minWidth: 200 },
    { field: 'rendering',       headerName: 'Rendering',        flex: 1, minWidth: 130 },
    { field: 'moduleSystem',    headerName: 'Module System',    flex: 1, minWidth: 150 },
    { field: 'changeDetection', headerName: 'Change Detection', flex: 1, minWidth: 160 },
    { field: 'status',          headerName: 'Status',           flex: 0, minWidth: 90,  maxWidth: 110 }
  ];

  readonly rowData: AngularVersion[] = versionsData;

  onFilterInput(event: Event) {
    this.quickFilter.set((event.target as HTMLInputElement).value);
  }
}