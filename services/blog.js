import slugify from "slugify";
import { storeLocally } from "./io/download";
import { request } from "./request";
import { mockData } from "./_mock_";

export const getBlogPosts = async () => {
  try {
    //   const dataStr = await request.get(`${API_URL_PREFIX}articles?limit=3`)
    //   const data = JSON.parse(dataStr)
    const data = mockData.articleList;

    const result = await Promise.allSettled(data.docs.map(async (doc) => {
      return {
        id: doc.id,
        title: doc.title,
        image: await storeLocally(`${process.env.FILE_URL_PREFIX}${doc.cover.filename}`, 'blog-images'),
        // image: `/${doc.cover.filename}`,
        slug: `https://blog.neptunemutual.com/${slugify(doc.title, {
            lower: true,
            trim: true,
            strict: true
        })}`,
        intro: doc.intro.replace('&hellip;', ''),
        date: doc.updatedAt || doc.createdAt,
        tags: doc.tags.map((tag) => tag.name).slice(0, 1),
      };
    }));

    return result.map(x => x.value);
  } catch (error) {
    console.error(error);
  }

  return [];
};
