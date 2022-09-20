import { Permission } from './permission';
import { Tile } from './tile';

export interface Role {
  id?: string;
  name: string;
  displayName: string;
  description: string;
  permissionList?: Permission[];
  tilesList?: Tile[];
  revokePermission?: boolean;
  revokeTile?: boolean;
}
