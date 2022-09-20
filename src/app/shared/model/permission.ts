import { PermissionCategory } from './permission-category';

export interface Permission {
  id?: string;
  name: string;
  displayName: string;
  serviceName: string;
  description: string;
  selected: boolean;
  permissionCategory?: PermissionCategory;
}
