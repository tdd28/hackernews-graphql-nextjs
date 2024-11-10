import datasources, { DataSources } from "./datasources";

export interface Context {
  datasources: DataSources
}

export default async function context(): Promise<Context> {
  return {
    datasources
  }
}