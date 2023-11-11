type UserIdentityProvider = 'メールアドレス' | '電話番号' | 'ユーザー名';

export type XAccountData = {
  id: string;
  userName: string;
  displayName: string;
  loginProvider: 'Google' | 'Apple' | UserIdentityProvider;
  loginProviderId: string;
  loginProviderPassword: string;
  remark: string;
};
