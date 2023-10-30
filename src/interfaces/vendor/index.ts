import { EventInterface } from 'interfaces/event';
import { MovieInterface } from 'interfaces/movie';
import { GetQueryInterface } from 'interfaces';

export interface VendorInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  event?: EventInterface[];
  movie?: MovieInterface[];

  _count?: {
    event?: number;
    movie?: number;
  };
}

export interface VendorGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  tenant_id?: string;
}
