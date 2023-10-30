import { ReviewInterface } from 'interfaces/review';
import { VendorInterface } from 'interfaces/vendor';
import { GetQueryInterface } from 'interfaces';

export interface MovieInterface {
  id?: string;
  title: string;
  genre: string;
  duration: number;
  rating: number;
  release_date: any;
  vendor_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  vendor?: VendorInterface;
  _count?: {
    review?: number;
  };
}

export interface MovieGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  genre?: string;
  vendor_id?: string;
}
