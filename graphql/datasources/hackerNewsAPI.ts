import { RESTDataSource } from '@apollo/datasource-rest'
import { ListType, Story } from '../types/resolvers';

export default class HackerNewsAPI extends RESTDataSource {
  override baseURL = 'https://hacker-news.firebaseio.com/';

  getItems = (type: ListType) => this.get<number[]>(`/v0/${type}.json`)

  getItem = (id: number) => this.get<Story>(`/v0/item/${id}.json`)
}