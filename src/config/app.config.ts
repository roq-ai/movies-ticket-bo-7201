interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Event Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Event Manager', 'Marketing Specialist'],
  tenantName: 'Vendor',
  applicationName: 'Movies Ticket Booking Online',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read movie details',
    'Read event details',
    'Create, read, and delete ticket',
  ],
  ownerAbilities: ['Manage events', 'Create tickets for events', 'Edit vendor information', 'Manage reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/e9095e78-4f13-4385-934e-e44a034618eb',
};
