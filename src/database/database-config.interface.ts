export interface InterfaceDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
}

export interface InterfaceDatabaseConfig {
  development: InterfaceDatabaseConfigAttributes;
  test: InterfaceDatabaseConfigAttributes;
  production: InterfaceDatabaseConfigAttributes;
}
