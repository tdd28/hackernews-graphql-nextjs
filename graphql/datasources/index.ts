import HackerNewsAPI from "./hackerNewsAPI";

const datasources = {
  hackerNewsAPI: new HackerNewsAPI()
}

export type DataSources = typeof datasources

export default datasources