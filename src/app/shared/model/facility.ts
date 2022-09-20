export interface Facility {
  id?: number;
  name: string;
  address: string;
  facilityCode: string;
  city: string;
  email: string;
  phone: string;
  facilityType: FacilityType;
  administrativeArea: AdministrativeArea;
}

export interface FacilityType {
  id: string;
  name: string;
}

export interface AdministrativeArea {
  id: number;
  name: string;
  code: string;
  label: string;
}
