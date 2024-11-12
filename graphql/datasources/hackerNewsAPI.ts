import { RESTDataSource } from '@apollo/datasource-rest'
import { Job, ListType, Story, Comment } from '../types/resolvers';

export default class HackerNewsAPI extends RESTDataSource {
  override baseURL = 'https://hacker-news.firebaseio.com/';

  getItems = (type: ListType) => this.get<number[]>(`/v0/${type}.json`)

  getItem = <T extends Story | Job | Comment>(id: number) => this.get<T>(`/v0/item/${id}.json`)
}