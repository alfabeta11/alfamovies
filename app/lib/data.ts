import axios from 'axios';
import { data, genre, production } from './definitions';

// Genres
export const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Musik',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romantic',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV-Film',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

// Get a specific genre
export function getGenre(id: number | string) {
  const genre = genres.filter((genre) => genre.id === id);
  return genre[0];
}

export async function getTopRated(type: string, page: number) {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const data = await response.data.results;
    return <data>{
      data,
      totalPages: response.data.total_pages,
    };
  } catch (err) {
    console.log('Failed to load Top rated movies.', err);
  }
}
// Popular movies
export async function getPopular(page: number, type: string) {
  try {
    console.log('Fetching...');
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const result = response.data;
    const totalPages = result.total_pages;
    return {
      data: await result.results,
      totalPages,
    };
  } catch (error) {
    console.error('Failed to fetch Data: ');
  }
}
// Get a specific media data
export async function getMediaInfos(id: number, type: string) {

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const result = await response.data;
    const genres = result.genres.map((genre: genre) => genre.name).join(', ');
    const productions = await result.production_companies
      .map((production: production) => production.name)
      .join(', ');
    return { genres, productions, infos: result };
  } catch (err) {
    console.error('Fail to get Media Infos: ', err);
  }
}
// Get movie/tv trendings
export async function getTrendings(period: string, type: 'tv' | 'movie') {
  try {
    console.log('Fetching...');
    const response = await axios.get(
      `https://api.themoviedb.org/3//trending/${type}/${period}?language=en-US`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const result = await response.data.results.filter(
      (item: { poster_path: any; media_type: string }) =>
        item.media_type !== 'person' && item.poster_path !== null,
    );
    // console.log('Filtering ' + type + ' Results Success.');
    return result;
  } catch (error) {
    console.error('Failed to fetch Data: ', error);
  }
}

// Get random trending movie;
export async function getTrendingMovie() {
  try {
    const response = await getTrendings('day', 'movie');
    console.log('done');
    return response[Math.floor(Math.random() * 10)];
  } catch (err) {
    console.log('Failed to load Hero Movie.', err);
    return err;
  }
}
// get recommendations for a movie/tv id
export async function getRecommendations(id: number, type: string) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US&page=1`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const result = await response.data;
    const data = result.results.filter(
      (item: { poster_path: any }, index: number) =>
        item.poster_path !== (null || undefined) && index < 15,
    );
    console.log('Got the suggestions!');
    return data;
  } catch (err) {
    console.log('Failed to get Recommendations for Movie: ', err);
  }
}
// Search
export async function getSearchResults(query: string, page: number) {
  try {
    console.log('Fetching...');
    const response = await axios.get(
      `https://api.themoviedb.org/3//search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    console.log('Sucess!');
    const result = response.data.results.filter(
      (item: { poster_path: any; media_type: string }) =>
        item.media_type !== 'person' && item.poster_path !== null,
    );
    const totalPages = response.data.total_pages;
    return {
      data: await result,
      totalPages: totalPages,
    };
  } catch (error) {
    console.error('Failed to fetch Data: ', error);
  }
}
// Get credits for a movie/tv;
export async function getCredits(id: number, type: string) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
      {
        headers: {
          Authorization: process.env.API_TOKEN,
        },
      },
    );
    const data = res.data.cast
      .filter((_: any, index: number) => index < 5)
      .map((item: any) => item.name)
      .join(', ');
    return data;
  } catch (err) {
    console.log('Fetching credits failed: ', err);
    return err;
  }
};

// Upcoming movies/tv (or maybe not so upcoming after all ;) )
export async function getUpcoming(type: string | 'movie' | 'tv') {
  try {
    const res = axios.get(`https://api.themoviedb.org/3/${type}/upcoming?language=en-US&page=1`, {
      headers: {
        Authorization: process.env.API_TOKEN,
      }
    });
    const data = (await res).data.results;
    return data;
  } catch (err) {
    console.error('Failed to get upcomings: ', err);
  }
}