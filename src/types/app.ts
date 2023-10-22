type UserIdentityProvider = 'Email' | 'PhoneNumer' | 'Username';

export type XAccountData = {
  id: string;
  userName: string;
  accountId: string;
  loginProvider: 'Google' | 'Apple' | UserIdentityProvider;
  loginProviderId: string;
  loginProviderPassword: string;
};
