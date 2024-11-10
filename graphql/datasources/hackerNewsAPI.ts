import { RESTDataSource } from '@apollo/datasource-rest'

export default class HackerNewsAPI extends RESTDataSource {
  override baseURL = 'https://hacker-news.firebaseio.com/';
}