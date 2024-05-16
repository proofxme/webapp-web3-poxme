export interface IIdentity {
  handlerName: string;
  content: string;
  active: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IIdentityCore extends IIdentity {
  avatar: string;
  displayName: string;
  bio: string;
  visibility: boolean;
  active: boolean;
  privacy: boolean;
}

export interface IIdentityCredential extends IIdentity {
  handler: string;
  active: boolean;
  value: string;
  displayValue: string;
}

export interface IIdentityCredential extends IIdentity {
}

export interface IIdentityLink extends IIdentity {
  icon: string;
  displayValue: string;
  url: string;
}
