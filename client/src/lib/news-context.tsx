import React, { createContext, useContext, useState, ReactNode } from 'react';
import { nanoid } from 'nanoid';

export type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
};

type NewsContextType = {
  news: NewsItem[];
  addNews: (news: Omit<NewsItem, 'id' | 'date'>) => void;
  deleteNews: (id: string) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const NewsContext = createContext<NewsContextType | undefined>(undefined);

const INITIAL_NEWS: NewsItem[] = [
  {
    id: '1',
    title: "Smart Africa Launches New Youth Initiative",
    excerpt: "A groundbreaking program designed to empower 10,000 young entrepreneurs across East Africa.",
    content: "Smart Africa has officially launched a new initiative aimed at bridging the digital divide...",
    date: "2025-05-15",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: '2',
    title: "Speaking at the African Tech Summit",
    excerpt: "Discussing the future of digital infrastructure and policy harmonization in Kigali.",
    content: "It was an honor to speak at the African Tech Summit this year, sharing insights on...",
    date: "2025-04-20",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2940&auto=format&fit=crop"
  }
];

export function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>(INITIAL_NEWS);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addNews = (newItem: Omit<NewsItem, 'id' | 'date'>) => {
    const article: NewsItem = {
      ...newItem,
      id: nanoid(),
      date: new Date().toISOString().split('T')[0]
    };
    setNews([article, ...news]);
  };

  const deleteNews = (id: string) => {
    setNews(news.filter(item => item.id !== id));
  };

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews, isAuthenticated, login, logout }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
}
