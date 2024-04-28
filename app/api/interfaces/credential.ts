export interface ICredential {
  provider: string;
  handler: string;
  kind: string;
  verified: boolean;
  active: boolean;
}
