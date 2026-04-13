export interface I_Config {
  app: I_AppConfig,
  //api: I_ApiConfig,
}

export interface I_AppConfig {
  title: string
}

export type T_AuthenticationType = 'base64' | 'bearer'
export interface I_ApiConfig {
  baseUrl: string,
  user: string,
  password: string
  authType: T_AuthenticationType,
}