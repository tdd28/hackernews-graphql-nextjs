import HackerNewsAPI from "./hackernewsAPI";

const datasources = {
  hackerNewsAPI: new HackerNewsAPI()
}

export type DataSources = typeof datasources

export default datasources