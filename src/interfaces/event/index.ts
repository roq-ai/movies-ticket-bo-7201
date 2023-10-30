import { TicketInterface } from 'interfaces/ticket';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface EventInterface {
  id?: string;
  name: string;
  description?: string;
  date: any;
  location: string;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  vendor?: VendorInterface;
  _count?: {
    ticket?: number;
  };
}

export interface EventGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  location?: string;
  vendor_id?: string;
}
