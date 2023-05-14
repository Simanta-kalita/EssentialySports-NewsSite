const jsonata = require('jsonata')
const path = require('path')
const newsData = require('../../../config/news.json')

export type Article = {
    title: Array<string>;
    image?: string;
    link: Array<string>;
    comments: Array<string>;
    'dc:creator': Array<string>;
    description: Array<string>;
    pubDate: Array<string>;
    guid: Array<object>;
    "content:encoded": Array<string>;
    "wfw:commentRss": Array<string>;
    "slash:comments": Array<string>;
    "media:content": Array<object>;
    author?: {
      name: string;
      image: string;
    };
    category: Array<string>;
  };

const newsMapping = `$.({
  "sports": (
      $map($.**.item, function($v, $i, $a){(
          {
            "image": $v.**.url,
            "title": $v.title[0],
            "description": $v.description[0],
            "createdAt": $v.pubDate[0],
            "excerpt": $v.description[0],
            "author": $lookup($v,"dc:creator")[0]
          }
      )})
  )
})`
  
  export async function getNews() {
    const news = await jsonata(newsMapping).evaluate(newsData)
    const all = news['sports'];
    if (all.length > 0) {
      return all;
    }
    return null;
  }