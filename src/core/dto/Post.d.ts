export interface Post {
  id: number;
  author: string;
  content: string;
  image: string;
  liked: boolean;
  bookMarked?: boolean;
}