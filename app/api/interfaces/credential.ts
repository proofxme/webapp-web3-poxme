export interface ICredential {
  username?: string;
  provider: string;
  handler: string;
  kind: string;
  verified: boolean;
  active: boolean;
}
